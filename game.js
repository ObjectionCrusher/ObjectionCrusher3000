(() => {

const QUESTIONS = window.OC_QUESTIONS;
const WEAPONS = window.OC_WEAPONS;

const STORAGE = "objectionCrusher3000_v5";

const defaults = {
  xp:0,
  high:0,
  streak:0,
  fights:0,
  sound:true,
  mastery:{},
  seen:{},
  revisit:[],
  lastId:null,
  lastRole:null
};

function loadProgress(){
  try{
    return {
      ...defaults,
      ...JSON.parse(localStorage.getItem(STORAGE) || "{}")
    };
  }catch{
    return {...defaults};
  }
}

let progress = loadProgress();

function saveProgress(){
  localStorage.setItem(
    STORAGE,
    JSON.stringify(progress)
  );
}

const state = {
  q:null,
  wording:"",
  boss:false,
  counter:false,
  counterText:"",
  firstAnswer:"",
  counterAnswer:"",
  openingScore:null,
  counterScore:null,
  fightScore:0,
  runbackScore:null
};

const $ = id => document.getElementById(id);

const screens = [
  "startScreen",
  "fightScreen",
  "counterScreen",
  "feedbackScreen",
  "runbackScreen",
  "lockScreen"
];

function show(id){
  screens.forEach(x => $(x).classList.add("hidden"));
  $(id).classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}

function level(){
  return Math.floor(progress.xp / 500) + 1;
}

function updateHud(){
  $("hudLevel").textContent = level();
  $("hudXP").textContent = progress.xp;
  $("hudStreak").textContent = progress.streak;
  $("hudHigh").textContent =
    String(progress.high).padStart(3,"0");
  $("soundBtn").textContent =
    progress.sound ? "SOUND ON" : "SOUND OFF";

  $("startProgress").textContent =
    progress.fights
      ? `${progress.fights} fights completed · Level ${level()} · ${progress.xp} XP`
      : "No progress yet. Your first opponent is waiting.";
}

function beep(freq=440,duration=.07,type="square"){
  if(!progress.sound) return;

  try{
    const ctx =
      new (window.AudioContext ||
           window.webkitAudioContext)();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(.04,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      .001,
      ctx.currentTime + duration
    );

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);

  }catch{}
}

function victorySound(){
  beep(440,.07);
  setTimeout(()=>beep(660,.07),80);
  setTimeout(()=>beep(880,.12),160);
}

function dangerSound(){
  beep(150,.11,"sawtooth");
  setTimeout(()=>beep(110,.14,"sawtooth"),100);
}

function normalize(text){
  return " " +
    text.toLowerCase().replace(/\s+/g," ") +
    " ";
}

function has(text,phrases){
  return phrases.some(p => text.includes(p));
}

function count(text,phrases){
  return phrases.reduce(
    (n,p) => n + (text.includes(p) ? 1 : 0),
    0
  );
}

function clamp(n,min,max){
  return Math.max(min,Math.min(max,n));
}

const diagnostic = [
  "what specifically",
  "what exactly",
  "what makes",
  "why",
  "which part",
  "what are you worried",
  "what problem",
  "what happened",
  "what would",
  "where",
  "what do we know"
];

const reframes = [
  "the real question",
  "rather than",
  "not just",
  "instead",
  "the issue isn't",
  "the issue is",
  "the trade",
  "the trade-off",
  "what we lose",
  "the cost of",
  "another way to look"
];

const strongPosition = [
  "my recommendation",
  "i recommend",
  "we should ",
  "we shouldn't",
  "i don't think we should",
  "i do not think we should",
  "i want us to",
  "i'd keep",
  "i would keep",
  "i'd choose",
  "i would choose",
  "i'm recommending",
  "i am recommending",
  "we need to "
];

const weakPosition = [
  "i think",
  "my view",
  "i believe",
  "i'd rather",
  "i would rather"
];

const hedges = [
  "maybe",
  "perhaps",
  "possibly",
  "could maybe",
  "might want to"
];

const strongMoves = [
  "go back to",
  "take this to",
  "take both",
  "find the saving",
  "find the money",
  "keep the",
  "don't make",
  "do not make",
  "show them",
  "show the",
  "lead with",
  "put it in",
  "agree the criteria",
  "set the criteria",
  "bring in",
  "escalate",
  "make the change",
  "offer one",
  "push back",
  "recommend that",
  "ask them",
  "protect the",
  "choose the"
];

const ackTerms = [
  "i understand",
  "i get",
  "that's fair",
  "that is fair",
  "i agree",
  "i hear you",
  "makes sense",
  "you're right",
  "you are right"
];

const canKick = [
  "let's look at the options",
  "let's compare the options",
  "let's explore",
  "let's understand",
  "let's look into",
  "let's see what",
  "we can look at both",
  "we can explore both"
];

function scoreAnswer(text,q){

  const t = normalize(text);
  const words =
    text.trim().split(/\s+/).filter(Boolean).length;

  let diagnosis = 0;

  if(words >= 5) diagnosis = 1;
  if(text.includes("?") || has(t,diagnostic))
    diagnosis++;
  if(count(t,q.focus) >= 1)
    diagnosis++;
  if(has(t,[
    "what specifically",
    "what exactly",
    "what problem",
    "what are you worried",
    "what do we know"
  ]))
    diagnosis++;

  diagnosis = clamp(diagnosis,0,4);


  let reframe = 0;
  const focusHits = count(t,q.focus);

  if(focusHits >= 1) reframe = 2;
  if(focusHits >= 2) reframe = 3;
  if(has(t,reframes))
    reframe = Math.max(reframe,3);

  if(
    focusHits >= 2 &&
    has(t,reframes)
  ){
    reframe = 4;
  }


  let position = 0;

  if(has(t,strongPosition))
    position = 4;
  else if(has(t,weakPosition))
    position = 2;

  if(
    position > 0 &&
    has(t,hedges)
  ){
    position--;
  }


  const leverageWords = [
    ...WEAPONS[q.weapon].leverage,
    "brief",
    "objective",
    "business",
    "strategy",
    "agreed",
    "criteria",
    "client",
    "consumer",
    "audience",
    "outcome",
    "evidence",
    "performance",
    "media",
    "research",
    "brand"
  ];

  const leverageHits =
    count(t,leverageWords);

  let leverage =
    leverageHits >= 3 ? 4 :
    leverageHits >= 2 ? 3 :
    leverageHits === 1 ? 2 : 0;


  let move = 0;

  if(has(t,strongMoves))
    move = 4;
  else if(
    t.includes(" let's ") ||
    t.includes(" we can ") ||
    t.includes(" can we ")
  )
    move = 2;


  const kickedCan =
    has(t,canKick) &&
    position < 3;


  const acknowledgement =
    has(t,ackTerms);

  const natural =
    words >= 10 && words <= 65;

  const total =
    (diagnosis +
     reframe +
     position +
     leverage +
     move) * 5;


  return {
    diagnosis,
    reframe,
    position,
    leverage,
    move,
    total,
    acknowledgement,
    natural,
    kickedCan,
    words
  };
}


function averageScores(a,b){

  if(!b) return {...a};

  return {
    diagnosis:Math.round((a.diagnosis+b.diagnosis)/2),
    reframe:Math.round((a.reframe+b.reframe)/2),
    position:Math.round((a.position+b.position)/2),
    leverage:Math.round((a.leverage+b.leverage)/2),
    move:Math.round((a.move+b.move)/2),
    acknowledgement:a.acknowledgement || b.acknowledgement,
    natural:a.natural && b.natural,
    kickedCan:a.kickedCan || b.kickedCan,
    total:Math.round(
      a.total*.55 +
      b.total*.45
    )
  };
}


function weightedPick(items){

  const weighted = items.map(q => {

    const mastery =
      progress.mastery[q.weapon] ?? 45;

    let weight =
      1 + ((100-mastery)/25);

    if(!progress.seen[q.id])
      weight += 2.5;

    if(q.role !== progress.lastRole)
      weight += .6;

    if(q.id === progress.lastId)
      weight *= .05;

    return {q,weight};
  });

  const sum =
    weighted.reduce(
      (n,x)=>n+x.weight,
      0
    );

  let roll = Math.random()*sum;

  for(const item of weighted){
    roll -= item.weight;
    if(roll <= 0) return item.q;
  }

  return weighted[0].q;
}


function pickQuestion(){

  const nextFight =
    progress.fights + 1;

  const due =
    progress.revisit
      .filter(x => x.due <= nextFight)
      .sort((a,b)=>a.due-b.due);

  let q;

  if(due.length){

    const weapon =
      due[0].weapon;

    progress.revisit.splice(
      progress.revisit.indexOf(due[0]),
      1
    );

    const candidates =
      QUESTIONS.filter(
        x =>
          x.weapon === weapon &&
          x.id !== progress.lastId
      );

    q = weightedPick(
      candidates.length
        ? candidates
        : QUESTIONS
    );

  }else{

    q = weightedPick(QUESTIONS);
  }

  return q;
}


function randomItem(array){
  return array[
    Math.floor(Math.random()*array.length)
  ];
}


function startFight(){

  state.q = pickQuestion();

  state.wording =
    randomItem(state.q.lines);

  state.boss =
    (progress.fights + 1) % 5 === 0;

  state.counter =
    state.boss ||
    Math.random() < .36;

  state.counterText =
    randomItem(
      WEAPONS[state.q.weapon].counter
    );

  state.firstAnswer = "";
  state.counterAnswer = "";
  state.openingScore = null;
  state.counterScore = null;
  state.runbackScore = null;

  $("fightTag").textContent =
    state.boss
      ? `BOSS FIGHT ${progress.fights+1}`
      : `FIGHT ${progress.fights+1}`;

  $("fightRole").textContent =
    state.q.role;

  $("fightQuestion").textContent =
    state.wording;

  $("fightFrame").classList.toggle(
    "boss",
    state.boss
  );

  $("fightInput").value = "";
  $("fightValidation").textContent = "";

  if(state.boss){
    $("cabinet").classList.add("boss-flash");
    setTimeout(
      ()=>$("cabinet").classList.remove("boss-flash"),
      900
    );
    dangerSound();
  }

  show("fightScreen");
  $("fightInput").focus();
}


function submitFirst(){

  const text =
    $("fightInput").value.trim();

  if(
    text.split(/\s+/)
        .filter(Boolean)
        .length < 5
  ){
    $("fightValidation").textContent =
      "Give me a real answer. Goliath isn't accepting five words.";
    return;
  }

  state.firstAnswer = text;

  state.openingScore =
    scoreAnswer(text,state.q);

  beep(330,.07);

  if(state.counter){

    $("counterRole").textContent =
      state.q.role;

    $("counterText").textContent =
      state.counterText;

    $("counterInput").value = "";
    $("counterValidation").textContent = "";

    show("counterScreen");

    dangerSound();

    $("counterInput").focus();

  }else{

    showFeedback();
  }
}


function submitCounter(){

  const text =
    $("counterInput").value.trim();

  if(
    text.split(/\s+/)
        .filter(Boolean)
        .length < 5
  ){
    $("counterValidation").textContent =
      "They pushed back. You need to answer them.";
    return;
  }

  state.counterAnswer = text;

  state.counterScore =
    scoreAnswer(text,state.q);

  showFeedback();
}


const metricNames = {
  diagnosis:"Diagnosis",
  reframe:"Reframe",
  position:"Position",
  leverage:"Leverage",
  move:"Move"
};


function fightVerdict(score){

  if(score >= 90)
    return "Goliath felt that.";

  if(score >= 80)
    return "Flag planted.";

  if(score >= 70)
    return "Strong room.";

  if(score >= 55)
    return "Still standing.";

  return "Reload.";
}


function renderMetrics(score){

  $("metrics").innerHTML = "";

  [
    "diagnosis",
    "reframe",
    "position",
    "leverage",
    "move"
  ].forEach(key => {

    const row =
      document.createElement("div");

    row.className = "metric";

    row.innerHTML = `
      <span>${metricNames[key]}</span>

      <div class="meter">
        <span style="width:${score[key]*25}%"></span>
      </div>

      <strong>${score[key]*5}/20</strong>
    `;

    $("metrics").appendChild(row);
  });
}


function warningHTML(score){

  const warnings = [];

  if(score.kickedCan){
    warnings.push(
      `<div class="warning">
        ⚠ KICKED THE CAN DOWN THE ROAD —
        you proposed more discussion without clearly saying
        what you recommend.
      </div>`
    );
  }

  if(score.position <= 1){
    warnings.push(
      `<div class="warning">
        ⚠ NO FLAG PLANTED —
        I still don't know what you want the room to decide.
      </div>`
    );
  }

  if(!score.acknowledgement){
    warnings.push(
      `<div class="warning">
        ROOM WARNING —
        you went straight into the argument without acknowledging
        their reality.
      </div>`
    );
  }

  if(!score.natural){
    warnings.push(
      `<div class="warning">
        ROOM WARNING —
        this may be too short or too long to feel natural aloud.
      </div>`
    );
  }

  if(state.counterScore){

    if(
      state.counterScore.position >= 3 &&
      state.counterScore.leverage >= 2
    ){
      warnings.push(
        `<div class="card green">
          <div class="card-title">Counterpunch hold</div>
          You kept a position and added leverage under pressure.
        </div>`
      );
    }else{
      warnings.push(
        `<div class="warning">
          COUNTERPUNCH WARNING —
          you softened when they pushed back.
        </div>`
      );
    }
  }

  return warnings.join("");
}


function lostPowerText(score){

  if(score.kickedCan){
    return `
      You ended in investigation mode.
      Diagnosis is useful, but once you understand the problem
      you need to take a position.
    `;
  }

  const keys = [
    "diagnosis",
    "reframe",
    "position",
    "leverage",
    "move"
  ];

  const weakest =
    [...keys].sort(
      (a,b)=>score[a]-score[b]
    )[0];

  const messages = {

    diagnosis:
      `You started solving before making the real objection specific.
       Ask one sharper question, then stop questioning and lead.`,

    reframe:
      `You argued mostly inside their frame.
       Change what the decision is actually about before you try to win it.`,

    position:
      `You never made your recommendation unmistakable.
       The room should know exactly which decision you want made.`,

    leverage:
      `Your argument depended too much on preference.
       Anchor it in the brief, objective, agreed criteria,
       business consequence or the thing the idea depends on.`,

    move:
      `You made a case but didn't advance the decision.
       Give someone a specific action: keep it, push back,
       find the money, take it upstairs, or make the call.`
  };

  return messages[weakest];
}


function showFeedback(){

  const combined =
    averageScores(
      state.openingScore,
      state.counterScore
    );

  state.fightScore = combined.total;

  progress.high =
    Math.max(
      progress.high,
      combined.total
    );

  updateHud();

  $("feedbackScore").textContent =
    String(combined.total).padStart(3,"0");

  $("feedbackScore").classList.add("score-pop");

  setTimeout(
    ()=>$("feedbackScore").classList.remove("score-pop"),
    500
  );

  $("feedbackVerdict").textContent =
    fightVerdict(combined.total);

  renderMetrics(combined);

  $("warnings").innerHTML =
    warningHTML(combined);

  $("lostPower").textContent =
    lostPowerText(combined);

  $("powerMove").textContent =
    `${state.q.model}

${state.q.position}`;

  $("whyWorks").textContent =
    state.q.tip;

  $("hammer").textContent =
    state.q.memory;

  show("feedbackScreen");

  if(combined.total >= 80)
    victorySound();
  else
    beep(220,.1);
}


function beginRunback(){

  $("runbackRole").textContent =
    state.q.role;

  $("runbackQuestion").textContent =
    state.wording;

  $("runbackWeapon").textContent =
    WEAPONS[state.q.weapon].name;

  $("runbackInput").value = "";
  $("runbackValidation").textContent = "";

  show("runbackScreen");

  $("runbackInput").focus();
}


function updateMastery(score){

  const weapon =
    state.q.weapon;

  const old =
    progress.mastery[weapon];

  if(old === undefined){

    progress.mastery[weapon] = score;

  }else{

    progress.mastery[weapon] =
      Math.round(
        old*.7 +
        score*.3
      );
  }
}


function scheduleRevisit(score){

  if(score >= 82)
    return;

  const delay =
    score < 55
      ? 2
      : score < 70
      ? 3
      : 4 + Math.floor(Math.random()*2);

  progress.revisit.push({
    weapon:state.q.weapon,
    due:progress.fights + delay
  });

  progress.revisit =
    progress.revisit.slice(-20);
}


function submitRunback(){

  const text =
    $("runbackInput").value.trim();

  if(
    text.split(/\s+/)
        .filter(Boolean)
        .length < 5
  ){
    $("runbackValidation").textContent =
      "Retrieval only works if you actually retrieve it.";
    return;
  }

  state.runbackScore =
    scoreAnswer(text,state.q);

  const before =
    state.openingScore.total;

  const after =
    state.runbackScore.total;

  const improvement =
    after - before;

  progress.fights++;

  progress.seen[state.q.id] =
    (progress.seen[state.q.id] || 0) + 1;

  progress.lastId =
    state.q.id;

  progress.lastRole =
    state.q.role;

  progress.high =
    Math.max(
      progress.high,
      state.fightScore,
      after
    );

  updateMastery(after);
  scheduleRevisit(after);

  const counterBonus =
    state.counterScore &&
    state.counterScore.position >= 3 &&
    state.counterScore.leverage >= 2
      ? 10
      : 0;

  const xpGain =
    25 +
    Math.max(0,improvement) +
    (after >= 80 ? 20 : 0) +
    (state.boss ? 25 : 0) +
    counterBonus;

  progress.xp += xpGain;

  if(after >= 75)
    progress.streak++;
  else
    progress.streak = 0;

  saveProgress();
  updateHud();

  $("beforeScore").textContent =
    before;

  $("afterScore").textContent =
    after;

  if(improvement > 0){

    $("lockTitle").textContent =
      "Level Up!";

    $("improvement").innerHTML = `
      <div class="card-title">Improvement</div>
      <div class="delta">+${improvement} points</div>
      You improved the answer after coaching.
      That's the rep that matters.
      <br><br>
      +${xpGain} XP
    `;

    victorySound();

  }else if(after >= 80){

    $("lockTitle").textContent =
      "Locked In!";

    $("improvement").innerHTML = `
      <div class="card-title">Held strong</div>
      You were already strong and reproduced the move
      without the script in front of you.
      <br><br>
      +${xpGain} XP
    `;

    victorySound();

  }else{

    $("lockTitle").textContent =
      "Again Later.";

    $("improvement").innerHTML = `
      <div class="card-title">Not locked yet</div>
      That's fine. This weapon has been added back into
      the training queue and will return in a different disguise.
      <br><br>
      +${xpGain} XP
    `;

    beep(200,.12);
  }

  const masteryScore =
    progress.mastery[state.q.weapon];

  $("mastery").innerHTML = `
    <div class="card-title">Weapon mastery</div>
    <strong>${WEAPONS[state.q.weapon].name}</strong>
    <br><br>
    ${masteryScore}/100
  `;

  $("finalHammer").textContent =
    state.q.memory;

  show("lockScreen");
}


$("startBtn").addEventListener(
  "click",
  () => {
    beep(440,.06);
    startFight();
  }
);

$("fightSubmit").addEventListener(
  "click",
  submitFirst
);

$("counterSubmit").addEventListener(
  "click",
  submitCounter
);

$("runbackBtn").addEventListener(
  "click",
  beginRunback
);

$("runbackSubmit").addEventListener(
  "click",
  submitRunback
);

$("nextBtn").addEventListener(
  "click",
  () => {
    beep(520,.06);
    startFight();
  }
);

$("soundBtn").addEventListener(
  "click",
  () => {
    progress.sound =
      !progress.sound;

    saveProgress();
    updateHud();

    if(progress.sound)
      beep(600,.08);
  }
);

updateHud();

})();

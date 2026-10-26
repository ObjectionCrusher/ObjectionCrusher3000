window.OC_WEAPONS = {

  feared:{
    name:"Find the feared consequence",
    leverage:["specific","likelihood","consequence","evidence","actually happen","worried"],
    counter:[
      "You can call it unlikely. I'm still the person who has to explain it if it happens.",
      "That doesn't make me feel any less exposed. Why should I take that chance?"
    ]
  },

  compareRisk:{
    name:"Compare the right risks",
    leverage:["attention","ignored","media","investment","impact","downside","business"],
    counter:[
      "Being ignored isn't going to get me fired. A public backlash might.",
      "I'd still rather underperform quietly than create a problem for the brand."
    ]
  },

  business:{
    name:"Make it a business case",
    leverage:["business","objective","growth","sales","brand","commercial","measure"],
    counter:[
      "That still sounds like advertising theory. Where's the proof it changes the business?",
      "I understand the logic. I still don't see a hard commercial reason for this execution."
    ]
  },

  concern:{
    name:"Separate concern from solution",
    leverage:["concern","problem","objective","alternative","solve","why"],
    counter:[
      "We already know the problem. I'm telling you the solution I want.",
      "You're overcomplicating this. Just make the change we've asked for."
    ]
  },

  unseen:{
    name:"Don't reject work for an unseen decision-maker",
    leverage:["decision","leadership","cmo","vp","approved","recommendation","upstairs"],
    counter:[
      "I've worked with them for years. You haven't. Trust me, I know how they'll react.",
      "Getting them involved now will only make this slower and harder."
    ]
  },

  cost:{
    name:"Make the weaker choice carry a cost",
    leverage:["lose","cost","sacrifice","weaken","trade","consequence","give up"],
    counter:[
      "Fine, but the compromise you're describing is small compared with the bigger relationship risk.",
      "You're making the downside sound bigger than it really is."
    ]
  },

  strategy:{
    name:"Strategy should be felt, not recited",
    leverage:["strategy","brief","proposition","audience","connection","objective"],
    counter:[
      "That's a nice creative argument, but the proposition still isn't clear enough.",
      "If we have to explain how it's on strategy, maybe it isn't."
    ]
  },

  research:{
    name:"Research informs; it doesn't decide",
    leverage:["research","measure","criteria","comprehension","attribution","likability","test"],
    counter:[
      "The numbers are still the numbers. I can't just ignore them because creative doesn't like the result.",
      "If we're not going to listen to research, why did we pay for it?"
    ]
  },

  outcome:{
    name:"Protect the finished outcome",
    leverage:["finished","performance","craft","screen","shoot","post","outcome","director"],
    counter:[
      "The budget is fixed. You still haven't told me where the money comes from.",
      "You're defending creative upside while I'm managing an actual production."
    ]
  },

  protect:{
    name:"Concede the harmless; protect the essential",
    leverage:["essential","critical","protect","concede","breaks","core","mechanism"],
    counter:[
      "We've already compromised plenty. This one really isn't worth another fight.",
      "You're treating every creative detail like it's essential."
    ]
  },

  flag:{
    name:"Plant the flag",
    leverage:["recommend","recommendation","should","strongest","keep","don't","do not"],
    counter:[
      "Your recommendation is noted. The client wants the other thing.",
      "You can recommend it, but that doesn't mean we're going to do it."
    ]
  },

  elevate:{
    name:"Move the decision to the right level",
    leverage:["decision","final","leadership","cmo","vp","escalate","owner"],
    counter:[
      "We're not escalating every disagreement upstairs.",
      "If we take this higher every time, we're going to destroy the relationship."
    ]
  },

  criteria:{
    name:"Agree the rules before the fight",
    leverage:["criteria","agreed","measure","success","before","decision","pass"],
    counter:[
      "We didn't agree the criteria perfectly. We still have to make a decision now.",
      "Things change. We can't be trapped by criteria we wrote weeks ago."
    ]
  },

  over:{
    name:"Know when the decision is over",
    leverage:["final","decision","accept","one alternative","respect","stop","move on"],
    counter:[
      "The decision is final. Are you going to make the change or not?",
      "We've discussed this enough. There isn't another meeting."
    ]
  }

};


window.OC_QUESTIONS = [

{
id:1,
side:"external",
role:"CMO",
weapon:"compareRisk",
lines:[
`I like the ambition. I just think this is a bigger risk than we need to take.`,
`This feels like we're taking a risk for the sake of being interesting.`,
`I'm not sure the upside here justifies how exposed this makes us feel.`
],
focus:["risk","attention","noticed","impact","business","what specifically"],
model:`I understand why it feels riskier. What specifically are you worried will happen? I want us to compare that with the risk we're not discussing: spending the same media money on work people don't notice.`,
position:`My recommendation is the stronger route unless we can identify a specific, probable downside that outweighs the cost of being ignored.`,
memory:`Compare the right risks.`,
tip:`Don't defend bravery. Make both sides of the risk equation visible.`
},

{
id:2,
side:"external",
role:"CMO",
weapon:"compareRisk",
lines:[
`Why don't we just go with Route B? It says basically the same thing and feels much safer.`,
`The other route gets the message across without sticking our necks out. Why isn't that the sensible choice?`,
`If both routes communicate the proposition, why wouldn't I choose the one with less downside?`
],
focus:["impact","attention","safer","trade-off","noticed","media"],
model:`I understand why B feels safer. But we're only pricing one kind of downside. Both routes cost us the same media investment; one is much easier to ignore.`,
position:`I recommend Route A because it gives that investment a materially better chance of having an effect.`,
memory:`Every option carries risk.`,
tip:`Reframe safe versus risky as likely outcome versus likely outcome.`
},

{
id:3,
side:"external",
role:"CMO",
weapon:"feared",
lines:[
`If this gets a bad reaction, I'm the one explaining it to the CEO. You're not.`,
`One bad headline lands on my desk, not yours.`,
`I'm imagining the CEO asking me what the hell we were thinking. That's what worries me.`
],
focus:["ceo","what specifically","worried","react","accountable","pressure-test"],
model:`I completely understand. You're the person carrying the internal accountability. What specifically do you think the CEO could object to? Let's make that concrete and pressure-test it.`,
position:`I'm not asking you to take a blind bet. My recommendation is that we keep the stronger idea and build the case and response plan around the specific concern.`,
memory:`Find the feared consequence before arguing about risk.`,
tip:`Career exposure is real. Reduce it rather than dismissing it.`
},

{
id:4,
side:"external",
role:"CEO",
weapon:"business",
lines:[
`I understand why marketing likes it. How does this actually help us sell more product?`,
`Forget whether it's a good ad for a second. What's the business case?`,
`Tell me why this matters to the P&L rather than to the creative department.`
],
focus:["business","objective","sell","growth","measure","problem"],
model:`That's the right test. I'm not recommending this because it's more creative. I'm recommending it because the business problem is X and this idea is designed to solve X through Y.`,
position:`Judge it against the commercial objective we agreed, and against that objective this is the route I recommend.`,
memory:`Creative is the mechanism, not the argument.`,
tip:`Translate creative preference back into the business problem.`
},

{
id:5,
side:"external",
role:"CEO",
weapon:"business",
lines:[
`Getting attention is easy. How do I know this is the right kind of attention?`,
`I don't pay the agency to make noise. I pay you to build the brand.`,
`Plenty of stupid things get attention. Why is attention your argument?`
],
focus:["brand","message","attention","objective","attribution","right kind"],
model:`I agree. Attention on its own is worthless. The question is whether the idea earns attention while landing the right message and building the right associations for the brand.`,
position:`That's why I recommend this route: it combines strategic meaning with the ability to actually get noticed.`,
memory:`Attention must carry the strategy.`,
tip:`Never argue that attention alone is success.`
},

{
id:6,
side:"external",
role:"SENIOR CLIENT",
weapon:"feared",
lines:[
`What happens when people start complaining about this on social?`,
`Have we actually thought through the backlash this could create?`,
`I can already see the angry comments. What do we do then?`
],
focus:["what specifically","complain","backlash","likelihood","response","plan"],
model:`We should think that through. Who specifically do we expect to object, to what, and what business consequence do we think follows?`,
position:`Unless that analysis shows a meaningful likely risk, I recommend we keep the idea and prepare a sensible response plan rather than weakening it around a vague possibility.`,
memory:`Make vague backlash concrete.`,
tip:`Vivid isn't the same as probable.`
},

{
id:7,
side:"external",
role:"SENIOR CLIENT",
weapon:"feared",
lines:[
`We pushed the brand before and it went badly. I'm not doing that again.`,
`Last time we tried something edgy we got burned.`,
`We've got scar tissue here. Why should I believe this will be different?`
],
focus:["what happened","last time","specifically","learn","different","cause"],
model:`That history matters. I want to understand what actually failed last time: strategy, execution, timing, audience reaction or internal handling.`,
position:`Let's apply the lesson that genuinely follows from that failure, but I don't recommend turning one bad experience into a permanent rule against distinctive work.`,
memory:`Learn from the scar. Don't worship it.`,
tip:`Past failure should create a lesson, not a superstition.`
},

{
id:8,
side:"external",
role:"BRAND DIRECTOR",
weapon:"feared",
lines:[
`It's good. I'm just not sure it feels like us.`,
`I can admire this as an ad and still not believe our brand would say it.`,
`Something about it feels off-brand to me.`
],
focus:["what specifically","brand","off-brand","unfamiliar","values","tone"],
model:`That's important. What specifically violates the brand: the tone, message, behaviour or execution?`,
position:`If we can't identify an actual brand principle it's breaking, I recommend we don't mistake unfamiliarity for being off-brand.`,
memory:`Unfamiliar isn't automatically off-brand.`,
tip:`Make “off-brand” attach to an actual brand principle.`
},

{
id:9,
side:"external",
role:"BRAND DIRECTOR",
weapon:"concern",
lines:[
`I think it's just too weird for our audience.`,
`I get it, but normal people are going to think this is bizarre.`,
`This is the kind of idea advertising people love more than consumers do.`
],
focus:["what part","audience","understand","weird","barrier","message"],
model:`Which part becomes a barrier for the audience? Weird only matters if it stops comprehension or damages the brand.`,
position:`If the message still lands, I recommend protecting the unusual part because that's also what gives the idea its stopping power.`,
memory:`Weird is only a problem when it blocks the message.`,
tip:`Solve comprehension without sanding off distinctiveness.`
},

{
id:10,
side:"external",
role:"BRAND DIRECTOR",
weapon:"cost",
lines:[
`Can we make it a bit broader? I don't want to alienate anybody.`,
`I need this to appeal to everyone, not just one kind of person.`,
`Could we soften it so nobody feels excluded by the tone?`
],
focus:["audience","target","alienate","everyone","relevant","specific"],
model:`Who specifically are we worried about losing? Trying to be equally appealing to everybody often means becoming meaningful to nobody.`,
position:`I recommend we protect relevance to the audience that matters most unless we can identify a real exclusion risk that hurts the objective.`,
memory:`Broad appeal can create broad indifference.`,
tip:`Make the weaker choice carry the cost of lost relevance.`
},

{
id:11,
side:"external",
role:"BRAND MANAGER",
weapon:"concern",
lines:[
`I'm worried people will enjoy the ad and completely miss what we're trying to say.`,
`It's entertaining, but is the message clear enough?`,
`What if people remember the joke and not the point?`
],
focus:["message","understand","comprehension","connection","clarity","specifically"],
model:`That's a legitimate concern. Where specifically does the connection between the execution and message break?`,
position:`If there's a real comprehension gap, let's fix that gap. I don't recommend making the whole idea more literal unless that's actually necessary.`,
memory:`Fix comprehension, not memorability.`,
tip:`Separate the concern from the obvious executional fix.`
},

{
id:12,
side:"external",
role:"BRAND MANAGER",
weapon:"cost",
lines:[
`We've got four key product benefits. Why can't we get all four into the film?`,
`This needs to work harder. We're leaving important messages out.`,
`Can we find a way to land all the reasons to believe?`
],
focus:["priority","one thing","remember","message","benefit","objective"],
model:`We can physically put all four in. The trade is that each one becomes less memorable. Which message absolutely has to land?`,
position:`My recommendation is that the film owns the most important message and we find better homes for the rest.`,
memory:`More messages can mean less communication.`,
tip:`Make the cost of extra information visible.`
},

{
id:13,
side:"external",
role:"BRAND MANAGER",
weapon:"concern",
lines:[
`Can we get the product in earlier and make the logo bigger?`,
`I don't think the branding is strong enough.`,
`Could we see the pack in the first five seconds? I'm worried about attribution.`
],
focus:["attribution","branding","cue","product","problem","alternative"],
model:`If the problem is attribution, let's solve attribution. I don't want us to assume the answer has to be an earlier pack shot or a bigger logo.`,
position:`I recommend we strengthen branded cues without damaging the reveal or the mechanism that makes the film work.`,
memory:`Solve the branding problem, not automatically the requested execution.`,
tip:`Turn the note back into the problem it is meant to solve.`
},

{
id:14,
side:"external",
role:"CLIENT",
weapon:"concern",
lines:[
`I like the humour from A and the clarity from B. Can't we combine them?`,
`Could we take the best bits from both routes?`,
`What if we merge these? Then we don't have to choose.`
],
focus:["why","combine","trade-off","idea","clarity","strongest"],
model:`What problem would combining them solve? Each route works because it has one organising idea, and merging them can easily give us the weakest version of both.`,
position:`Unless there's a specific gap that a hybrid genuinely fixes, I recommend choosing the stronger route rather than creating a compromise route.`,
memory:`A hybrid isn't automatically the best of both.`,
tip:`Don't let avoiding a decision become the creative strategy.`
},

{
id:15,
side:"external",
role:"CLIENT",
weapon:"feared",
lines:[
`Maybe there's nothing technically wrong with it. I just don't like it.`,
`I can't give you a rational reason. It's just not for me.`,
`I understand the case. I still don't enjoy the idea.`
],
focus:["what","reaction","brand","audience","taste","specific"],
model:`That's useful to know. What are you reacting to: tone, subject matter, execution or simply personal taste?`,
position:`If the objection is personal taste rather than a brand or audience problem, I recommend we keep judging the work against the agreed objective.`,
memory:`Taste is data. It isn't automatically the decision.`,
tip:`Respect the reaction without letting personal taste become strategy.`
},

{
id:16,
side:"external",
role:"BRAND MANAGER",
weapon:"unseen",
lines:[
`I love it. There's absolutely no way my VP approves this.`,
`This is my favourite, but my boss will kill it in thirty seconds.`,
`I'd buy it personally. Leadership won't.`
],
focus:["what makes","vp","said","assume","evidence","upstairs"],
model:`What makes you certain they'll reject it? Is that based on something they've actually said or are we predicting the reaction?`,
position:`If you believe this is the strongest work too, I recommend we arm you to sell it rather than reject it on their behalf.`,
memory:`Don't reject work for someone who hasn't seen it.`,
tip:`Make the actual decision-maker own the decision.`
},

{
id:17,
side:"external",
role:"BRAND MANAGER",
weapon:"unseen",
lines:[
`I'll show it upstairs. I just don't want to say it's my recommendation.`,
`I don't want to be left holding the bag if my VP hates it.`,
`I'm happy for them to see it. I just don't want my name attached to the recommendation.`
],
focus:["what would","need","confident","recommend","case","support"],
model:`I understand why you don't want to feel exposed. What would you need to feel confident taking the recommendation upstairs?`,
position:`Let's build that case together. I want leadership to see the strongest work with a clear agency recommendation, not a nervous hand-off.`,
memory:`Give your champion ammunition, not courage.`,
tip:`Reduce exposure; don't ask for heroics.`
},

{
id:18,
side:"external",
role:"BRAND MANAGER",
weapon:"unseen",
lines:[
`Can you give me a safer version so I've got something I know I can get through?`,
`I need a toned-down option in case leadership gets nervous.`,
`Could you just make one version that's easier for me to sell internally?`
],
focus:["what concern","safer","upstairs","case","before","weaken"],
model:`What specific objection is the safer version meant to solve? If we're only predicting resistance, we'd be creating weaker work for feedback nobody has actually given.`,
position:`I recommend we strengthen the case for the best route first rather than manufacturing a weaker escape route.`,
memory:`Don't create weaker work for hypothetical feedback.`,
tip:`Make anticipated resistance prove itself before it changes the work.`
},

{
id:19,
side:"external",
role:"BRAND MANAGER",
weapon:"elevate",
lines:[
`The CMO doesn't need to be in the next meeting. I'll take the work to her afterwards.`,
`Let's agree the creative between us first and I'll socialize it with leadership later.`,
`We don't need to bother the CMO yet. I'll sell it upstairs once we're happy.`
],
focus:["cmo","strategy","approved","alignment","decision","upstairs"],
model:`Before we develop further, are we positive the CMO has seen and approved the strategic direction?`,
position:`If they're the final decision-maker, I recommend we get alignment on the strategy now rather than discovering a fundamental disagreement after the creative is built.`,
memory:`Move the collision point earlier.`,
tip:`A late veto is often a structural problem, not a creative problem.`
},

{
id:20,
side:"external",
role:"SENIOR CLIENT",
weapon:"business",
lines:[
`You've got a strong opinion. What evidence do you have that this will actually work?`,
`Why should I take the agency's word for it?`,
`Show me something beyond creative enthusiasm that supports this recommendation.`
],
focus:["evidence","business","consumer","competitive","test","objective"],
model:`You shouldn't take it on creative enthusiasm. We can show the strategic evidence, consumer behaviour, competitive context and the logic connecting the execution to the objective.`,
position:`Based on that foundation, this is still the route I recommend. I won't pretend anyone can guarantee the future before launch.`,
memory:`Prove the foundation, not an unknowable future.`,
tip:`Use evidence without pretending creativity can be guaranteed.`
},

{
id:21,
side:"external",
role:"RESEARCH DIRECTOR",
weapon:"criteria",
lines:[
`I want all three concepts put through quantitative testing before we choose.`,
`We shouldn't be making this decision on instinct. Let's run the concepts through quant.`,
`I need numbers on these routes before we recommend anything.`
],
focus:["what measuring","criteria","comprehension","research","quant","before"],
model:`I'm happy to research them if we agree what question the research is answering before we see the results.`,
position:`For unfinished creative, I recommend we use it to diagnose things like comprehension and attribution, not ask it to make the creative decision for us.`,
memory:`Agree the rules before the results arrive.`,
tip:`Set the measurement before anyone knows which route wins.`
},

{
id:22,
side:"external",
role:"CLIENT",
weapon:"research",
lines:[
`The safer route scored significantly better. Surely the research has made the decision for us.`,
`Route B won the test. I don't understand why we're still debating it.`,
`The numbers prefer the conventional route. Isn't that the answer?`
],
focus:["what scored","measure","comfort","comprehension","criteria","research"],
model:`What exactly did it score better on? If it won against a criterion we agreed matters, that's important. If it mainly won on comfort or stated liking, that's a different finding.`,
position:`I recommend we make the decision against the agreed success criteria, not simply whichever route produced the biggest number.`,
memory:`Interrogate what the score actually measures.`,
tip:`Never argue with a number until you understand its question.`
},

{
id:23,
side:"external",
role:"RESEARCH DIRECTOR",
weapon:"research",
lines:[
`People understood it, but they didn't particularly like it. That's a red flag.`,
`The comprehension is fine. The likability score worries me.`,
`Consumers got the message. They just preferred the other route.`
],
focus:["likability","comprehension","message","comfort","criteria","effectiveness"],
model:`I'd separate those findings. Comprehension tells us the communication landed. Stated liking tells us something different.`,
position:`Unless likability was an agreed predictor of success here, I don't recommend sacrificing the more distinctive route simply because it feels less comfortable in research.`,
memory:`Likability and effectiveness are different questions.`,
tip:`Challenge the relevance of the metric, not the existence of the data.`
},

{
id:24,
side:"external",
role:"CLIENT",
weapon:"research",
lines:[
`If people aren't responding to the animatic, why would we spend millions producing it?`,
`The rough film isn't testing. Why would the finished film suddenly work?`,
`The animatic feels flat in research. That makes me nervous about production.`
],
focus:["animatic","finished","craft","comprehension","test","what measuring"],
model:`Let's identify what actually failed. An animatic can tell us useful things about comprehension, but it can't reproduce performance, casting, music, timing or finished craft.`,
position:`If the core idea and message are working, I recommend we don't ask a rough proxy to predict qualities that only production can create.`,
memory:`Don't ask a rough stand-in to predict finished craft.`,
tip:`Know what the research stimulus can and cannot measure.`
},

{
id:25,
side:"external",
role:"CLIENT",
weapon:"criteria",
lines:[
`Let's make the research changes and test it again.`,
`I'd feel better if we ran one more round after these amends.`,
`Why don't we optimize it, re-test, and then decide?`
],
focus:["criteria","pass","decision","again","what question","goalposts"],
model:`We can test again, but first I want us to agree what the next test needs to answer and what constitutes a pass.`,
position:`I don't recommend another round until the finish line is explicit, otherwise we can keep changing the work and moving the goalposts indefinitely.`,
memory:`Set the finish line before running another lap.`,
tip:`A test without a decision rule easily becomes a security blanket.`
},

{
id:26,
side:"external",
role:"CFO / PROCUREMENT",
weapon:"outcome",
lines:[
`Why are we spending this much making an advert? Consumers don't know the production budget.`,
`I can save us a meaningful amount here. Why shouldn't I?`,
`Explain what the extra production spend actually buys the business.`
],
focus:["what buys","outcome","screen","craft","trade-off","business"],
model:`Consumers won't know the budget. They will experience what the budget buys. Let's isolate the elements that materially affect what ends up on screen.`,
position:`If the extra spend doesn't improve the finished outcome, cut it. If it protects something the idea depends on, that's the spend I recommend protecting.`,
memory:`Defend the outcome, not the budget.`,
tip:`Make the money correspond to an observable creative outcome.`
},

{
id:27,
side:"external",
role:"CMO",
weapon:"compareRisk",
lines:[
`Nobody else in our category behaves like this. Doesn't that tell us something?`,
`Our competitors are all much more conventional. Why would we be the exception?`,
`There's a reason this category has certain rules.`
],
focus:["competitor","category","distinctive","sameness","attention","rule"],
model:`It tells us the convention is real. The question is whether it protects the brand or makes everybody in the category interchangeable.`,
position:`Unless the convention exists for a genuine strategic reason, I recommend we use the difference as an advantage rather than copying the sameness around us.`,
memory:`Category convention can be an opportunity disguised as safety.`,
tip:`Ask whether conformity itself carries a cost.`
},

{
id:28,
side:"external",
role:"GLOBAL CLIENT",
weapon:"concern",
lines:[
`This may work in the UK, but our markets are telling us it's too culturally specific.`,
`I can't see this translating globally.`,
`The local teams think the idea is too British to travel.`
],
focus:["which markets","what specifically","culture","adapt","idea","local"],
model:`Which markets, and what specifically doesn't travel: the core idea, humour, reference or execution?`,
position:`If the platform is sound, I recommend adapting the culturally specific expression rather than flattening the whole idea globally.`,
memory:`Localise the expression before weakening the idea.`,
tip:`Make “doesn't travel” specific enough to solve.`
},

{
id:29,
side:"internal",
role:"ACCOUNT DIRECTOR",
weapon:"unseen",
lines:[
`I know this client. They'll never buy it like this. Let's take the edge off before tomorrow.`,
`Trust me, this is further than they're going to go.`,
`If we show it as it is, we're going to lose the room.`
],
focus:["what specifically","know","predict","objection","haven't","react"],
model:`Your experience with them matters. What specifically do you think they'll object to, and what do we actually know versus what are we predicting?`,
position:`If there's no concrete evidence this will derail the meeting, I recommend we show the strongest work and let the client react to it themselves.`,
memory:`Use account fear as intelligence, not instructions.`,
tip:`Don't let an intermediary reject work on behalf of the decision-maker.`
},

{
id:30,
side:"internal",
role:"ACCOUNT DIRECTOR",
weapon:"cost",
lines:[
`I'd rather get something decent approved than damage the relationship fighting for something extraordinary.`,
`The relationship matters more than winning this creative argument.`,
`We don't need to prove a point with this client.`
],
focus:["relationship","what damage","trust","disagree","work","priority"],
model:`I agree the relationship matters more than creative ego. But respectful disagreement isn't the same as damaging the relationship.`,
position:`If this change materially weakens the work, I recommend we explain that clearly once rather than quietly deliver something worse in the name of harmony.`,
memory:`A good relationship can survive useful disagreement.`,
tip:`Make silence carry a cost too.`
},

{
id:31,
side:"internal",
role:"ACCOUNT DIRECTOR",
weapon:"protect",
lines:[
`This isn't the hill to die on. This client is too important to the agency.`,
`We could lose a lot more than one piece of work here.`,
`I'm not risking the account over an ad.`
],
focus:["what specifically","account","hill","critical","consequence","priority"],
model:`I don't want to risk the account over creative pride. Let's identify which amendments are harmless and which one actually breaks the idea.`,
position:`I'll concede everything that doesn't matter. I recommend we push on the one thing that does.`,
memory:`Choose the hill. Don't fight the whole mountain.`,
tip:`Conceding small things can increase your leverage on the critical thing.`
},

{
id:32,
side:"internal",
role:"ACCOUNT DIRECTOR",
weapon:"flag",
lines:[
`Let's show the safer route first and ease them into the better one.`,
`I want to start with the one they'll be comfortable with.`,
`Let's warm the room up before we show the stretch route.`
],
focus:["recommendation","order","frame","strongest","lead","why"],
model:`The order isn't neutral. The first route sets the frame for everything that follows.`,
position:`If we believe one direction is strongest, my recommendation is that we lead with it and make our preference unmistakable.`,
memory:`Presentation order is part of the recommendation.`,
tip:`Don't let comfort determine the hierarchy of ideas.`
},

{
id:33,
side:"internal",
role:"ACCOUNT DIRECTOR",
weapon:"flag",
lines:[
`Let's keep that one in the appendix and only show it if the meeting goes well.`,
`We can have the brave route in reserve.`,
`I'd rather not put that direction in the main presentation.`
],
focus:["appendix","recommend","hide","show","strongest","why"],
model:`If we don't believe in it, let's kill it. But if we think it's the strongest answer, hiding it almost guarantees it never gets a fair hearing.`,
position:`I recommend we put our strongest route in the main deck with our recommendation attached.`,
memory:`Don't hide the work you believe in.`,
tip:`Recommend it or kill it. Don't bury it.`
},

{
id:34,
side:"internal",
role:"ACCOUNT DIRECTOR",
weapon:"concern",
lines:[
`They've given us clear feedback. At some point we need to stop fighting and make the changes.`,
`We can't debate every client note. Just take this one.`,
`They've told us what they want. We need to respond.`
],
focus:["concern","note","solve","change","what problem","alternative"],
model:`I agree we need to respond. I want to separate the client's concern from the executional solution they've proposed.`,
position:`If their solution damages the idea, I recommend account goes back with a better solution to the same concern rather than simply passing the amendment through.`,
memory:`The client owns the concern. They don't automatically own the solution.`,
tip:`A note is often two things: a problem and a proposed fix.`
},

{
id:35,
side:"internal",
role:"STRATEGY DIRECTOR",
weapon:"strategy",
lines:[
`It's the most interesting idea, but it's not as on-strategy as the other route.`,
`Creatively it's strong. Strategically I think the safer idea is cleaner.`,
`The other route just ladders back to the proposition more directly.`
],
focus:["where","strategy","proposition","dramatise","literal","gap"],
model:`I agree it has to deliver the strategy. Show me exactly where this route breaks from it. My view is that it dramatises the proposition rather than repeats it literally.`,
position:`If there's a genuine strategic gap, let's fix the gap. Otherwise I recommend we keep the stronger idea.`,
memory:`Fix the strategic gap. Don't split the difference.`,
tip:`Make “off strategy” identify a precise failure.`
},

{
id:36,
side:"internal",
role:"STRATEGY DIRECTOR",
weapon:"strategy",
lines:[
`If I put the proposition next to this, I can't draw a straight enough line between them.`,
`I need to see the strategy more clearly in the execution.`,
`The proposition is getting lost in the creative leap.`
],
focus:["proposition","felt","repeat","literal","connection","where"],
model:`The line matters, but the work doesn't have to repeat the proposition literally. The strategy should be felt in the idea.`,
position:`Unless there's an actual comprehension gap, I recommend we protect the creative leap instead of turning the execution into the brief.`,
memory:`The strategy should be felt, not recited.`,
tip:`Literal isn't the same as strategic.`
},

{
id:37,
side:"internal",
role:"STRATEGY DIRECTOR",
weapon:"strategy",
lines:[
`It feels like creative fell in love with an execution and reverse-engineered the strategy around it.`,
`I think we're using the strategy to justify an idea we already wanted to make.`,
`This feels execution-first rather than strategy-first.`
],
focus:["brief","derive","strategy","where","proposition","evidence"],
model:`That's a fair challenge. Let's trace the idea back to the brief honestly. If we can't, we've got a problem.`,
position:`If the connection holds, I recommend we keep the idea. The fact that the execution is exciting shouldn't count against it.`,
memory:`Make the idea earn its strategic lineage.`,
tip:`Go back to the brief, not to subjective arguments.`
},

{
id:38,
side:"internal",
role:"STRATEGY DIRECTOR",
weapon:"strategy",
lines:[
`I understand the creative leap. I'm not convinced a normal person will make it.`,
`We're too close to this. I don't think consumers will connect those dots.`,
`The idea only works if the audience makes a pretty sophisticated leap.`
],
focus:["which leap","audience","understand","comprehension","test","connection"],
model:`Which exact connection do you think the audience won't make? That's something we can isolate and pressure-test.`,
position:`I recommend we test or strengthen that connection rather than automatically removing the creative leap.`,
memory:`Test the leap. Don't eliminate it by instinct.`,
tip:`Turn “people won't get it” into a specific hypothesis.`
},

{
id:39,
side:"internal",
role:"STRATEGY DIRECTOR",
weapon:"strategy",
lines:[
`It's fun, but what's the actual human insight?`,
`I like the idea. I'm struggling to articulate the insight underneath it.`,
`What's the human truth that makes this more than a funny execution?`
],
focus:["insight","brief","truth","problem","consumer","why"],
model:`If the insight isn't clear, let's identify what's genuinely powering the idea. But I don't want us inventing a generic human truth simply to make the deck sound strategic.`,
position:`If the idea solves the brief from a real consumer, product or cultural truth, I recommend we keep it even if that truth isn't a neat insight sentence.`,
memory:`Don't reverse-engineer a fake insight for the deck.`,
tip:`Strategy should explain the idea, not decorate it.`
},

{
id:40,
side:"internal",
role:"STRATEGY DIRECTOR",
weapon:"research",
lines:[
`The research says consumers want X. This idea is giving them Y.`,
`We're ignoring what people told us in the research.`,
`The consumer work points in the opposite direction to this execution.`
],
focus:["what research","actually","need","interpret","consumer","evidence"],
model:`Let's go back to what the research actually established. Is X a genuine consumer need, or our interpretation of something people said?`,
position:`If the idea conflicts with a real requirement, fix it. If it conflicts only with an interpretation, I recommend we don't let that interpretation kill the creative leap.`,
memory:`Separate the finding from the interpretation.`,
tip:`Research findings and strategic conclusions aren't the same thing.`
},

{
id:41,
side:"internal",
role:"EXECUTIVE PRODUCER",
weapon:"outcome",
lines:[
`These guys always deliver for us, they'll do us a deal, and we've got a great relationship. Why go elsewhere?`,
`I know you like the other company, but we know exactly what we'll get with these people.`,
`Why take production risk when we have a trusted company ready to go?`
],
focus:["creative fit","outcome","criteria","relationship","right for job","trade-off"],
model:`Reliability and the relationship absolutely matter. But familiarity can't become the creative criterion. Let's define what this particular idea needs from production.`,
position:`My recommendation is that we choose the company that best delivers those requirements, even if it isn't the familiar one.`,
memory:`Convenience is a factor. It isn't the creative criterion.`,
tip:`Agree what the job needs before discussing who should do it.`
},

{
id:42,
side:"internal",
role:"EXECUTIVE PRODUCER",
weapon:"outcome",
lines:[
`Your director is £150k more expensive. Tell me what we're actually buying for that money.`,
`I can get you your first choice, but the premium is significant. Why are they worth it?`,
`What specifically will be better on screen if we spend the extra money on this director?`
],
focus:["on screen","specific","cost","capability","outcome","premium"],
model:`That's exactly the question. This film lives or dies on X, and Director A is materially stronger at X. That's what the premium buys us on screen.`,
position:`My recommendation is Director A. Before we sacrifice the thing the film depends on, let's find the saving somewhere else. If we genuinely can't, let's take that exact trade-off to whoever owns the final production decision.`,
memory:`Don't defend the expensive ingredient. Defend the outcome it buys.`,
tip:`Plant the flag before discussing where the money comes from.`
},

{
id:43,
side:"internal",
role:"EXECUTIVE PRODUCER",
weapon:"outcome",
lines:[
`I can get your director, but we're losing two shoot days and most of the contingency. Still want them?`,
`Your choice means less time and almost no safety net.`,
`We can afford the director or protect the production. We can't do both.`
],
focus:["trade-off","finished","gain","lose","shoot","contingency"],
model:`That's a real trade. I don't care about winning my preferred director if the package leaves them unable to make the film properly.`,
position:`Let's compare the finished outcome of both packages. I'll recommend whichever one best protects the thing the idea depends on, not whichever name I started with.`,
memory:`Choose the finished outcome, not the prestigious ingredient.`,
tip:`Sometimes Production is right. The goal is the film, not winning the argument.`
},

{
id:44,
side:"internal",
role:"EXECUTIVE PRODUCER",
weapon:"outcome",
lines:[
`Wouldn't the film be better with the cheaper director and another day to shoot it?`,
`My option gives us more time, more post and more contingency. Doesn't that matter more?`,
`You're choosing the stronger director but the weaker production package.`
],
focus:["outcome","compare","director","days","post","package"],
model:`It might be. Let's be very specific about what the extra day and post improve versus what we lose in directing capability.`,
position:`If your package genuinely produces the better finished film, I'll choose it. If it doesn't, I'm recommending the stronger director and finding the saving elsewhere.`,
memory:`Protect the work, not your preference.`,
tip:`Hold the outcome firmly while staying flexible about the ingredient.`
},

{
id:45,
side:"internal",
role:"EXECUTIVE PRODUCER",
weapon:"protect",
lines:[
`It's beautiful on paper, but we can't execute it properly for the money.`,
`We simply don't have the budget to make this version good enough.`,
`The idea isn't impossible. It's just impossible at the level of craft you're imagining.`
],
focus:["essential","protect","budget","execution","what part","alternative"],
model:`Which pieces are actually unaffordable, and which one or two things make the idea work?`,
position:`I recommend we redesign everything we can around protecting those essential elements before we abandon or dilute the idea itself.`,
memory:`Protect the essential creative mechanism.`,
tip:`Change the execution before surrendering the idea.`
},

{
id:46,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"concern",
lines:[
`I know you don't like the change, but the client specifically asked us to do it.`,
`They asked for this. We can't just ignore the feedback.`,
`Whatever we think creatively, this was a direct client request.`
],
focus:["concern","asked","problem","solution","alternative","why"],
model:`I'm not asking us to ignore the feedback. I want to understand the concern driving it and distinguish that from the exact fix they've proposed.`,
position:`If their fix makes the work worse, I want account to go back, explain why, and recommend a better solution to the same problem.`,
memory:`Solve the client's concern, not automatically their solution.`,
tip:`Account shouldn't be a human inbox.`
},

{
id:47,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"concern",
lines:[
`We need to make these changes or they'll feel like we haven't listened.`,
`Even if we prefer the original, the client needs to see that we've taken the feedback onboard.`,
`We can't go back with essentially the same thing. They'll think we're ignoring them.`
],
focus:["listened","concern","solve","respond","alternative","show"],
model:`They absolutely need to feel heard. But listening means solving the concern; it doesn't require executing every proposed amendment literally.`,
position:`I recommend we show how we've responded, and where we disagree with their fix, clearly explain the stronger solution we're recommending instead.`,
memory:`Listening isn't the same as obeying literally.`,
tip:`Show responsiveness without abandoning judgement.`
},

{
id:48,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"cost",
lines:[
`Come on, it's only making the logo bigger. It's not going to ruin the work.`,
`It's a tiny change. Why are we making such a big deal about it?`,
`They only want the product five seconds earlier. Surely we can give them that.`
],
focus:["consequence","why","reveal","timing","alternative","small"],
model:`On paper it's a small amendment. The reason I'm pushing back is the consequence: it damages X, which is carrying the reveal, joke or tension.`,
position:`I recommend we keep that mechanism intact and solve the client's branding concern another way.`,
memory:`Small amendments can have large creative consequences.`,
tip:`Explain what the change breaks.`
},

{
id:49,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"protect",
lines:[
`We've already pushed back on three things. We need to give them something.`,
`We can't fight every single note. Pick your battles.`,
`They've compromised too. We need to show some flexibility.`
],
focus:["which note","critical","concede","protect","priority","breaks"],
model:`I agree. I don't want to fight every note. Let's separate the changes that are harmless from the one that materially damages the idea.`,
position:`I'll happily concede the harmless ones. I want us to push back clearly on the one that actually matters.`,
memory:`Concede the harmless. Protect the essential.`,
tip:`Your leverage rises when you don't fight everything.`
},

{
id:50,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"concern",
lines:[
`Why don't we just make their version as well and show both?`,
`Let's do what they asked and keep our preferred version in the deck too.`,
`We can avoid an argument by producing both versions.`
],
focus:["comparison","help","option","worse","why","decision"],
model:`Making both can be useful if the comparison genuinely helps them see the consequence. But it can also legitimise a version we already believe is worse.`,
position:`I recommend we only make both if the comparison helps the decision. I don't want to manufacture a bad option simply to avoid a conversation.`,
memory:`Don't create a bad option just to avoid an argument.`,
tip:`A version can become an option simply because it exists.`
},

{
id:51,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"concern",
lines:[
`The client was very clear: they want the humour toned down.`,
`There's no ambiguity here. They asked us to make it less funny.`,
`They didn't ask us to explore. They told us exactly what they want changed.`
],
focus:["why","concern","humour","specific","clear","consequence"],
model:`I hear that the instruction is clear. I still want to know why they want the humour reduced, because the humour is the engine of this idea.`,
position:`My recommendation is that we don't make that change until we've gone back once, explained what it breaks, and offered another way to solve their concern.`,
memory:`A clear instruction can still contain the wrong solution.`,
tip:`Push once on the why when the amendment damages the core mechanism.`
},

{
id:52,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"protect",
lines:[
`We need this back tonight. There's no time for another client conversation.`,
`The deadline is in three hours. Just make the amends and get it out.`,
`We don't have time to debate the notes. Production needs the deck tonight.`
],
focus:["time","call","critical","quick","one thing","alternative"],
model:`I understand the time pressure. Let's identify the single amendment that actually damages the work; everything else can move immediately.`,
position:`If one ten-minute conversation can protect that critical piece, I recommend we have it rather than rebuild the work badly and reopen the problem tomorrow.`,
memory:`Use urgency to prioritise, not surrender judgement.`,
tip:`Time pressure should narrow the fight, not erase it.`
},

{
id:53,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"flag",
lines:[
`They're the client. If they want the headline changed, we change the headline.`,
`Ultimately they're paying us. It's their call.`,
`We advise, they decide. At some point we just have to do what they've asked.`
],
focus:["advise","decision","consequence","recommend","job","client"],
model:`They absolutely own the final decision. Our job is to make sure that decision is informed and that our professional recommendation is clear.`,
position:`If we think the change weakens the work, I want us to say that, recommend the stronger solution, and then respect the client's decision once they've made it with that information.`,
memory:`The client owns the decision. We own the recommendation.`,
tip:`Authority doesn't remove your responsibility to advise.`
},

{
id:54,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"over",
lines:[
`We made the argument in the meeting and they still rejected it. We have to accept the answer.`,
`We've already pushed on this once. They've said no.`,
`They heard our case and asked for the change anyway. What more do you want us to do?`
],
focus:["final","breaks","alternative","accept","one more","consequence"],
model:`If they genuinely heard the case and the decision is final, I don't want us endlessly relitigating it.`,
position:`If the amendment still leaves us with good work, make it. If it breaks the work, offer one viable alternative, make our recommendation clear, then respect the final decision.`,
memory:`Know when the decision is actually over.`,
tip:`Persistence and stubbornness aren't the same thing.`
},

{
id:55,
side:"internal",
role:"ACCOUNT MANAGER",
weapon:"protect",
lines:[
`I agree the work will be worse, but this relationship matters more than one ad.`,
`Is protecting this execution really worth annoying the client?`,
`We need to think long-term here. I'd rather compromise the work than damage the relationship.`
],
focus:["relationship","trust","worth","critical","long-term","disagree"],
model:`I agree the long-term relationship matters more than one execution. But a valuable relationship should be able to survive useful disagreement.`,
position:`If this change genuinely matters to the effectiveness of the work, I recommend we push back respectfully once. If it doesn't, I'll let it go.`,
memory:`Protect trust and judgement at the same time.`,
tip:`Know which creative battles are actually worth spending relationship capital on.`
}

];

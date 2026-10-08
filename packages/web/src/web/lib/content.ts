export const COUPON = "AVCC50";
export const STANDARD_COUPON = "AVCC30";
export const OFFERS = [
  { code: COUPON, discount: "50%", title: "First 30 users", terms: "First purchase only, on monthly or yearly plans. Does not apply to renewals." },
  { code: STANDARD_COUPON, discount: "30%", title: "Everyone else", terms: "30% off all purchases with AVCC30." },
] as const;
export const RUNABLE_URL = "https://runable.com";
export const COMMUNITY_URL = "https://www.skool.com/ai-video-creators";

export const PROJECT_CATEGORIES = [
  { value: "website", label: "Website", body: "A website that solves a real business need." },
  { value: "ai-agent", label: "AI agent", body: "An agent that does useful work for a business." },
  { value: "tool", label: "Internal or client-facing tool", body: "A tool that improves your own workflow or a client’s." },
  { value: "automation", label: "Lead-generation or automation workflow", body: "A workflow that attracts leads or automates repeatable work." },
  { value: "brand-package", label: "Brand package", body: "At least 5 video or image assets: UGC, brand videos, ads or business branding." },
] as const;

export const NAV_LINKS = [
  { label: "The challenge", href: "#challenge" },
  { label: "Offer", href: "#discount" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

/** Challenge facts — four short pairs, no sentences. */
export const FACTS = [
  { label: "Prize pool", value: "$2,000" },
  { label: "Duration", value: "3 weeks" },
  { label: "Format", value: "Guided, done-with-you" },
  { label: "Open to", value: "AVCC members" },
];

/** What an entry has to be. Icon key + two short lines. */
export const CRITERIA = [
  {
    icon: "lock",
    title: "AVCC members only",
    body: "Join AVCC on Skool. Challenge access, progress sharing and final-entry instructions live inside the community—not on this page.",
  },
  {
    icon: "layers",
    title: "A completed project",
    body: "Build a Runable-powered website, AI agent, tool, automation workflow or brand package.",
  },
  {
    icon: "sparkles",
    title: "A Runable chat link",
    body: "Include a shareable Runable chat link so your build journey can be reviewed.",
  },
  {
    icon: "share",
    title: "Posted publicly",
    body: "Publish at least one public project post. Mention Runable and tag @aivideoskool and @runable_hq. The final hashtag will be announced in Skool.",
  },
  {
    icon: "layers",
    title: "A simple case study",
    body: "Business / Target Client → Problem → Idea → Solution → What You Built → Business Value.",
  },
  {
    icon: "users",
    title: "Show the journey",
    body: "Show a real problem, a working solution and its potential business value. Landing a paying client is optional—not required to finish or win.",
  },
];

/** Short chips under the community block. */
export const COMMUNITY_TAGS = [
  { icon: "lock", label: "Private community" },
  { icon: "clapperboard", label: "AI video, start to paid" },
  { icon: "coins", label: "Skool Games winner" },
];

/** Why the partnership exists — mirrors the reference's three-up. */
export const PARTNER_POINTS = [
  {
    no: "0 1",
    title: "You already learned the craft",
    body: "AVCC teaches the method. Runable is where it becomes a real solution for your business or dream client.",
  },
  {
    no: "0 2",
    title: "One subscription instead of ten",
    body: "Script, voice, image, video and edit in one place, with every top model included.",
  },
  {
    no: "0 3",
    title: "A condition exclusive to the community",
    body: "The first 30 users get 50% off their first monthly or yearly purchase with AVCC50. Everyone else gets 30% off all purchases with AVCC30.",
  },
];

export const STEPS = [
  {
    no: "WEEK 1",
    title: "Find the problem",
    body: "Choose your business or target client. Define what needs fixing.",
  },
  {
    no: "WEEK 2",
    title: "Build the solution",
    body: "Create your project in Runable, with lessons and community feedback.",
  },
  {
    no: "WEEK 3",
    title: "Make the case",
    body: "Polish your project. Show its value. Put it in front of the market.",
  },
];

export const PARTICIPANT_TRACKS = [
  { title: "Freelancers & creators", body: "Build for the client or niche you want to work with. You don’t need an existing client: your solution becomes a portfolio case and a client-acquisition asset." },
  { title: "Agencies & studios", body: "Develop a new service, workflow or solution you could productize and offer to clients." },
  { title: "Business owners", body: "Solve a real problem in your own company. Implement or test what you build in your business." },
];

export const JUDGING_CRITERIA = [
  { title: "Use of Runable", body: "How effectively and creatively you use Runable’s capabilities to build the solution." },
  { title: "Execution", body: "How complete, functional and polished your finished project is." },
  { title: "Participation & distribution", body: "How actively you document, publish and share your work. Follower count, raw views and posting volume alone do not decide the winner." },
];

export const DISCOUNT_PERKS = [
  "AVCC50: 50% off the first purchase for the first 30 users",
  "AVCC30: 30% off all purchases for everyone else",
  "Script, voiceover, video and edit in one flow",
  "Every top model on one subscription",
  "Free plan stays available, 1,500 credits a day",
];

export type MemberResult = {
  name: string;
  image: string;
  metric: string;
  body: string;
};

export const RESULTS: MemberResult[] = [
  {
    name: "Jj Boogie",
    image: "/images/member-1.jpg",
    metric: "$15,000",
    body: "Landed a $15K deal with no plan and no portfolio.",
  },
  {
    name: "Sherah D.",
    image: "/images/member-2.jpg",
    metric: "$3,500",
    body: "Closed a health-tech client: setup plus one acquisition video.",
  },
  {
    name: "Juan Carlos I.",
    image: "/images/member-3.jpg",
    metric: "$750",
    body: "Paid gig after one day of lessons, at $250 a video.",
  },
  {
    name: "George S.",
    image: "/images/member-4.jpg",
    metric: "179K views",
    body: "First video after the lessons: 2 clients, 582 followers in 10 days.",
  },
  {
    name: "Dex Hobbes",
    image: "/images/member-5.jpg",
    metric: "$5,000",
    body: "A month in, 700K views and DMs asking for reels.",
  },
  {
    name: "Hector N.",
    image: "/images/member-6.jpg",
    metric: "1.1M views",
    body: "First AI video went viral in three hours.",
  },
];

export const FAQS = [
  {
    q: "Who can enter?",
    a: "AVCC members, new or current: freelancers and creators, agencies and studios, and business owners. Join the Skool community to access the challenge, lessons, feedback, progress threads and final-entry instructions. There is no submission form on this website.",
  },
  {
    q: "What can I build?",
    a: "Choose one of five categories: a website, an AI agent, an internal or client-facing tool, a lead-generation or automation workflow, or a brand package with at least 5 video or image assets. Build what’s missing in your own business or workflows, or solve a problem for your target client.",
  },
  {
    q: "What do I need to complete the challenge?",
    a: "A completed Runable-powered project, a simple case-study presentation, at least one public social media post showcasing the project, and a shareable Runable chat link. Show the journey: identify a real business problem, design a solution, build it in Runable, package it into a strong case/project, and put it in front of the market.",
  },
  {
    q: "What goes in the case-study presentation?",
    a: "Business / Target Client → Problem → Idea → Solution → What You Built → Business Value. Explain who it helps and why it matters, rather than simply showing what an AI tool generated.",
  },
  {
    q: "How are projects judged?",
    a: "The core criteria are use of Runable, execution, and challenge participation & distribution. Judges consider effective and creative platform use, a complete and polished solution, and active public documentation. Social engagement alone does not determine the winner, and a larger audience does not automatically give you an advantage.",
  },
  {
    q: "How do the discount codes work?",
    a: `The first 30 users can apply ${COUPON} for 50% off their first purchase on either a monthly or yearly plan. This offer does not apply to renewals. Everyone else can use ${STANDARD_COUPON} for 30% off all purchases. Apply the relevant code at Runable checkout.`,
  },
  {
    q: "Do I have to use Runable?",
    a: "Yes. Your completed project must be powered by Runable. Include a shareable Runable chat link with your submission so your work and build journey can be reviewed.",
  },
  {
    q: "Do I need to land a paying client?",
    a: "No. A paying client is not required to complete the challenge or win. Pitching to clients, getting replies or leads, making sales, or implementing the solution in your own business are optional bonus outcomes.",
  },
  {
    q: "Where do I share my challenge work?",
    a: "Participate, share progress and promote your challenge project through the AVCC Skool community. Follow the announcement and checkpoint threads there, and use the final-entry process linked inside Skool. You still need at least one public social media post showcasing the project; share that link in the community. This landing page does not collect entries.",
  },
  {
    q: "What support is included?",
    a: "A dedicated Runable Classroom in AVCC, educational lessons, a build-along with Sergey, community discussion and feedback, progress checkpoints, and a Week 3 live session with Sergey and the Runable team for Q&A, troubleshooting and project positioning. An optional additional community call offers personal project and presentation support.",
  },
  {
    q: "What is the prize pool?",
    a: "The confirmed Runable prize pool is $2,000 in total—not $2,000 for every winner. The concept proposes multiple awards, but the final award breakdown and dates will be announced inside the Skool community.",
  },
  {
    q: "What should my public post include?",
    a: "Show the project and clearly say it was built with Runable. Tag @aivideoskool and @runable_hq, and use the final challenge hashtag announced in Skool. A reel, screen-recorded demo, LinkedIn case study, carousel, walkthrough or build-in-public post can all work. One public post is the minimum; sharing progress more often creates more opportunities, but volume alone does not decide the winner.",
  },
];

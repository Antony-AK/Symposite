const eventRules = [
    {
        id: 1,
        name: "Paper Presentation",
        key: "paper-presentation",
        rules: [
            "Participants' work should be original and in the specified format.",
            "Abstract submission is required before the actual paper submission for shortlisting.",
            "Shortlisted students will be informed.",
            "Plagiarism is strictly prohibited and will not be entertained.",
            "Violation of any rules and format may result in rejection of the submission.",
            "Team Size: 2 (max)",
            "Theme: All themes are acceptable.",
            "Candidates must submit their presentation in PPT format and their complete paper in IEEE format.",
            "The selected teams must bring a soft copy of their paper.",
            "Papers must have a cover page specifying the title of the paper and names of the authors.",
            "Submission Email: techolympicsfx@gmail.com",
            "Each team gets 7 minutes for presentation and 3 minutes for Q&A.",
            "Evaluation consists of Written Paper (45%) and Oral Presentation (55%).",
            "Jury decision is final.",
            "Exciting prizes will be awarded during the valedictory ceremony."
        ]
    },
    {
        id: 2,
        name: "Code Wars",
        key: "code-wars",
        rules: [
            "Team Size: 2-3",
            "Teams must complete the given questions within the specified time to qualify for the next round.",
            "Malpractice will not be tolerated.",
            "Be ready 10 minutes before the event starts.",
            "Submit work on time.",
            "Violation of any rule may result in elimination.",
            "Participation certificates will be provided to all participants.",
            "Round 1: Quiz - 25 questions on programming and basic aptitude (20 min).",
            "Round 2: Rush Coding Challenge - Solve given programs, including error debugging and scenario-based questions (1hr).",
            "Round 3: Code Battle - 30 min coding challenge. Best 4 teams qualify, and the top 2 teams will be declared winner and runner-up.",
            "Jury’s decision is final.",
            "Exciting prizes will be awarded during the valedictory ceremony."
        ]
    },
    {
        id: 3,
        name: "Datathon",
        key: "datathon",
        rules: [
            "Datathon is a competitive event where participants analyze a dataset and present insights using data visualization tools.",
            "Registration & Verification Process includes QR code verification, on-spot registration (if available), and venue confirmation.",
            "Rule Explanation: The moderator will brief participants on the competition rules.",
            "Round 1 - Quiz: 30 MCQs on data analysis and visualization (20 min).",
            "Round 2 - Exploratory Data Analysis (EDA): Dataset distribution via WhatsApp group, analyze and visualize data using preferred tools like Power BI and Tableau (1 hour).",
            "Presentation: 5 minutes per team, followed by 1-minute Q&A with judges.",
            "Team Size: 1-2 members."
        ]
    },
    {
        id: 4,
        name: "Connexions",
        key: "connexions",
        rules: [
            "Bioscope is a timed game where participants identify hidden words in pictures.",
            "Faster answers earn more points.",
            "Team Size: 1-2 members.",
            "No negative points.",
            "All participants receive a certificate of participation.",
            "Round 1: Top 50% of contestants qualify for Round 2 (1:2 ratio).",
            "Round 2: Top one-third of players qualify for Round 3 (1:3 ratio).",
            "Round 3: Final battle to determine the winner.",
            "Jury’s decision is final."
        ]
    },
    {
        id: 5,
        name: "Fusion Pitch",
        key: "fusion-pitch",
        rules: [
            "Team Size: Each team can have up to 2 members.",
            "Think outside the box and create the future! Participants will be given three unrelated fields and must design a product that integrates them.",
            "Teams will name the product and provide a one-line description.",
            "Round 1 - Ideation: A short description (150 words max) based on three major fields provided.",
            "Round 2 - Pitching: Selected teams will present their ideas to judges (5-minute presentation + Q&A session).",
            "Visual aids like PowerPoint and diagrams are encouraged.",
            "Judging Criteria: Innovation & Creativity, Feasibility, Integration of Fields, Presentation Skills.",
            "Originality: Plagiarism leads to immediate disqualification.",
            "AI Tools Usage: Allowed for brainstorming, but the final idea must be original.",
            "Professionalism: Respectful behavior towards participants and judges is mandatory.",
            "Teamwork: External help (outside the team) is not allowed.",
            "Code of Conduct: College rules apply; violations lead to disqualification.",
            "Certificates: Participation certificates for all; top 3 teams receive prizes."
        ]
    },
    {
    id: 6,
    name: "Investment Premier League (IPL)",
    key: "ipl",
    rules: [
      "Round 1: Quiz Competition.",
      "Team Formation: Participants form teams (1 - 2 members per team).",
      "Each team competes in a Cricket Quiz Round on IPL statistics, players, and strategies.",
      "Top 15 teams qualify for Round 2 based on total quiz scores.",
      "Round 2: IPL Auction.",
      "Each team receives a virtual budget (e.g., 50 Crore) for bidding on players.",
      "Players are auctioned in different sets (Batsmen, Bowlers, All-rounders, Wicket-keepers).",
      "Teams must strategically buy 15 players within their budget.",
      "Playing XI Selection: Teams must select 11 players following these constraints:",
      "Batters: Minimum 4, Maximum 6.",
      "Bowlers: Minimum 3, Maximum 5.",
      "All-rounders: Minimum 1, Maximum 3.",
      "Wicket-keeper: Exactly 1 (can be a batter too)."
    ]
  },
  {
    id: 7,
    name: "Tech Quiz",
    key: "tech-quiz",
    rules: [
      "Be prepared at least 5 minutes before the event starts.",
      "All participants must download and use the designated platform.",
      "Rounds: There will be a total of 3 rounds.",
      "Round 1: 25 Questions.",
      "Round 2: 20 Questions.",
      "Round 3: 15 Questions (5 from each category: Technology, Programming, Higher Order Aptitude).",
      "Timing for each question: 30 seconds.",
      "Teams that decode the clue first will proceed to successive rounds.",
      "Qualification Criteria:",
      "Round 1: Top half of contestants qualify for Round 2 (1:2 ratio).",
      "Round 2: One-third of the players qualify for Round 3 (1:3 ratio).",
      "Round 3: Final battle; top 2 teams with maximum cumulative scores are declared Winner and Runner-up.",
      "Evaluation: Jury decision is final.",
      "Exciting prizes will be awarded during the valedictory ceremony."
    ]
  },
  {
    id: 8,
    name: "Designathon",
    key: "designathon",
    rules: [
      "This is a solo event; participants must work individually.",
      "The design challenge will be given on the spot.",
      "Designs must be original and created within the competition time.",
      "Plagiarism is strictly prohibited and will lead to disqualification.",
      "Any rule violations will result in immediate elimination.",
      "Time Limit: 1 Hour for designing.",
      "Tool: Participants must use Figma for designing.",
      "Submission: Participants must submit their Figma design link before the time ends.",
      "External assets (icons, images) can be used but must be royalty-free.",
      "Designs should be user-friendly, innovative, and visually appealing.",
      "Presentation: Each participant will get 2-3 minutes to present their design.",
      "The presentation must cover:",
      "1. The thought process behind the design.",
      "2. How their UI improves usability.",
      "3. Innovative elements they introduced.",
      "Final Presentation & Evaluation: 15 Minutes."
    ]
  }
];

export default eventRules;

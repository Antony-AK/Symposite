const eventRules = [
    {
        id: 1,
        name: "Tech Connections",
        key: "tech-connections",
        rules: [
            "Team Size: Each team must have 2-3 members.",
            "Rounds: The event consists of three rounds, each different levels of technical knowledge and logical reasoning.",
            "Question Format: Problems will be a mix of puzzles, coding snippets, circuit diagrams, and algorithm tracing.",
            "Time Limit: Each round has a time constraint—teams must solve challenges within the given time.",
            "Elimination: The lowest-scoring teams will be eliminated after each round.",
            "No External Help: The use of internet, mobile phones, or reference materials is strictly prohibited.", 
            "Judging Criteria: Points are awarded based on accuracy, speed, and innovation in solving problems.",
        ]
        
    },  
    {
        id: 2,
        name: "Datathon",
        key: "datathon",
        rules: [
            "Team Size: Each team must have 2-3 members.",
            "Rounds: The event consists of three rounds, focusing on data analysis, preprocessing, and model building.",
            "Time Limit: Each round has a fixed time constraint to complete the given task.",
            "No External Help: The use of pre-trained models, external datasets, or internet is strictly prohibited.",
            "Evaluation Criteria: Submissions will be judged on accuracy , innovation , and efficiency.",
            "Presentation: Shortlisted teams must present their findings to the judges in the final round.",
            "Tie-Breaker: In case of a tie, a bonus challenge will be given to decide the winner.",
        ]
        
    },  
    {
        id: 3,
        name: "Tech Treasure Hunt",
        key: "tech-treasure-hunt",
        rules: [
            "Team Size: Each team must have 2-3 members.",
            "Rounds: The competition consists of multiple rounds, each leading teams closer to the final treasure.",
            "Clue Format: Clues may involve riddles, puzzles, ciphers, or location-based tasks.",
            "Time Limit: Each round has a fixed time limit to solve the clue and move to the next stage.",
            "No External Help: The use of mobile phones, internet, or external assistance is strictly prohibited.",
            "Fair Play: Teams must not interfere with other teams or remove clues from their locations.",
            "Hint System: Teams can request a limited number of hints, but it may result in a time penalty.",
        ]
        
    },
    {
        id: 4,
        name: "Paper Presentation",
        key: "paper-presentation",
        rules: [
            "Team Size: Each team can have up to 2 members.",
            "Paper Format: Submissions must follow the IEEE format and include proper citations.",
            "Abstract Submission: Participants must submit an abstract before the full paper for shortlisting.",
            "Presentation Time: Each team will have 8 minutes to present and followed by 2 minutes for Q&A.",
            "Evaluation Criteria: Judging will be based on content quality, presentation skills, and innovation.",
            "Medium: Presentations must be in PowerPoint format, and teams must bring a soft copy on a USB drive.",
            "Q&A Session: Judges may ask technical questions related to the research work.",
        ]
        
    },
    {
        id: 5,
        name: "Poster Making",
        key: "poster-making",
        rules: [
            "Team Size: Each team can have up to 2 members.",
            "Software Requirement: Posters must be designed using digital tools.",
            "Theme: The theme for the poster design will be announced at the beginning of the competition.",
            "Time Limit: Participants will have a fixed time to complete and submit their designs in PNG or PDF format..",
            "Originality: Designs must be original; plagiarism or use of pre-made templates will lead to disqualification.",
            "Content Guidelines: The poster should be visually appealing, informative, and relevant to the given theme.",
            "Evaluation Criteria: Judging will be based on creativity, design clarity, and relevance to the theme.",
        ]
        
    },
    {
        id: 6,
        name: "AddsUp",
        key: "adds-up",
        rules: [
            "Team Size: Each team can have up to 4 members.",
            "Concept: Teams must create and present an advertisement for a given product or theme.",
            "Time Limit: Each team will have a maximum of 2 minutes to present their advertisement.",
            "Language: The ad must be presented in a clear and appropriate language.",
            "Creativity: Judges will evaluate the creativity, humor, and effectiveness of the advertisement.",
            "Surprise Round: Surprise round may be introduced, teams must improvise an ad on the given topic.",
            "Evaluation Criteria: Judging will be based on creativity, acting and audience engagemeny.",
        ]
        
        
    },
    {
        id: 7,
        name: "Project Expo",
        key: "project-expo",
        rules: [
            "Team Size: Each team can have up to 3 members.",
            "Project Type: Projects can be software-based, hardware-based, or a combination of both must present a working demo of their project to the judges..",
            "Documentation: Teams must submit a brief project report on methodology, and outcomes.",
            "Time Limit: Each team will have 10 minutes for their presentation, followed by a 5-minute Q&A session.",
            "Originality: Plagiarism or direct replication of existing solutions will result in disqualification.",
            "Equipment: Teams must bring their own laptops, hardware components, and etc...",
            "Evaluation Criteria: Judging will be based on innovation, feasibility, and impact.",
        ]      
        
        
    },
    {
        id: 8,
        name: "Designathon",
        key: "designathon",
        rules: [
            "Team Size: Participants can compete individually or in teams of up to 2 members.",
            "Theme: The design theme will be announced at the beginning of the competition.",
            "Software Requirement: Participants can use design tools such as Figma, Adobe XD, Photoshop, or Canva.",
            "Time Limit: Each team will have a fixed time to complete and submit their design.",
            "Submission Format: Design must be submitted in high-resolution PNG, JPEG or PDF format Late submissions will not be accepted.",
            "Originality: Plagiarism or use of pre-made templates will lead to disqualification.",
            "Design Guidelines: The design should be visually appealing, functional, and align with the given theme.",
            "Evaluation Criteria: Judging will be based on creativity, usability and aesthetics.",
        ]
           
        
    }
];


export default eventRules;
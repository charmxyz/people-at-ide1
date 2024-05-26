document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    const people = [
        {
            name: "Saffan Firdaus",
            background: "I have a background in digital product design, worked in various e-commerce roles. Studied biomedical engineering in college and love joining hackathons.",
            strength: "Good at working in teams, respect all opinions, open to new ideas, adapt quickly to new environments, always want to learn more about both technical and non-technical stuff.",
            weakness: "Not good at 3D design but willing to learn, can't stay up all night.",
            values: "Love creating products that solve problems and help people, want to keep building and improving until I make a successful startup.",
            workEthics: "Maximize time during weekdays, usually work 9-6, but willing to work extra hours and weekends if needed.",
            topicsYoureInterestedIn: "Sustainability; Healthcare; Artificial Intelligence (AI)",
            topicsYouWantToAvoid: "None",
            portfolioLink: "http://saffan.cc/"
        },      
        {
            name: "Dandan",
            background: "Visual UI UX",
            strength: "1. Efficient, quick-paced work 2. Creative and energetic, 3 reliable, high standards for my own work.",
            weakness: "I’ll be impatient when I realise we have to stay up all night to finish our assignment because we couldn't settle on or kept changing ideas until the day before the presentation",
            values: "Implementable and practical",
            workEthics: "Wish be in a team and everyone has a clear role, discuss together and finish independent work with high quality. I hope we can work diligently on our graduation project",
            topicsYoureInterestedIn: "AI, business potential",
            topicsYouWantToAvoid: "None",
            portfolioLink: "https://www.linkedin.com/in/yidan-xu2000/"
        },
        {
            name: "Jinwei Shi (Jimmy)",
            background: "My background is industrial design (BEng), during the study I developed some design and engineering skills and learned coding by myself. After studying I went to a sci-fi company to do all sorts of design ranging from graphic design, product design and even interior design. After this I worked as a freelancer and developed some game design skills. Just before going to IDE, I worked at a studio making interactive windows with Hermes.",
            strength: "Project-oriented. Think through making. Always find ways to solve problem.",
            weakness: "Not good at expressing ideas and thoughts, especially improvising them. Sometimes insensitive to some social issues. Need a lot of time to think.",
            values: "Cool things makes our life like magic world.",
            workEthics: "I am mostly independent worker. I can do group discussion during the day, but if we have to stay up late to work, I prefer divide the work and working independently at home.",
            topicsYoureInterestedIn: "Compliant Mechanism, Physical and digital interaction, new structures, AI contents",
            topicsYouWantToAvoid: "Pure app.",
            portfolioLink: "https://sjwwhenever.xyz/"
        },
        {
            name: "Gisung Han",
            background: "Industrial designer, kitchen appliances, Digital devices, Furniture, Craft",
            strength: "Experience, Hard working",
            weakness: "Language but getting better",
            values: "Understanding human",
            workEthics: "Fun",
            topicsYoureInterestedIn: "Cook",
            topicsYouWantToAvoid: "Online service",
            portfolioLink: "https://www.linkedin.com/"
        },
        {
            name: "Prisca Vilsbol",
            background: "My background is pattern making for fashion design (own brand Vilsbol de Arce), local production and circular economy (Manufacture Copenhagen) and research and development in textiles (priscavilsbol.com).",
            strength: "I have a lot of industry experience and an understanding of how things work in that context. Manufacturing processes and how things are made is a passion of mine. I am very good at keeping an eye on the bigger picture, aligning and meditating team work. Communication is key, I’m a fan, and no need to sugarcoat anything as long as it’s respectful. I can make pretty much anything textile related, but also wood, clay, metal etc and I enjoy and am good at using scraps and anything i can find to make quick prototypes. Pretty much anything to be done by hand, I’m your gal :)",
            weakness: "I am sensitive and NOT good in loud spaces and chaotic environments (I.e. battersea 🤣). I have limited capabilities in most software except Adobe Suite, and have been quite frustrated that there hasn’t been time to skill up yet, as I would like to learn! I am a starter, so it’s important to have a finisher on the team, and I’m sometimes paralyzed by perfectionism, but just nudge me and I’ll move on ;)",
            values: "Empowering people to take their own decisions. Not to control but to collaborate and create. Thriving. Connection (human connection, human-nature connection human-product connection or emotional attachment). Respect - for people, things, materials and processes alike - and humility (no white saviorism or technooptimism). And beauty! Because it “…illuminates the affinity, the inner relation, the resemblance, the kinship, the concord and identity of things. We are all trained to tell things apart. In the experience of beauty, we learn to tell things alike”",
            workEthics: "I am a team player, mostly night owl, and I take the time and space I need to stay as sharp as I can be, so I will stay away from endless work days and weekend work. My experience is that sharpness and good energy trumps long hours every single time in performance. If we find a good work station setup, and the project and team is engaging, I can have pretty limitless energy though.",
            topicsYoureInterestedIn: "More than a consumer facing product, I am interested in the frameworks and processes that enable and empower others to create or repair said products. An automated production process, a business model or a design software for example. (Not necessarily in textiles though that’s of course where I have most knowledge.) I would be keen to do a quite engineer-led project if the team is there for that. A CAD printer? an innovative mold-making process? a sock-mending robot? a scrap-scanning-and reorganizing software? idk.",
            topicsYouWantToAvoid: "Medical devices or purely digital/apps. The latter could of course be relevant, but preferably only as an enabler for a physical product/tool/experience.",
            portfolioLink: "https://issuu.com/priscavilsbol/docs/2023_priscavilsbol_portfolio"
        },
        {
            name: "Alex Clark",
            background: "Studied product & industrial design at Central Saint Martins. Before joining IDE, I worked as a consultant in UX and service design. I am skilled in business strategy, UX/user research and graphic design, as well as team management.",
            strength: "Ideation, problem solving, prototyping, creative execution and strategy",
            weakness: "I tend to focus on the big picture - I'm not so good at the details. I often start lots of things at once - I occasionally get distracted from finishing things off. I can get a bit fixated sometimes and might need to be pulled back down to earth!",
            values: "Be optimistic, make others successful, collaborate and embrace ambiguity. I am driven by the ambition to craft a visionary future. My goal is to work with a great team to develop an exceptional idea that could evolve into a business.",
            workEthics: "Independent, but receptive and communicative. Like to have an open and creative approach.",
            topicsYoureInterestedIn: "Healthcare, energy futures, accessible tech, sustainability, product & service systems, human-centred design",
            topicsYouWantToAvoid: "Mental health/neurodiversity, awareness campaigns, crafting/'maker'",
            portfolioLink: "linkedin.com/in/aepclark"
        }
    ];

    people.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-header">
                <div class="name">${person.name}</div>
                <div class="button" id="portfolio-link-${person.name.replace(/\s+/g, '-')}" onclick="window.open('${person.portfolioLink}', '_blank')">
                    <div class="label">Portfolio</div>
                    <img class="icon-left" alt="" src="./image/chevron.png">
                </div>
            </div>
            <div class="placeholder">${person.background}</div>
            <div class="characteristic">Strength</div>
            <div class="placeholder">${person.strength}</div>
            <div class="characteristic">Weakness</div>
            <div class="placeholder">${person.weakness}</div>
            <div class="characteristic">Values</div>
            <div class="placeholder">${person.values}</div>
            <div class="characteristic">Work Ethics</div>
            <div class="placeholder">${person.workEthics}</div>
            <div class="characteristic">Topics You're Interested In</div>
            <div class="placeholder">${person.topicsYoureInterestedIn}</div>
            <div class="characteristic">Topics You Want to Avoid</div>
            <div class="placeholder">${person.topicsYouWantToAvoid}</div>
        `;

        container.appendChild(card);
    });
});

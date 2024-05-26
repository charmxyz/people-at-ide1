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
            background: "Industrial Designer / I designed exterior and concept design for Samsung Electronics' home appliances. My background includes furniture design, branding, and consulting at a design agency.",
            strength: "My love and dedication to IDEs and their companions. :) If you want a design that is both realistic and beautiful, and you have to choose one among industrial designers, I would be the best choice.",
            weakness: "Language. However, considering the fact that I am studying English for the first time in my middle age, this is an amazing development. I am confident that by next year, I will be able to become a talkative friend.",
            values: "I have no plans to get a job. I aim to become a director at Samsung or a professor. I am not at risk of dropping out in the middle of an assignment due to becoming an intern or getting a job. My goals are to work well with you all, enjoy studying, improve my English skills, and understand the younger generation. For me, enjoying the class itself is the goal. This also means that I have good followership, respecting and following the purpose and direction of your module.",
            workEthics: "I want to work happily based on mutual trust and respect. (It's okay if you can't design, but lying is not acceptable.)",
            topicsYoureInterestedIn: "Things related to human life and emotions. Cooking, food, handling cultural differences, agriculture, laundry, cleaning, music, art, sculpture, performances, robots, furniture, household goods, art objects, education.",
            topicsYouWantToAvoid: "Services and app services that operate in a 100% digital environment.",
            portfolioLink: "https://www.behance.net/estabhan"
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
            name: "Wigy Ramadhan",
            background: "I took Product Design for my undergraduate degree and then worked as a Design Researcher and Strategist for almost six years. I have worked in various industries, including e-commerce, circular fashion, and fintech, helping technology startups (mainly digital) design, develop, release, and evaluate their products across multiple countries in Asia - Pacific. My role as a Design Researcher involved looking at the macro level of business, market, and strategy while also focusing on the micro level of how a product should be built to achieve product-market fit.",
            strength: "I am a fast learner, natural observer + analyst, also a deep thinker. I am able to see things through different lenses. There is terminology in my native language, \"ngulik\" means looking into detail, which represents me as a person; I can see both the big picture and the small picture at once, and most of the time, when I see something, I see it systematically to understand how it is happening. I am very humanist, empathetic, caring, listener, highly adaptive. I am good at design software (both 3D and Adobe) and can learn new software quickly. I am very logical and feeling person, though it sounds contradictory but that helps me in judging things not just based on logic but also feel. I wouldn't mind getting my hands dirty, I like doing things hands-on (tinkering) and love to go to the field to see and feel the real situation. According to the concept of \"Human Design\" (Google it, it's cool), I am considered a Generator, which means I naturally have a lot of energy and focus for work. Additionally, I have an open Crown Center, meaning I get most of my ideas from external sources, easily inspired by people and my surroundings. That's why I love to explore new places and be around you guys!",
            weakness: "The way I think might be unconventional, and I can be an over-thinker who sometimes gets overwhelmed and lost in my thoughts. This is related to my strength, as I can easily become fascinated by complex subjects. So, at times, I can be the guide for the team, but sometimes I am the one who needs guidance (pull me out of my mind and bring me to the ground). I don't have strong technical engineering skills (coding, mechanical engineering, chemistry, biology, etc.), but I do have a love and joy for exploring these areas. I noticed that I have an accent that may not be easy to understand, speak too fast, and grammatically wrong. But I feel I am getting better now as I speak with you more, I learn more. The way I learn is by reading and observing, which sometimes takes time, but when I understand something as a whole, I can quickly help explore both the bigger and smaller picture. Sometimes I may feel insecure, not confident, weak, and hard on myself. Please support me if you see me in this state.",
            values: "My belief in humanity and making something meaningful: I believe in the inherent goodness and potential of humanity. Despite the challenges and setbacks we face, I have faith that people can come together to create positive change for both individuals and the planet. I have worked in environments where companies or projects focused on profit over impact, and where human beings were exploited for someone else's benefit. I don't want to be a designer who causes another problem by exploiting nature or uses design to influence people to buy or adopt things that are not good for themselves or the planet.",
            workEthics: "I am a team player and wouldn't leave my teammate if they respect me as well. Communication and respect are the keys to a successful team. My work ethic involves setting aside emotions and ego to focus on team objectives. I am not a starter, but I can guide a starter. I have extensive experience facilitating workshops, making me more of a process and exploration person. I build ideas on top of others' ideas. Lastly, when I work on something I love, trust, or believe in, I am very 100% focused.",
            topicsYoureInterestedIn: "Any design that helps humanity and save our planet, and I am against projects that 100% focus on commercialisation. I am open to any idea involved with technology to help human, makes new material or programming material, facilitating regenerative design.",
            topicsYouWantToAvoid: "Purely digital or any digital solution or system (incl. service design) without tangible product.",
            portfolioLink: "https://www.linkedin.com/in/wigyramadhan/"
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
        },
        {
            name: "Rosalie Valentiny",
            background: "Data analyst for the UN SDGs - Economic development and computer science - psychology and education - comms & graphics / cartoons - since a year, material exploration",
            strength: "Enjoy creating connections between people, social outreach - love transparent communication within my group, as long as its constructive - good at getting the ball rolling and keeping in mind the bigger picture - from my background, have a strong base in understanding human behaviour and social issues - very much enjoy storytelling and building a narrative around what it is that we do, doing the background research - math and coding when necessary",
            weakness: "Noise sensitive, struggle to work in loud co-working spaces for too long - better with large picture overview than attention to details - want to get better at 3D modelling",
            values: "Projects that help alleviate taboos and empower people and communities - I enjoy being playful in my work - sustainable approaches to making use of materials and waste, finding the 'hacks' - connection - lastly, a good narrative and aesthetic outcome",
            workEthics: "More night owl than early bird, and like to have good work life / balance aka would rather stick to a schedule most of the time and figure out how to be efficient within that time frame than sacrifice my weekends and recharge time - Definitely more of a team player :) but once again, believe in a good balance between working as a unit and dividing tasks so we can all have more flexibility based on our personal needs",
            topicsYoureInterestedIn: "Open to many topics but current highlights would be in bio design, future materials and most importantly to take into account sustainability, but not necessarily in the sense most people would understand it. Other than environmental factors, for me sustainability is also about creating long lasting social and welfare benefits for people and communities, as giving people a better quality of life and empowering them as a community is a necessary step for sustainable co-existence. As well, interested in collaborating with scientific community of Imperial :)",
            topicsYouWantToAvoid: "Probably purely digital / tech driven projects",
            portfolioLink: "https://www.linkedin.com/"
        },
        {
            name: "Yuyao Lin",
            background: "Landscape Architecture",
            strength: "Eco-knowledge, something related to nature! also personalities, I'm a good listener",
            weakness: "coding stuff...",
            values: "a better future!",
            workEthics: "team player, be on time! let's do this efficiently!",
            topicsYoureInterestedIn: "climate, nature stuff, ecology?",
            topicsYouWantToAvoid: "all tech-driven",
            portfolioLink: "https://www.linkedin.com/"
        },
        {
            name: "Haowen Ma (Alex)",
            background: "My background is in communications engineering, and I am familiar with programming and mechanical structures. I have been a programming teacher and developed a robotic arm myself. I have a strong interest in HCI.",
            strength: "Good at teamwork and listening to other people's opinions, prefer practice over expression, have strong creativity, good at execution, hard working",
            weakness: "Express my ideas very clearly, afraid to raise challenging ideas because I don’t know how to achieve them.",
            values: "Want to use technology to make interesting and cool things",
            workEthics: "I feel sluggish in the morning and I like to work in the afternoon and evening (even in the middle of the night). And I need some space when it comes to working independently.",
            topicsYoureInterestedIn: "AI content, HCI, Mechanical structure related, Wearable device, Game",
            topicsYouWantToAvoid: "Pure APP",
            portfolioLink: "https://www.linkedin.com/in/haowen-ma-632214282/"
        },
        {
            name: "Matthew Lee",
            background: "• Professional: Management Consulting experience at Accenture working with Consumer, Retail, and Technology companies primarily in the AI and Analytics space; Commercial Banking and Wealth Management\n• Education: studied Finance and Computer Applications in undergrad, RCA Graduate Diploma - Product, Interiors and Spatial Design\n\nConsulting; Strategy; Storytelling; AI; Analytics; Data; Finance; Consumer; Retail; Tech",
            strength: "Top 10 strengths and summary document can be found here: (in portfolio link)\n\nTL;DR on areas I over-index on:\n- Strong Connections: I value strong connections and prioritize creating free ideas. An environment where any idea or course of action can be challenged freely creates stronger outcomes\n- Strategic Dominant: Overall bias in strategic thinking and domain compliments my ability to analyze information, anticipate challenges before they happen, and formulate effective plans\n- Outcome Driven: While I bias toward strategic thinking, I also recognize aspects of trying to create and turn ideas into something real within the constraints of time or resources",
            weakness: "A few potential downsides about me:\nNow, while I'm excited to work together, I also want to acknowledge my potential blind spots.\n\nSometimes I can get caught up in finding the perfect solution and consider the potential pros and cons of every approach, which might make me seem overly critical. I might also get so focused on the big picture that I have built in my mind, that I choose to overlook certain details or overlook what's happening right now.\n\nMy consideration to both include but also identify where others might play the best role in specific aspects of the project, might also make me appear to prioritize individual needs over the group's needs. I've come to understand through introspection that others can have distinct, opposing, parallel, or tangential thought processes to my own; which I am working on more effectively integrating in my decision making processes.\n\nI tend to ignore prior processes and constraints. Considering that the vision of what is to be achieved to be of extreme importance. But in instances like these I will almost always shamelessly ask others who might have expertise in areas that I would be deficient in knowing the possible downsides of a particular approach or angle.",
            values: "Difficult problems are great, but also a working toward a singular goal and vision of how we wish things to be. With interventions and outcomes based on how we would transform something to fit the future vision. Passion for the work is also important. As without passion the ability to get through the tougher times will be even more difficult. I'd like to create an outcome that can improve lives.",
            workEthics: "I am the type that cannot leave work unfinished, so will look to complete tasks as well as possible within the typical workweek. I believe in a realistic approach to breaks with the normal being regular breaks following sprints of focused work.\n\nAs I've lead many teams in the past I'll constantly ask how every one is doing. I also believe that if there are differences or disagreements to lean into the problem and solve the conflict as best as possible and as soon as possible.\n\nI may go on a walk or get a coffee in the middle of the day not just a means to just take a break but also to synthesize in my head all of the insights and data gathered from conversations or desk research. I often will come up with my best ideas, workarounds, or solutions by simple setting changes such as this.",
            topicsYoureInterestedIn: "Embedded AI, before coming to IDE I worked on building the enterprise use cases for IoT AI/ML. IE using embedded and fit for purpose devices to monitor and strengthen critical infrastructure.\n\nFuture of work; assistive technologies; digital twin (but not strictly VR/AR)",
            topicsYouWantToAvoid: "I'm not too interested in energy sector based problems, unless they are fit or built for a specific purpose. For instance a smart city project that is projected to increase the energy efficiency of the city. That is great, but I'd rather it'd be an increase in the efficiency of the city for the sake of improving the lives of people or the important services and industries that rely on that energy. There should be a reason for the efficiency.\n\nNot directly interested in healthcare but might be interested in assistive technologies.",
            portfolioLink: "https://drive.google.com/file/d/1-ntxRQ9DdJyu9uw2bhGLSAEuAMpbOcf9/view?usp=sharing"
        },
        {
            name: "Bingbing Hong",
            background: "Industrial Design",
            strength: "Idea developing, Prototyping, Modeling, Visual, Communication",
            weakness: "Reference research, Coding (can try), Engineering",
            values: "I like interesting ideas and glad to see different views from diverse people, but I think good ideas should also be feasible and able to benefit the core group at least on a small scale as well as have a long term impact.",
            workEthics: "I'm a nooner... The group focuses its attention for a couple of hours in daytime, and what can be accomplished individually is put away for later in the afternoon. And I don't like to work on weekends.",
            topicsYoureInterestedIn: "Accessible design, humanistic care, or AI combined with the former topics",
            topicsYouWantToAvoid: "Climate change, medical",
            portfolioLink: "https://bingbinghong0309-copy.cargo.site/"
        },
        {
            name: "Dunni Fadeyi",
            background: "I studied Mechanical Engineering undergrad and have participated in a few internships in the region.\n\nI've also done an internship looking into business analysis at a Nigerian startup.",
            strength: "Team player; Good listener and try to ensure everyone in the team feels heard👂; CAD Design; I like to remember the big picture; I enjoy understanding how things work in a wider system; prototyping; take initiative within team projects",
            weakness: "I work most efficiently in quiet and comfortable spaces (home; studio booths etc.); somewhat of a perfectionist so may take some time to research and make sure I'm happy with the outcome :) ; not the best at visual design but am willing to learn",
            values: "Participating in 'useful' projects that allow for tangible impact in (a) communities. I am open to take the project forward with the team past IDE",
            workEthics: "More night owl than early bird; Would prefer at least one day in the weekday when I work independently; like to touch-base regularly within the team",
            topicsYoureInterestedIn: "I'm pretty open and would love to be involved in a project that creates something physical and that interacts with humans. Some interesting topics: healthcare; tech for developing countries; climate related; product",
            topicsYouWantToAvoid: "Purely digital project; Mental health",
            portfolioLink: "https://www.linkedin.com/in/dunni-fadeyi-46a7a51a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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

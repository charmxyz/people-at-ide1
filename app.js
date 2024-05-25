document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    const people = [
        {
            name: "Saffan Firdaus",
            background: "I have a background in digital product design, with experience working in multiple e-commerce roles. I hold an undergraduate degree in biomedical engineering and have a passion for participating in hackathons.",
            strength: "Ability to work effectively in team settings; Respectful of all opinions and open to new ideas; Quick to adapt to new environments; Committed to continuous learning, both technical and non-technical",
            weakness: "Limited skills in 3D design, but eager to improve; Difficulty with pulling all-nighters",
            values: "Passionate about creating products that solve problems and help people; Dedicated to continuous building and innovation, aiming to eventually establish a successful startup",
            workEthics: "Focused on maximizing productivity during weekdays, typically working from 9 AM to 6 PM; Willing to work additional hours during weekdays and weekends if necessary",
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

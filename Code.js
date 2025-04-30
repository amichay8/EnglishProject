const Pages = document.querySelectorAll('.Page');

Pages.forEach(page => {
    page.addEventListener('click', () => {
        let teacherName = page.getAttribute('id');
        informationShow(teacherName);
    });
});

const Teachers = {
    "Liora": {
        photo: "./Photos/Liora.jpg",
        title: "Liora",
        video: "./Videos/Liora.mp4",
        part1: "Liora Lea Weiss lives in Petah Tikva. She has been a teacher for 33 years because of her love of teaching and people. She especially likes that her students understand and absorb quickly, interested, curious, and smart. She loves teaching about Zionism, about the country.",
        part2: "Outside of teaching she loves traveling around the world, shopping, spending time with friends, plays and musicals. Her favorite food Chocolate and bourekas. Her childhood dream was to be a flight attendant, and she wanted to be a designer. She speaks Hebrew, English and knows a little German and a little Yiddish.",
        If: "If she",
        Fact: '<button class="but3">Fun fact</button>',
        part3: "If she could sit with a historical figure or someone famous for dinner, she would want to meet Herzel - because he is a fascinating figure who made a 180 degree change at the age of 30 and he had a very serious vision and I would like to meet him. If she could learn any instrument, she would learn piano or organ. If she could go anywhere right now, she would be on the beaches in Thailand. If she could have any power she wants, she will choose the power of health so that everyone will be healthy",
        part4: "She did national service in Kiryat Shmona. She got lost on an yearly trip in 12th grade in the Golan Heights with a few other friends - in the forest."
    },

    "Anastasia": {
        photo: "./Photos/Anastasia.jpg",
        title: "Anastasia",
        video: "./Videos/Anastasia.mp4",
        part1: "Anastasia Sander lives in Kfar Saba. She has been an English teacher in Brener for 7th, 8th and 9th grade students and she has taught for eight years because she thinks that's her calling, she really loves this profession, she loves making an impact on her students' lives and she feels that she is good at it. She loves that you can be creative, that you can teach different things all the time, and that you can share your enthusiasm about languages. Before being a teacher, she used to be a bank analyst, she would analyze companies and decide if giving them loans or not for millions of dollars. She loves teaching grammar because it feels kind of mathematical. She loves it when students start understanding this topic. And she also loves talking about books and poems students can show... And essays.",
        part2: "Outside of teaching she hikes a lot, reads books, plays the piano, learns languages and sometimes she adds new ones. Her childhood dream was to travel a lot, When she was young and she made her dream come true. She has been to many, many countries in Europe. Slovenia, Vatican City, Italy almost ten times and more. She has a rat and she has had three rats already and five hamsters because her daughter asks for rodents. She speaks Russian, English and Hebrew, but she also can speak a little French and Italian. Her favorite color is blue. Her favorite director is Lanthimos Largos and she likes art movies. Her favorite food is shrimp with pasta. She always wants to be a better version of herself, learning new things and achieving new goals.",
        If: "If she",
        Fact: "",
        part3: "If she couldn't be a teacher, she would be an actress. If she could have dinner with any historical or famous person, she would have dinner with Sir Ken Robbins because he inspired her to be a great teacher and he was her role model. If she could instantly master any skill, she would want to understand all the languages in the world because it's so great when you come into a certain place and you can understand everything. If she had any superpower, she would choose to make people kinder and make our world more peaceful.",
        part4: ""
    },

    "Yulia": {
        photo: "./Photos/Yulia.jpg",
        title: "Yulia",
        video: "./Videos/Yulia.mp4",
        part1: "Yulia Berg lives in Rosh HaAyin. Her dream was not to be a teacher, but to be a manager. But because she wanted to be a manager, and you can't be a manager in the medical field. She came to Israel and saw the education system here, but she didn’t think she would be able to teach here. But slowly she settled in and did projects at school and got by here.",
        part2: "Outside of teaching she can speak Hebrew, Russian, English, and Ukrainian. Her favorite food is Pelmeni.",
        If: "If she",
        Fact: "",
        part3: "If she could be anywhere, she would be somewhere she would feel safe.",
        part4: ""
    },

    "Batia": {
        photo: "./Photos/Batia.jpg",
        title: "Batya",
        video: "./Videos/Batia.mp4",
        part1: "Batya Carmeli lives in Petah Tikva. She has been a teacher for 40 years because she loves the profession and the most fun part about teaching in her opinion is when her students listen to her and complete the tasks. She has the most fun when she teaches ball games.",
        part2: "Outside of teaching, she speaks Hebrew and English. She used to have a dog. Her hobby is taking care of her grandchildren. Her favorite food is Sushi. She wants to be healthy and travel the world.",
        If: "If she",
        Fact: '<button class="but3">Fun fact</button>',
        part3: "If she could be anywhere, she would be in New Zealand. If she could have dinner with any historical or famous person, she would have dinner with Rabin, because his assassination was very traumatic for her and she would like to meet him. If she could learn any skill she wants, she would choose to learn acting.",
        part4: "She is a graduate of Brenner High School."
    },

    "Yevgeny": {
        photo: "./Photos/Yevgeny.jpg",
        title: "Yevgeny",
        video: "./Videos/Yevgeny.mp4",
        part1: "Yevgeny Yatskevich lives in Petah Tikva. He has been a teacher for 5 years, because he has been around sports his whole life, he was an outstanding athlete in the army, he practiced judo and he was a coach for many years—it was a natural continuation. The most fun part about teaching in his opinion is seeing the students make progress, succeed in completing a task they couldn't do before, and seeing the joy on their faces. The most fun area in his opinion is incorporating fitness through games and fun.",
        part2: "Outside of teaching he speaks Hebrew, English, and Russian. He has a dog. His hobbies are martial arts, diving, cars, and motorcycles. His favorite food is hamburger. His childhood dream was to compete in the Olympics in judo. He wants to enjoy life and travel.",
        If: "If he",
        Fact: '<button class="but3">Fun fact</button>',
        part3: "If he could have dinner with a historical figure or a famous person, he would choose Genghis Khan because he built the largest empire in the world. He sounds like a madman, but an interesting one. If he could learn any skill he wants, he would choose to change my work ethic so he could apply what he does to other professions as well. If he could have any superpower, he would choose the Looney Tunes superpowers, of taking damage but coming back healthy. If he could go anywhere in the world right now, he would go to New Zealand.",
        part4: "He is the oldest of two brothers."
    },

    "Hiba": {
        photo: "./Photos/Hiba.jpg",
        title: "Hiba",
        video: "./Videos/Hiba.mp4",
        part1: "Hiba abu Amsha lives in Tayibe, in central Israel. She has been an Arabic teacher for 15 years, because ever since she was a child, she dreamed of becoming a teacher and it felt like her calling. She loves the work—standing, speaking, and being close to the students. She enjoys most hearing the students and bringing them closer to the Arabic language and culture. She truly believes in building bridges between hearts and learning about others.",
        part2: "Outside of teaching she speaks Arabic as her native language, Hebrew at a native level, and English as her third language.She used to have rabbits and birds, but she got rid of them because she couldn’t stand them. Her favorite foods are schnitzel, shawarma, and stuffed grape leaves. Her childhood dream was to become a teacher. She wants to grow within the education system and continue learning. ",
        If: "If she",
        Fact: "",
        part3: "If she could travel anywhere in the world right now, she would go to Switzerland, because of the breathtaking photos, nature, and scenery.",
        part4: ""
    },
    
    "Bar": {
        photo: "./Photos/Bar.jpg",
        title: "Bar",
        video: "./Videos/Bar.mp4",
        part1: "Bar Bracha Bernfreund lives in Givat Shmuel. She has been a teacher for 3 years because she did a national service at a school and from there she liked the idea and she went to teach. She enjoys most when her students ask questions. The most important part about teaching in her opinion is the students.",
        part2: "Outside of teaching she speaks Hebrew and a little bit of English. She used to have a parrot. Her hobby is makeup. Her favorite food is Sushi. Her childhood dream was to be a makeup artist. She wants to be a mom.",
        If: "If she",
        Fact: '<button class="but3">Fun fact</button>',
        part3: "If she could have dinner with any historical figure or a famous person, she would have dinner with Moses. If she could learn any skill she wanted, she would pick drawing. If she could go to any place right now, she would go to Japan. If she could get any superpower she wanted to, she would pick mind reading.",
        part4: "She is religious."
    },
    
    "Dalit": {
        photo: "./Photos/Dalit.jpg",
        title: "Dalit",
        video: "./Videos/Dalit.mp4",
        part1: "Dalit Elazar lives in Herzliya. She has been a teacher for 15 years because she has an academic background and had an epiphany when her children were in middle school. She enjoys most the feeling she is teaching the students new things. Her favorite subject to teach is human rights.",
        part2: "Outside of teaching she speaks Hebrew, English and a little Japanese. Her favorite food is pasta. She wants to contribute more to society and for her family to develop. Her childhood dream was to be famous. If she couldn't be a teacher, she would be working for the Shin Bet.",
        If: "If she",
        Fact: '<button class="but3">Fun fact</button>',
        part3: "If she could have dinner with any historical figure or a famous person, she would have dinner with Golda Meir because she loves strong women. If she could go to any place right now, she would go to Mexico. If she could get any superpower she wanted to, she would pick flying.",
        part4: "She is a swimmer."
    },

    "Helen": {
        photo: "./Photos/Helen.jpg",
        title: "Helen",
        video: "./Videos/Helen.mp4",
        part1: "Helen ben ami has been a teacher for 10 years because she decided to be a teacher when she was 3 years old. She enjoys most her students' creativity.",
        part2: "Outside of teaching her hobbies are soccer, reading, cooking and baking. She wants to open a center for teenagers emotionally and developmentally.",
        If: "If she",
        Fact: '<button class="but3">Fun fact</button>',
        part3: "If she could have dinner with any historical figure or a famous person, she would have dinner with Yitzhak Rabin because she was connected to him in the army and he inspired her. If she could go to any place right now, she would go to any country she can and be close to nature.",
        part4: "She will be 50 next month."
    },

    "Lida": {
        photo: "./Photos/Lida.jpg",
        title: "Lida",
        video: "./Videos/Lida.mp4",
        part1: "Lida lives in Petah Tikva. She has been a teacher since 1982, took a break for three years, and then came back. She has been at Brenner School for 36 years. At first, she wanted to be a special education teacher, but there were no spots available. She came with a high school diploma and a degree from Iran and studied again in Israel while learning the language. She loves teaching kids at middle school age.",
        part2: "Outside of teaching she speaks Hebrew, English, and Persian. Her favorite foods are Rice and Ghormeh Sabzi. Her childhood dream was to be a midwife or a doula.",
        If: "If she",
        Fact: '<button class="but3">Surprising fact</button>',
        part3: "If she could get any superpower she wanted to, she would pick that there would be no evil in the world.",
        part4: "She went through a difficult life and overcame it. She immigrated to Israel alone without her parents. She had an older brother who had cancer; she took care of him, and he passed away."
    },

    "Sigal": {
        photo: "./Photos/Sigal.jpg",
        title: "Sigal",
        video: "./Videos/Sigal.mp4",
        part1: "Lida lives in Petah Tikva. She has been a teacher since 1982, took a break for three years, and then came back. She has been at Brenner School for 36 years. At first, she wanted to be a special education teacher, but there were no spots available. She came with a high school diploma and a degree from Iran and studied again in Israel while learning the language. She loves teaching kids at middle school age.",
        part2: "Outside of teaching she speaks Hebrew, English, and Persian. Her favorite foods are Rice and Ghormeh Sabzi. Her childhood dream was to be a midwife or a doula.",
        If: "If she",
        Fact: '<button class="but3">Surprising fact</button>',
        part3: "If she could get any superpower she wanted to, she would pick that there would be no evil in the world.",
        part4: "She went through a difficult life and overcame it. She immigrated to Israel alone without her parents. She had an older brother who had cancer; she took care of him, and he passed away."
    },

}

function informationShow(teacher) {
    const data = Teachers[teacher];
    const MainContainer = document.querySelector('.MainContainer');
    MainContainer.innerHTML = '';

    if (data) {
        MainContainer.innerHTML = `
            <div class="Info">
                <div class="Start">
                    <img class="img1" src="${data.photo}">
                    <h1>${data.title}</h1>
                </div>
                <div class="Middle">
                    <div class="P">
                        <h4>${data.part1}</h4>
                        <h4>${data.part2}</h4>
                    </div>
                    <button class="but">${data.If}</button>
                    ${data.Fact}
                    <button class="but2">Go home</button>
                    <video controls autoplay>
                        <source src="${data.video}" type="video/mp4">
                    </video>
                </div>
                <h6 class="h6">Made by Amichay Kreimer in 2025™</h6>
            </div>
        `;
        const but = document.querySelector('.but');
        const but2 = document.querySelector('.but2');
        const but3 = document.querySelector('.but3');

        but.addEventListener('click', () => {
            informationShowSpec(teacher);
        });

        but2.addEventListener('click', () => {
            Home();
        });

        but3.addEventListener('click', () => {
            informationShowFact(teacher);
        });
    }
}

function informationShowSpec(teacher) {
    const data = Teachers[teacher];
    const MainContainer = document.querySelector('.MainContainer');
    MainContainer.innerHTML = '';

    if (data) {
        MainContainer.innerHTML = `
            <div class="Info">
                <div class="Start">
                    <img class="img1" src="${data.photo}">
                    <h1>${data.title}</h1>
                </div>
                <h4>${data.part3}</h4>
                <div class="Middle">
                    <button class="but">${data.If}</button>
                    ${data.Fact}
                    <button class="but2">Go home</button>
                </div>
                <h6 class="h6">Made by Amichay Kreimer in 2025™</h6>
            </div>
        `;
        const but = document.querySelector('.but');
        const but2 = document.querySelector('.but2');
        const but3 = document.querySelector('.but3');

        but.addEventListener('click', () => {
            informationShowSpec(teacher);
        });

        but2.addEventListener('click', () => {
            Home();
        });

        but3.addEventListener('click', () => {
            informationShowFact(teacher);
        });
    }
}

function informationShowFact(teacher) {
    const data = Teachers[teacher];
    const MainContainer = document.querySelector('.MainContainer');
    MainContainer.innerHTML = '';

    if (data) {
        MainContainer.innerHTML = `
            <div class="Info">
                <div class="Start">
                    <img class="img1" src="${data.photo}">
                    <h1>${data.title}</h1>
                </div>
                <h4>${data.part4}</h4>
                <div class="Middle">
                    <button class="but">${data.If}</button>
                    ${data.Fact}
                    <button class="but2">Go home</button>
                </div>
                <h6 class="h6">Made by Amichay Kreimer in 2025™</h6>
            </div>
        `;
        const but = document.querySelector('.but');
        const but2 = document.querySelector('.but2');
        const but3 = document.querySelector('.but3');

        but.addEventListener('click', () => {
            informationShowSpec(teacher);
        });

        but2.addEventListener('click', () => {
            Home();
        });

        but3.addEventListener('click', () => {
            informationShowFact(teacher);
        });
    }
}

function Home() {
    const MainContainer = document.querySelector('.MainContainer');
    MainContainer.innerHTML = '';

    MainContainer.innerHTML = `
        <div class="Section">
            <div id="Liora" class="Page">
                <img class="img" src="./Photos/Liora.jpg">
                <h2>Liora</h2>
                <h5>History Teacher</h5>
            </div>
            <div id="Anastasia" class="Page">
                <img class="img" src="./Photos/Anastasia.jpg">
                <h2>Anastasia</h2>
                <h5>English Teacher</h5>
            </div>
            <div id="Yulia" class="Page">
                <img class="img" src="./Photos/Yulia.jpg">
                <h2>Yulia</h2>
                <h5>Math Teacher</h5>
            </div>
            <div id="Batia" class="Page">
                <img class="img" src="./Photos/Batia.jpg">
                <h2>Batia</h2>
                <h5>Sport Teacher</h5>
            </div>
            <div id="Yevgeny" class="Page">
                <img class="img" src="./Photos/Yevgeny.jpg">
                <h2>Yevgeny</h2>
                <h5>GYM Teacher</h5>
            </div>
        </div>
        <div class="Section2">
            <div id="Hiba" class="Page">
                <img class="img" src="./Photos/Hiba.jpg">
                <h2>Hiba</h2>
                <h5>Arabic Teacher</h5>
            </div>
            <div id="Sigal" class="Page">
                <img class="img" src="./Photos/Sigal.jpg">
                <h2>Sigal</h2>
                <h5>Science Teacher</h5>
            </div>
            <div id="Dalit" class="Page">
                <img class="img" src="./Photos/Dalit.jpg">
                <h2>Dalit</h2>
                <h5>Citizenship Teacher</h5>
            </div>
            <div id="Bar" class="Page">
                <img class="img" src="./Photos/Bar.jpg">
                <h2>Bar</h2>
                <h5>Bible Teacher</h5>
            </div>
            <div id="Lida" class="Page">
                <img class="img" src="./Photos/Lida.jpg">
                <h2>Lida</h2>
                <h5>Physics Teacher</h5>
            </div>
            <div id="Helen" class="Page">
                <img class="img" src="./Photos/Helen.jpg">
                <h2>Helen</h2>
                <h5>Literature Teacher</h5>
            </div>
        </div>
        <h6>If there is any problem with the quality of the videos, it is not the website makers fault.</h6>
        <h6>Made by Amichay Kreimer in 2025™</h6>
    `;

    const Pages = document.querySelectorAll('.Page');

    Pages.forEach(page => {
        page.addEventListener('click', () => {
            let teacherName = page.getAttribute('id');
            informationShow(teacherName);
        });
    });
}
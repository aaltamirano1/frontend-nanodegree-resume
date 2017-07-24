const bio = {
    name: "Angel Altamirano",
    role: "Web Developer",
    contacts: {
        mobile: "(470)-000-0000",
        email: "angel.g.altam@gmail.com",
        github: "aaltamirano1",
        location: "Atlanta, GA"
    },
    biopic: "images/My Face.png",
    welcomeMessage: "Pleased to meet you! Feel free to reach out, helpful advice and resources always appreciated.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "SQL", "Angular JS"],
    displayInHeader: function(html, property) {
        $("#header").append(html.replace("%data%", property));
    },
    displaySkills: function() {
        for (let i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    },
    displayContacts: function(html, property) {
        $("#footerContacts").append(html.replace("%data%", property));
    }
};

bio.displayInHeader(HTMLheaderName, bio.name);

bio.displayInHeader(HTMLheaderRole, bio.role);

bio.displayInHeader(HTMLbioPic, bio.biopic);

bio.displayInHeader(HTMLwelcomeMsg, bio.welcomeMessage);

$("#header").append(HTMLskillsStart);
bio.displaySkills();

bio.displayContacts(HTMLmobile, bio.contacts.mobile);

bio.displayContacts(HTMLemail, bio.contacts.email);

bio.displayContacts(HTMLgithub, bio.contacts.github);

bio.displayContacts(HTMLlocation, bio.contacts.location);


const work = {
    jobs: [{
            employer: "Scientific Games",
            title: "Player Services Representative",
            dates: "Feb 2016 - today",
            location: "Alpharetta, GA",
            description: "Assist players with website navigation and ticket entry on Lottery Rewards websites.\nAnswer questions in regards to ticket rules, Rewards Drawings, etc.\nContact shippers in regards to lost/damaged package disputes for Rewards Prizes.\n  Resolve discrepancies in directory of player accounts and keep personal information confidential."
        },
        {
            employer: "Angel's Catering",
            title: "Co-Manager",
            dates: "June 2010 - today",
            location: "Norcross, GA",
            description: "Weigh in on decisions (jobs to keep/drop, how to handle competition). Buy inventory. Set appointments for health inspection. Negotiate terms with superintendents for sale at their construction sites. Promote communication and relationships and stay informed about work opportunities."
        }
    ],
    display: function() {
        function htmlReplacer(html, property) {
            $(".work-entry").append(html.replace("%data%", property));
        }
        for (let i = 0; i < work.jobs.length; i++) {
            htmlReplacer(HTMLworkEmployer, work.jobs[i].employer);
            htmlReplacer(HTMLworkTitle, work.jobs[i].title);
            htmlReplacer(HTMLworkDates, work.jobs[i].dates);
            htmlReplacer(HTMLworkLocation, work.jobs[i].location);
            htmlReplacer(HTMLworkDescription, work.jobs[i].description);
        }
    }
};

$("#workExperience").append(HTMLworkStart);
work.display();

const education = {
    schools: {
        name: "Georgia State University- J. Mack Robinson College of Business",
        degree: "Bachelor of Business Administration",
        dates: "Aug 2010 - May 2015",
        location: "Atlanta, GA",
        major: "Accounting",
        URL: "http://robinson.gsu.edu/"
    },
    online: [{
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "June 2017 - Sept 2017",
            URL: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            title: "CSS Flexbox Layout",
            school: "Treehouse",
            dates: "Mar 2017",
            URL: "https://teamtreehouse.com/library/css-flexbox-layout"
        },
        {
            title: "Angular JS Basics (1.x)",
            school: "Treehouse",
            dates: "June 2017",
            URL: "https://teamtreehouse.com/library/angularjs-basics-1x-2"
        },
        {
            title: "Reporting with SQL",
            school: "Treehouse",
            dates: "June 2017",
            URL: "https://teamtreehouse.com/library/reporting-with-sql"
        },
        {
            title: "Modifying Data SQL",
            school: "Treehouse",
            dates: "June 2017",
            URL: "https://teamtreehouse.com/library/modifying-data-with-sql"
        }
    ],
    displaySchool: function() {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools.name).replace("#", education.schools.URL));

        function htmlReplacer(html, property) {
            $(".education-entry").append(html.replace("%data%", property));
        }
        htmlReplacer(HTMLschoolDegree, education.schools.degree);
        htmlReplacer(HTMLschoolDates, education.schools.dates);
        htmlReplacer(HTMLschoolLocation, education.schools.location);
        htmlReplacer(HTMLschoolMajor, education.schools.major);
    },
    displayOnline: function() {
        for (let i = 0; i < education.online.length; i++) {
            $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.online[i].title).replace("#", education.online[i].URL));
            $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.online[i].school));
            $(".education-entry").append(HTMLonlineDates.replace("%data%", education.online[i].dates));
            $(".education-entry").append(HTMLonlineURL.replace("%data%", education.online[i].URL).replace("#", education.online[i].URL));
        }
    }
};


$("#education").append(HTMLschoolStart);
education.displaySchool();

$(".education-entry").append(HTMLonlineClasses);
education.displayOnline();

const projects = {
    projects: [{
            title: "Magic 8Ball",
            dates: "Dec 2016 - June 2017",
            description: "Think of a question and the 8 Ball will give you an answer. Answers randomly selected from an array.",
            image: "images/8Ball webpg.png",
            URL: "https://aaltamirano1.github.io/Magic-8Ball/"
        },
        {
            title: "Flickr API",
            dates: "Apr 2017 - June 2017",
            description: "Cute animal pictures. Cat, Dog, or Mouse? The choice is yours! Uses Flickr's API to display the top 25 images of an animal selected by users.",
            image: "images/Flickr API webpg.png",
            URL: "https://aaltamirano1.github.io/Flickr-API/"
        },
        {
            title: "Guest List",
            dates: "Mar 2017 - June 2017",
            description: "Keep track of event invitees and attendees. Uses JavaScript to display, hide, and edit guests based on user input.",
            image: "images/Guest List webpg.png",
            URL: "https://aaltamirano1.github.io/Guest-List/"
        }
    ],
    display: function() {
        for (let i = 0; i < projects.projects.length; i++) {
            $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].URL));
            $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
            $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
            $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].image));
        }
    }
};

$("#projects").append(HTMLprojectStart);
projects.display();

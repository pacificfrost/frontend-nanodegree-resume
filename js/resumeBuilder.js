/*
 This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts = "I am Ali and I am Awesome";
// var funThoughts = awesomeThoughts.replace('Awesome', 'fun');
//
// $("#main").append(funThoughts);

var data = '%data%'

var bio = {
    'name': 'Phillip J. Fry',
    'role': 'Pizza Delivery Boy',
    'contacts': {
        'youtube': 'cat_video-pizzafryman123123',
        'mobile': '650-444-4444',
        'email': 'PhillipJ@planetexpress.com',
        'twitter': '@FryDawg202024619012202',
        'location': 'New New York',
        'github': 'le_pizza_le_fry12010203991',
        'blog': 'fry\'s biggity blog'
    },
    'welcomeMessage': 'Hello World!',
    'skills': [
        'delivering things', 'pizza', 'interplanetary delivery'
    ],
    'bioPic': 'images/fry.jpg'
};
var work = {
    "jobs": [
        {
            "start": "1990",
            "employer": "Pizza Express",
            "title": "Pizza Delivery",
            "dates": "02-20-1992",
            "location": "New York",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Pellentesque varius sit amet augue id faucibus. " +
                "Nullam accumsan quam eu iaculis aliquet. Curabitur risus urna, tincidunt."
        },
        {
            "start": "3010",
            "employer": "Planet Express",
            "title": "Intergalactic Package Delivery",
            "dates": "04-20-3087",
            "location": "New New York",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Pellentesque varius sit amet augue id faucibus. "
        }
    ]
};
var education = {
    "schools": [
        {
            "name": "Mount Royal College",
            "city": "Calgary, Ab",
            "major": "CompSci",
            "minor": "New Media",
            "graduation": "2010"
        },
        {
            "name": "University of Lethbridge",
            "city": "Lethbridge, Ab",
            "major": "CompSci",
            "minor": "New Media",
            "graduation": "2012"
        }
    ]
};
var projects = {
    "project": [
        {
            "start": "2016",
            "title": "Website Create",
            "dates": "2016-2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Pellentesque varius sit amet augue id faucibus. ",
            "image":[
                "http://www.frecosse.com/images/slider/website_design.png",
                "https://imgflip.com/s/meme/Futurama-Fry.jpg"
            ]
        },
        {
            "start": "2016",
            "title": "Website Create",
            "dates": "2016-2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Pellentesque varius sit amet augue id faucibus. ",
            "image": [
                "http://www.frecosse.com/images/slider/website_design.png",
                "https://imgflip.com/s/meme/Futurama-Fry.jpg",
                "http://www.abc.net.au/news/image/7797710-1x1-940x940.jpg"
            ]
        },
        {
            "start": "2016",
            "title": "Website Create",
            "dates": "2016-2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Pellentesque varius sit amet augue id faucibus. ",
            "image": [
                "http://www.frecosse.com/images/slider/website_design.png",
                "https://imgflip.com/s/meme/Futurama-Fry.jpg",
                "http://www.abc.net.au/news/image/7797710-1x1-940x940.jpg",
                "http://blog.archive.org/wp-content/uploads/2016/10/leo2.png"
            ]
        }
    ]
}


function inName(name){
    var nameArray = name.split(' ');
    nameArray[nameArray.length-1] = nameArray[nameArray.length-1].toUpperCase();
    name = nameArray.join(' ');
    return name;
}

bio.name = inName(bio.name);

var objectKeys = Object.keys(bio.contacts);

var formattedwelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
var formattedname = HTMLheaderName.replace(data, bio.name);
var formattedrole = HTMLheaderRole.replace(data, bio.role);

var formattedbioPic = HTMLbioPic.replace(data, bio.bioPic);

var formattedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
var formattedemail = HTMLemail.replace(data, bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
var formattedlocation = HTMLlocation.replace(data, bio.contacts.location);
var formattedgithub = HTMLgithub.replace(data, bio.contacts.github);
var formatgenericcontact = HTMLcontactGeneric.replace('%contact%', objectKeys[0]).replace(data, bio.contacts.youtube);

var formattedskills1 = HTMLskills.replace(data, bio.skills[0]);
var formattedskills2 = HTMLskills.replace(data, bio.skills[1]);
var formattedskills3 = HTMLskills.replace(data, bio.skills[2]);

projects.display = function(){
    $('#projects').append(HTMLprojectStart);

    for (var i in projects.project){
        var projectTitle = HTMLprojectTitle.replace(data, projects.project[i].title);
        var projectDates = HTMLprojectDates.replace(data, projects.project[i].dates);
        var projectDescription = HTMLprojectDescription.replace(data, projects.project[i].description);
        $('.project-entry').append(projectTitle);
        $('.project-entry').append(projectDates);
        $('.project-entry').append(projectDescription);

        for (var img in projects.project[i].image){
            var projectImage = HTMLprojectImage
                .replace(data, projects.project[i].image[img])
                .replace('%size%', '100px');
            $('.project-entry').append(projectImage);
        }
    }
};

projects.display();

$("#header").prepend(formattedbioPic);
$("#header").prepend(formattedwelcome);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);

if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    $("#skills").prepend(formattedskills3);
    $("#skills").prepend(formattedskills2);
    $("#skills").prepend(formattedskills1);
}

$("#topContacts").prepend(formattedlocation);
$("#topContacts").prepend(formattedgithub);
$("#topContacts").prepend(formattedtwitter);
$("#topContacts").prepend(formattedmobile);
$("#topContacts").prepend(formattedemail);
$("#topContacts").prepend(formatgenericcontact);

work.jobs.forEach (function(jobs){
    var date = jobs['start'];
    var employer = HTMLworkEmployer.replace(data, jobs.employer);
    var title = HTMLworkTitle.replace(data, jobs.title);
    var dates = HTMLworkDates.replace(data, jobs.dates);
    var worklocation = HTMLworkLocation.replace(data, jobs.location);
    var description = HTMLworkDescription.replace(data, jobs.description);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(employer);
    $('.work-entry:last a').append(title);
    $('.work-entry:last').append(dates);
    $('.date-text:last').prepend(date + ' - ');
    $('.work-entry:last').append(worklocation);
    $('.work-entry:last').append(description);
});

$(document).click(function(loc) {
    console.log(loc.pageX + " " + loc.pageY);
});
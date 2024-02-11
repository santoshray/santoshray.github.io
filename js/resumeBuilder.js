var work ={
	"jobs":[
		{
			"employer":"NXP Software Private Ltd ",
			"title":"Senior Software Engineer",
			"location":"Bangalore, India",
			"dates":"June 2005 to Sept 2007",
			"description":"Multimedia Audio Video Systems Engineer for 3G Video Telephony Project"
		},
		{
			"employer":"Qualcomm India Private Ltd",
			"title":"Senior Engineer",
			"location":"Hyderabad, India",
			"dates":"Oct 2007 to March 2010",
			"description":"Audio Drivers Engineer for Qualcomm MSM 6K sereis chipset"
		},
		{
			"employer":"Qualcomm UK Ltd",
			"title":"Senior Engineer",
			"location":"Farnborough, UK",
			"dates":"April 2010 to Oct 2012",
			"description":"Customer Engineer  for Audio . Worked with customers like SoMC , Peiker , Cinterion , Telit in Europe.Also supported China OEMs and US OEMs for resoving Audio issues  and customization in Audio Software"
		},
		{
			"employer":"Qualcomm Innovation Center Inc",
			"title":"Staff Engineer",
			"location":"San Diego, US",
			"dates":"Oct 2012  till Present",
			"description":"Customer Engineer  for Audio. Currently working with OEMS wordwide for training them about Qualcomm Audio Soulutions ,resolving  Audio Issues and helping other Customer Engineers worlwide  in understanding Qualcomm Audio solution. "
		}
	]
};

var projects ={
	"project":[
		{
			"title":"Implementation of Avatar",
			"dates":"july 2005",
			"description":"switching Live video to a static picture  during live 3G video call"
		},
		{
			"title":"Implementation of eVTeLS",
			"dates":"july 2006",
			"description":"Framework to stream Images , Videos during live video call"
		},
		{
			"title":"Implementation of Audio Camera Concurrency feature in low end QSC1100 chipset",
			"dates":"july 2008",
			"description":"Audio driver state machine implementation to handle Audio camera concurrency feature in Qualcomm QSC 1100 feature "
		}
	]
};

var bio =
{
	"name":"Santosh Ray",
	"role":"Staff software Engineer",
	"contacts":{
		"mobile":"858-260-9957",
		"email":"santosh.ray81@gmail.com",
		"github":"https://github.com/santoshray",	
		"twitter":"@skray",
		"location":"San Diego"
	},
	"skills":["HTML","CSS","C","Python","Trace32","ALSA"],
	"biopic":"images/mypic.jpg",
	"welcomeMessage":"Hi EveryBody!! , I am Santosh Ray  working as a Customer Engineer in Qualcomm Innovation center Inc in San Diego , CA , US "
};

var education ={
	"schools":[
		{
			"name":"Stewart School",
			"city":"Cuttack",
			"degree":"Class X",
			"majors":["Physics","Chemistry","Mathematics","Biology","History","Geography","English","Oriya"],
			"Year":"1997"
		},
		{
			"name":"BJB College",
			"city":"Bhubaneswar",
			"degree":"Class XII",
			"majors":["Physics","Chemistry","Mathematics","Electronics","English"],
			"Year":"1999"
		},
		{
			"name":"University College of Engineering, Burla",
			"city":"Burla",
			"degree":"Bachelors in Electronis and Telecommunication Engineering",
			"majors":["Communication Engineering","ElectroMagnetic Field Theory","Radar Engieering","Network Analysis","Digital Image Processing"],
			"Year":"2003"
		},
		{
			"name":"Indian Institute of Technology, Kharagpur",
			"city":"Kharagpur",
			"degree":"MTech in Automation and Computer Vision",
			"majors":["Advanced Control System","Pattern recognition","Digital Image Processing","Neural Networks","Comunication Networks","Operating Sytems","Data Structures"],
			"Year":"2005"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%","Santosh Ray");
var formattedRole = HTMLheaderRole.replace("%data%","Staff Engineer");
var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%","email");
formattedContactGeneric = formattedContactGeneric.replace("%data%","santosh.ray81@gmail");
var formattedMobile = HTMLmobile.replace("%data%","858-260-9957");
var formattedEmail = HTMLemail.replace("%data%","santosh.ray81@gmail.com");
var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);


$ ("#header").prepend(formattedRole);
$ ("#header").prepend(formattedName);

$ ("#topContacts").prepend(formattedMobile);
$ ("#topContacts").prepend(formattedEmail);
$ ("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$ ("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));


$ ("#skillsChart").prepend(HTMLskillsStart);
$ ("#skillsChart").prepend(formattedBiopic);
$ ("#skillsChart").prepend(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
console.log(formattedBiopic);

console.log(bio["skills"].length);
if (bio["skills"].length > 0)
{
	for (var i=0; i < bio["skills"].length ;i++ ){
		formattedskill = HTMLskills.replace("%data%",bio["skills"][i]);
		console.log(formattedskill);
		$("#skills").append(formattedskill);

	}
}


function display_work(){
	$ ("#header").append(HTMLworkStart);

	// Process the work experience objects  
	var formattedHTMLworkEmployer;
	var formattedHTMLworkTitle;
	var formattedHTMLworkDates;
	var formattedHTMLworkLocation;
	var formattedHTMLworkDescription;

	if (work.jobs.length > 0 )
	{
		for(var i =0; i < work.jobs.length; i++)
		{	
			 formattedHTMLworkEmployer    = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
			 formattedHTMLworkTitle 	  = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			 formattedHTMLworkDates       = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			 formattedHTMLworkLocation    = HTMLworkLocation.replace("%data%",work.jobs[i].location);
			 formattedHTMLworkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);		
			 $("#workExperience").append(formattedHTMLworkEmployer+formattedHTMLworkTitle);
			 $("#workExperience").append(formattedHTMLworkDates);
			 $("#workExperience").append(formattedHTMLworkLocation);
			 $("#workExperience").append(formattedHTMLworkDescription);
		}
	}

}

display_work();


$ ("#header").append(HTMLschoolStart);
// Process the Education objects 
var formattedHTMLschoolStart = "<div class='education-entry'></div>";
var formattedHTMLschoolName = "<a href='#'>%data%";
var formattedHTMLschoolDegree = " -- %data%</a>";
var formattedHTMLschoolDates = "<div class='date-text'>%data%</div>";
var formattedHTMLschoolLocation = "<div class='location-text'>%data%</div>";
var formattedHTMLschoolMajor = "<em><br>Major: %data%</em>"


if(education.schools.length > 0){
	for(var i =0; i< education.schools.length; i++){
		formattedHTMLschoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		formattedHTMLschoolDates = HTMLschoolDates.replace("%data%",education.schools[i].Year);
		formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].city);
		formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[0]+', '+education.schools[i].majors[1]+', '+education.schools[i].majors[2] );
		 $("#education").append(formattedHTMLschoolName+formattedHTMLschoolDegree);
		 $("#education").append(formattedHTMLschoolDates);
		 $("#education").append(formattedHTMLschoolLocation);
		 $("#education").append(formattedHTMLschoolMajor);
	}
}
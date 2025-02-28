//$("#main").append("Santosh Ray");
var formattedName = HTMLheaderName.replace("%data%","Santosh Ray");
var formattedRole = HTMLheaderRole.replace("%data%","Software Engineer");

$ ("#header").prepend(formattedRole);
$ ("#header").prepend(formattedName);

var bio =
{
	"name":"Santosh Ray",
	"role":"Software Engineer",
	"contact_info":"858-260-9957",
	"picture_URL":"https://google.com/logo",
	"welcome_message":"Hi EveryBody!!"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact_info);
$("#main").append(bio.picture_URL);
$("#main").append(bio.welcome_message);


var work=
{
	"position":"Software Engineer",
	"Employer":"NXP software",
	"Years":"2.5years"
}

var education=
{
	"school":"Stewart School",
	"year":"1997",
	"city":"Cuttack"
}

$("#main").append(work["position"]);

var education ={
	"schools":[
		{
			"name":"Stewart School",
			"city":"Cuttack",
			"minors":"Class X",
			"majors":"None",
			"graduation_year":"1997"
		},
		{
			"name":"BJB College",
			"city":"Bhubaneswar",
			"minors":"+2",
			"majors":"None",
			"graduation_year":"1999"
		}
	]
}




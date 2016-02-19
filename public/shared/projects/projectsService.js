app.service("projectsService", function(){
	var projects = [ 
			{
				id: 1,
				imgPath: "crochetPanel/crochet-beret.jpg",
				title: "Beret"
			},
			{
				id: 2,
				imgPath: "crochetPanel/crochet-phone-cover.jpg",
				title: "Phone Cover"
			},
			{
				id: 3,
				imgPath: "crochetPanel/crochet-mario-mushroom.jpg",
				title: "Mario Mushroom"
			},
			{
				id: 4,
				imgPath: "crochetPanel/crochet-ribbed-beanie.jpg",
				title:"Ribbed Beanie"
			},
			{
				id: 5,
				imgPath: "crochetPanel/crochet-granny-squares.jpg",
				title:"Granny Squares"
			},
			{
				id: 6,
				imgPath: "crochetPanel/crochet-heart.jpg",
				title:"Puffed Heart"
			},
			{
				id: 7,
				imgPath: "crochetPanel/crochet-puff-flowers.jpg",
				title:"Puffed Flowers"
			},
			{
				id: 8,
				imgPath: "crochetPanel/crochet-thor-beanie.jpg",
				title:"Thor Beanie"
			}
		];

	this.getProjects = function(){return projects};
	this.getProjectById = function(id) {
		for(var i = 0; i < projects.length; i++){
			if(projects[i].id == id){
				return projects[i];
			}
		} 
		return null;
	};
});
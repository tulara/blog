app.service("projectsService", function(){
	var projects = [ 
			{
				id: 1,
				img: {
					small: "crochet-beret-small.jpg",
					feature: "crochet-beret.jpg"
				},
				title: "Beret"
			},
			{
				id: 2,
				img: {
					small: "crochet-phone-cover-small.jpg",
					feature: "crochet-phone-cover.jpg"
				},
				title: "Phone Cover"
			},
			{
				id: 3,
				img: {
					small: "crochet-mario-mushroom-small.jpg",
					feature: "crochet-mario-mushroom.jpg"
				},
				title: "Mario Mushroom"
			},
			{
				id: 4,
				img: {
					small: "crochet-ribbed-beanie-small.jpg",
					feature: "crochet-ribbed-beanie.jpg"	
				},
				title:"Ribbed Beanie"
			},
			{
				id: 5,
				img: {
					small: "crochet-granny-squares-small.jpg",	
					feature: "crochet-granny-squares.jpg"
				},
				title:"Granny Squares"
			},
			{
				id: 6,
				img: {
					small: "crochet-heart-small.jpg",
					feature: "crochet-heart.jpg"
				},
				title:"Puffed Heart"
			},
			{
				id: 7,
				img: {
					small: "crochet-puff-flowers-small.jpg",
					feature: "crochet-puff-flowers.jpg"
				}, 
				title:"Puffed Flowers"
			},
			{
				id: 8,
				img: {
					small: "crochet-thor-beanie-small.jpg",
					feature: "crochet-thor-beanie.jpg"
				}, 
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
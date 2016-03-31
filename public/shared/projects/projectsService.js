app.service("projectsService", function(){
	var projects = [ 
			{
				id: 'crochet-beret',
				img: {
					small: "crochet-beret-small.jpg",
					feature: "crochet-beret.jpg"
				},
				title: "Beret"
			},
			{
				id: 'crochet-phone-cover',
				img: {
					small: "crochet-phone-cover-small.jpg",
					feature: "crochet-phone-cover.jpg"
				},
				title: "Phone Cover"
			},
			{
				id: 'crochet-mario-mushroom',
				img: {
					small: "crochet-mario-mushroom-small.jpg",
					feature: "crochet-mario-mushroom.jpg"
				},
				title: "Mario Mushroom"
			},
			{
				id: 'crochet-ribbed-beanie',
				img: {
					small: "crochet-ribbed-beanie-small.jpg",
					feature: "crochet-ribbed-beanie.jpg"	
				},
				title:"Ribbed Beanie"
			},
			{
				id: 'crochet-granny-squares',
				img: {
					small: "crochet-granny-squares-small.jpg",	
					feature: "crochet-granny-squares.jpg"
				},
				title:"Granny Squares"
			},
			{
				id: 'crochet-heart',
				img: {
					small: "crochet-heart-small.jpg",
					feature: "crochet-heart.jpg"
				},
				title:"Puffed Heart"
			},
			{
				id: 'crochet-puff-flowers',
				img: {
					small: "crochet-puff-flowers-small.jpg",
					feature: "crochet-puff-flowers.jpg"
				}, 
				title:"Puffed Flowers"
			},
			{
				id: 'crochet-thor-beanie',
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
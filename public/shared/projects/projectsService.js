app.service("projectsService", function(){
	this.getProjects = function(){
		return [ 
			{
				imgPath: "crochetPanel/crochet-beret.jpg",
				title: "Beret"
			},
			{
				imgPath: "crochetPanel/crochet-phone-cover.jpg",
				title: "Phone Cover"
			},
			{
				imgPath: "crochetPanel/crochet-mario-mushroom.jpg",
				title: "Mario Mushroom"
			},
			{
				imgPath: "crochetPanel/crochet-ribbed-beanie.jpg",
				title:"Ribbed Beanie"
			},
			{
				imgPath: "crochetPanel/crochet-granny-squares.jpg",
				title:"Granny Squares"
			},
			{
				imgPath: "crochetPanel/crochet-heart.jpg",
				title:"Puffed Heart"
			},
			{
				imgPath: "crochetPanel/crochet-puff-flowers.jpg",
				title:"Puffed Flowers"
			},
			{
				imgPath: "crochetPanel/crochet-thor-beanie.jpg",
				title:"Thor Beanie"
			}
		]};
})
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
			}
		]};
})
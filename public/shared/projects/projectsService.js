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
				title:"Ribbed Beanie",
				pattern: "<p>Row 1: chain 45 (this is the length of the beanie)</p><p>Row 2: SC in the back loop of each chain for the next 40 chains until only 5 chains remain. The last five stitches will be skipped every fourth row, beginning with this row. Chain 1, turn. (note: skipping these stitches creates the tapered top portion of the hat). </p><p>Row 3: SC in the back loop of each chain until the end of the row. Chain 1, turn. </p><p>Row 4: SC in the back loop of each chain to the end of the row (including each of the five chains that were previously skipped. Chain 1, turn. </p><p>Row 5: SC in the back loop of each chain until the end of the row. Chain 1, turn. Repeat rows 2 – 5 until desired length (about 17-20″ for an adult hat) is attained.</p><p> Using a yarn needle, sew the hat seam closed beginning at the wider end so that you end at what will be the top of the hat. Run the needle around the top opening in the hat and draw closed, then knot, snip yarn with a 3″ length and weave into surrounding stitches.</p>"
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
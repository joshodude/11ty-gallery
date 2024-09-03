// Get all the gallery images and display them based on year and month
module.exports = function () {
	const fg = require("fast-glob");
	const gallery = [];

	// You'll have to add more years if you need them
	var years = ["2022", "2023", "2024", "2025"];
	// Adds "gallery/" before each of the items
	years = years.map(i => "gallery/" + i);

	var yearsItems = [];
	var output = []

	// Gets the images in each of the years folders
	for (let i = 0; i < years.length; i++) {
		var subDir = ([years[i] + "/**/*.{jpg,jpeg,png,gif,webp}"]);
		var subDirResults = fg.sync(String("content/" + [subDir]));
		yearsItems += subDirResults;
	};

	// Deletes "content/gallery/" from yearsItems
	yearsItems = yearsItems.split("content/gallery/");

	// Deletes the empty first entrty
	yearsItems.splice(0, 1);

	// To delete the appended comma from the new first entry
	for (let i = 0; i < yearsItems.length; i++) {
		let preDel = yearsItems[i];

		if (preDel.endsWith(',')) {
			let del = preDel.substring(0, preDel.length - 1);
			gallery.push(del);
		}
		else {
			gallery.push(preDel);
		};
	};

	// Format for Nunjucks to read
	for (let i = 0; i < gallery.length; i++) {
		const element = gallery[i].split("/");

		const temp = {};

		temp.year = element[0];
		temp.month = element[1];
		temp.img = element[2];
		output.push(temp);
	};

	console.log(output);

	// Return the processed gallery, using the key 'output'
	return { gallery: output };
};
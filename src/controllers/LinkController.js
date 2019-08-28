const ogs = require('open-graph-scraper')

module.exports = {
	list(){},

	show(){},

	store(req, res){
		const options = {'url': req.body.url}
		
		ogs(options, function (error, results) {
		  
		  if(error){
		  	return res.json({ error: true, message: results })
		  }else{
		  	return res.json(results)
		  }
		  
		})
	},

	update(){},

	delete(){},
}
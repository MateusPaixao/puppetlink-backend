const ogs = require('open-graph-scraper')

let options = {'url': 'https://streammus.com.br/'}

ogs(options, function (error, results) {
  console.log('error:', error)
  console.log('results:', results)
})
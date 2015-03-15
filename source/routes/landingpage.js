var React = require('react');
var StoryTime = React.createFactory(require('../components/StoryTime.jsx'));

module.exports = function (app) {
    app.get("/", function (req, res) {
    	res.render('home', { markup: React.renderToString(StoryTime({path: req.path})), layout: 'main' });    
    });
};
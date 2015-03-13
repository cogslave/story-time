var React = require('react');
var StoryTime = require('./StoryTime.jsx');

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(StoryTime(), document);
    }
}
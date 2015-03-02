var React = require('react');
var VCardList = require('./vcard-list.jsx');
var ShortList = require('./short-list.jsx');

React.render(
  <VCardList />,
  document.querySelector('#contact-list')
);
React.render(
  <ShortList />,
  document.querySelector('#short-list')
);

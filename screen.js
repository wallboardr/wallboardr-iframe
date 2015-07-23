define(['require', './admin'], function (require) {
  'use strict';
  var plugin = require('./admin'),
      localScreen = function () {
        var self = this;
        return {
          getViewData: function () {
            return {
              url: self.props.data.url,
            };
          }
        };
      };

  localScreen.config = plugin.config;
  return localScreen;
});
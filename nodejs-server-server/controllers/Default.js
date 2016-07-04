'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.callsGET = function callsGET (req, res, next) {
  Default.callsGET(req.swagger.params, res, next);
};

module.exports.featuresChartsGET = function featuresChartsGET (req, res, next) {
  Default.featuresChartsGET(req.swagger.params, res, next);
};

module.exports.featuresReportsGET = function featuresReportsGET (req, res, next) {
  Default.featuresReportsGET(req.swagger.params, res, next);
};

module.exports.featuresWidgetGET = function featuresWidgetGET (req, res, next) {
  Default.featuresWidgetGET(req.swagger.params, res, next);
};

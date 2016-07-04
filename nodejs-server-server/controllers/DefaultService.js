'use strict';

exports.callsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * rptType (Double)
  * rptId (Double)
  * start (BigDecimal)
  * limit (BigDecimal)
  * sortBy (String)
  * sortType (String)
  * fromDate (String)
  * toDate (String)
  * duration (BigDecimal)
  * phone (String)
  * phone1 (String)
  * co (String)
  * ext (String)
  * pbxId (BigDecimal)
  * callSource (BigDecimal)
  * callType (BigDecimal)
  * direction (BigDecimal)
  * callerName (String)
  * did (String)
  * dnis (String)
  * acc (String)
  * ring (BigDecimal)
  * cost (BigDecimal)
  * group (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "single" : true,
  "name" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.featuresChartsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "single" : true,
  "name" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.featuresReportsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "single" : true,
  "name" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.featuresWidgetGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "single" : true,
  "name" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


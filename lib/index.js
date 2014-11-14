var util = require('util');

var _traceToString = function(traceLine) {
  var funcData = '(' + traceLine.getFunctionName() + ', '
    + traceLine.getMethodName() + ', '
    + traceLine.isConstructor() + ')';
  return traceLine.getFileName() + ' ('
    + traceLine.getLineNumber() + ', '
    + traceLine.getColumnNumber() + ') ' + funcData;
};

var ErrorX = function(code, message, error) {
  Error.call(this);
  this.code = code;
  this.message = message;
  if (error != null) {
    this.parentError = error;
  } else {
    this.parentError = null;
  }

  var orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function(_, stack) {
    return stack;
  };
  var err = new Error();
  Error.captureStackTrace(this, arguments.callee);
  var stack = err.stack;
  Error.prepareStackTrace = orig;
  this.stack = stack;
};
util.inherits(ErrorX, Error);

ErrorX.prototype.getTraceAsString = function() {
  var returnString = 'Error (' + this.code + '): ' + this.message;

  returnString += '\nStack:\n' + this.stack.map(function(traceLine) {
    return _traceToString(traceLine)
  }).join('\n');
  return returnString;
};

ErrorX.prototype.getCode = function() {
  return this.code;
};

ErrorX.prototype.getTrace = function() {
  return this.stack;
};

module.exports = ErrorX;

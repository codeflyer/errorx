require('should');

var ErrorX = require('../lib/index');

describe('Throw an error', function() {

  it('Simple error', function() {
    var error = new ErrorX(10, 'Message', new Error());
    console.log(error.getTraceAsString());
  })
});

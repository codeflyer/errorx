#ErrorX
Error Class Extension Module

ErrorX is a simple module for the error management.

##Quickstart

```javascript
var ErrorX = require('errorx');
try {
    throw new ErrorX(100, 'Error message', parentError);
} catch(e) {
    console.log(e.getTraceAsString());
}
```
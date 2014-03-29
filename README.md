# lib-stream-liquify

## install

```bash
npm install --save lib-stream-liquify
```

## usage

### liquify an object

```javascript
var liquify = require('lib-stream-liquify');
var obj = {
  name: 'Kim',
  age: 32
};
liquify(obj).pipe(process.stdout);
// {"name":"Kim","age":32}
```

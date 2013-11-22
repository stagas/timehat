
# timehat

monotonic-timestamp + hat = sortable unique ids

## Installing

`npm install timehat`

## Example

```js
var timehat = require('timehat');

// generate an id
var id = timehat();

console.log(id); // => 1427d622ee0-6275f867ebea2afd3c3ef32599cc1d93

// extract date from an id
console.log(timehat.toDate(id)); // => Thu Nov 21 2013 17:17:35 GMT-0800 (Pacific Standard Time (Mexico))
```

## API

### id = timehat([bits[, base]])

Generate a timestamped unique id.

### timehat.toDate(id[, base])

Extract date from `id`.

## License

MIT

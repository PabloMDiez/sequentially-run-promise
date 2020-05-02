# sequentially-run-promise
This tiny repo shows an example of how to run the same promise, `n` times, in serial.

It's a recursive function, and makes use of async/await for cleaner syntax.

The result would be an array with the resolved values of each round.


## Usage
It wasn't meant to be published as an NPM package, but it was such an easy win to do so 🤷

That being said, you can do:
```bash
$ yarn add sequentially-run-promise
```

And then, in your code
```javascript
  const sequentiallyRunPromise = require('sequentially-run-promise')

  const myPromise = roundsLeft => Promise.resolve(roundsLeft)
  const amountOfTimes = 5

  const results = sequentiallyRunPromise(myPromise, amountOfTimes)
    .then(results => console.log(results))
  // We'll get: [5, 4, 3, 2, 1]
```

## Params
`sequentiallyRunPromise` will pass on to the promise the amount of rounds left as the first param, and the current array of accumulated results in the second.
Ignore those params if you don't need them :)  

# sequentially-run-promise
This tiny repo shows an example of how to run the same promise, `n` times, in serial.

At this point it's not meant to be used as a module, but as an example of how to use it in your code.

This uses recursion, and makes use of async/await for cleaner syntax.

The response of this async function would be an array with the results of each round.

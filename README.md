# precise-interval
 A javascript setInterval time accurate solution.


## Installation 

```sh
npm i precise-interval
```

## Usage

```js
import { setPreciseInterval, clearPreciseInterval } from 'precise-interval';

const preciseInterval = setPreciseInterval(() => {
    console.log(Date.now());
}, 1000);

setTimeout(() => {
    clearPreciseInterval(preciseInterval);
    // same as `clearInterval`
}, 5000);
```
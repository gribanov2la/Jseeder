# Dataset

Allows you to generate data from any custom set.

## Basic usage

```javascript
import {generators} from 'jseeder';

generators.dataset({data: ['female', 'male']})
```


## Setting "weights"

```javascript
import {generators, collection} from 'jseeder';

generators.dataset({data: ['female', 'male'], weights: [100, 1]})
```

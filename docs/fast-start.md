# Fast start

```javascript
import {collection, generators} from 'jseeder';

let randomString1 = generators.string({size: 10}).get();
let randomString2 = generators.string().get();

let arrayWithRandom = collection({
    sex: generators.dataset({data: ['female', 'male']}),
    uuid: generators.uuid(),
    uuid2: generators.uuid()
}).setSize(10).process();
```

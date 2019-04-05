# Generators

**Generators** - main tool for generating data.

Simplest use:
```javascript
import {generators} from 'jseeder';

generators.uuid().get(); // '033d9d23-e2a7-4a3d-b29e-a3d51bce3cf6'
```


The result of `generators.uuid ()` will be an object that each time you call `get ()` will generate data:
```javascript
import {generators} from 'jseeder';

const uuidGenerator = generators.uuid(); 
uuidGenerator.get(); // '033d9d23-e2a7-4a3d-b29e-a3d51bce3cf6'
uuidGenerator.get(); // '6b22e349-cafb-4472-bce3-d19c8a811791'
uuidGenerator.get(); // '85e58265-6720-490d-b36c-fd93e5560803'
```

Generators can be configured, and each generator has its own set of settings. Settings accepted by the constructor,
can be changed using the `set {ParamName}` method:
```javascript
import {generators} from 'jseeder';

const stringGenerator = generators.string({size: 2, customCharset: 'qwerty'});

stringGenerator.get(); // qr
stringGenerator.setSize(5).setCustomCharset('abcdefg');
stringGenerator.get(); // addef
```_

# String

Generates a string with a random character set.

## Basic usage

```javascript
import {generators} from 'jseeder';

generators.string().get() // 'fh3mv8cd'
```


## Setting the line length

```javascript
import {generators} from 'jseeder';

generators.string({size: 20}).get() // 'v93ufbc6ffh3mv8cd7fn'
```

## Setting custom character set

```javascript
import {generators} from 'jseeder';

generators.string({customCharset: 'zzzz1'}).get() // 'z1zzzz1z'
```

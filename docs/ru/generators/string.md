# String

Генерирует строку со случайным набором символов.

## Базовое использование
```javascript
import {generators} from 'jseeder';

generators.string().get() // 'fh3mv8cd'
```


## Установка длины строки
```javascript
import {generators} from 'jseeder';

generators.string({size: 20}).get() // 'v93ufbc6ffh3mv8cd7fn'
```

## Установка кастомного набора символов
```javascript
import {generators} from 'jseeder';

generators.string({customCharset: 'zzzz1'}).get() // 'z1zzzz1z'
```

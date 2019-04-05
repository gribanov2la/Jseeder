# Генераторы

**Генераторы** - основной инструмент для генерации данных.

Простейшее использование:
```javascript
import {generators} from 'jseeder';

generators.uuid().get(); // '033d9d23-e2a7-4a3d-b29e-a3d51bce3cf6'
```

Результатом выполнения `generators.uuid()` будет объект, который при каждом вызове `get()` будет генерировать данные:
```javascript
import {generators} from 'jseeder';

const uuidGenerator = generators.uuid(); 
uuidGenerator.get(); // '033d9d23-e2a7-4a3d-b29e-a3d51bce3cf6'
uuidGenerator.get(); // '6b22e349-cafb-4472-bce3-d19c8a811791'
uuidGenerator.get(); // '85e58265-6720-490d-b36c-fd93e5560803'
```

Генераторы могут конфигурироваться, причем у каждого генератора свой набор настроек. Настройки, принимаемые конструктором,
можно изменить при помощи `set{ParamName}` метода:
```javascript
import {generators} from 'jseeder';

const stringGenerator = generators.string({size: 2, customCharset: 'qwerty'});

stringGenerator.get(); // qr
stringGenerator.setSize(5).setCustomCharset('abcdefg');
stringGenerator.get(); // addef
```

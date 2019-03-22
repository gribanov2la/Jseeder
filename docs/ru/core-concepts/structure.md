# Структура

**Структура** служит для генерации hash-объекта данных по исходному hash-объекту с помощью **генераторов**.

Пример использования структуры с uuid генератором:
```javascript
Jseeder.structure({
    uuid: Jseeder.types().uuid()
}).process()
```

```javascript
{
  uuid: 'da94adc9-6f83-4d4c-95c7-a5fc7eefdfaa'
}
```

Генераторы в структуре можно смешивать с простыми данными:
```javascript
Jseeder.structure({
    uuid: Jseeder.types().uuid(),
    key: 'value',
    key2: {
    	key: 'value'
    },
}).process()
```

```javascript
{
  uuid: 'da94adc9-6f83-4d4c-95c7-a5fc7eefdfaa',
  key: 'value',
  key2: {
    key: 'value'
  }
}
```



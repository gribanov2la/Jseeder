# Коллекция

**Коллекция** служит для генерации массива данных по hash-объекту с помощью **генераторов**.

Пример:
```javascript
Jseeder.collection({
    uuid: Jseeder.types().uuid()
}).setSize(2).process()
```

```javascript
[
    {uuid: '033d9d23-e2a7-4a3d-b29e-a3d51bce3cf6'},
    {uuid: '03e6cde0-5dea-4579-a9ba-802a685f9654'}
]
```

## Генерация данных на основе существующего массива

Может возникнуть потребность сгенерировать данные для уже существующего массива, для этого нужно воспользоваться методом
`setSourceArray`.

```javascript
const sourceArray = [{name: 'Mary'}, {name: 'Alex'}];

Jseeder.collection({
    uuid: Jseeder.types().uuid()
}).setSourceArray(sourceArray).process()
```

```javascript
[
    {name: 'Mary', uuid: '033d9d23-e2a7-4a3d-b29e-a3d51bce3cf6'},
    {name: 'Alex', uuid: '03e6cde0-5dea-4579-a9ba-802a685f9654'}
]
```

## Вложенные коллекции

Коллекции можно вкладывать в другие коллекции:
```javascript
Jseeder.types().uuid().generate()

Jseeder.collection({
    uuid: Jseeder.types().uuid(),
    my_children: Jseeder.collection({
        uuid: Jseeder.types().uuid(),
    }).setSize(2)
}).setSize(2).process()
```

```javascript
[
    {
    	uuid: '13fc25c6-b287-483d-b437-c2d2d86cae7d',
    	my_children: [
    		{uuid: '820a9a1d-5302-47bf-822a-7bee858eb24b'},
    		{uuid: '9b38c09a-b850-40c5-8e0a-1eb5a3586b80'}
    	]
    },
    {
    	uuid: '8e368a24-8065-4250-a017-c7bc1fb556c5',
    	my_children: [
            {uuid: '6b22e349-cafb-4472-bce3-d19c8a811791'},
            {uuid: '85e58265-6720-490d-b36c-fd93e5560803'}
    	]
    }
]
```

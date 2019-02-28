<img src='https://i.postimg.cc/ydVDM5Nx/1741087790-d075fd8f-3765-465e-ba3f-80326ea952e3.png' alt='Jseeder' aria-label='Jseeder' />


A tool for creating generated data arrays

## Install

```js
import Seeder from 'Seeder';
```

## Usage

Simple example:
```js
let data = Seeder.make({
	uuid: Seeder.types.string()
}).seed(2);

data === [
    {uuid: 'random_string1'},	
    {uuid: 'random_string2'},	
]
``` 

Mixing with the native object:
```js
let data = Seeder.make({
	uuid: Seeder.types.uuid(),
	comment: 'bla bla',
	subObject: {
		count: 1
	}
}).seed(10);
```

Filling an existing array:
```js
let data = Seeder.make({
	uuid: Seeder.types.uuid()
}).seedToArray([
	{dummy: 1},
	{dummy: 2, uuid: 'constant-uuid-2'}
]);

data === [
    {dummy: 1, uuid: 'random-uuid-1'},
    {dummy: 2, uuid: 'random-uuid-2'}
]
```

Using nested Seeder:
```js
let data = Seeder.make({
	uuid: Seeder.types.uuid(),
	subData: Seeder.makeSubSeeder({
		uuid2: Seeder.types.uuid()
	})
}).seed(10);
```

Linking values ​​through an identifier:
```js
let data = Seeder.make({
	uuid: Seeder.types.uuid({id: 'my_id'}),
	subData: Seeder.makeSubSeeder({
		uuid: Seeder.types.uuid({id: 'my_id'}),
		uuid2: Seeder.types.uuid()
	})
}).seed(1);

data === [{
    uuid: 'random-uuid',
    subData: {
        uuid: 'random-uuid',
        uuid2: 'random-uuid2'
    }
}]
```

## Seed types

**Seeder.types.uuid({id: String})** 
```
Seeder.types.uuid() => 5bf921d5-b26e-4244-ba19-4366b7a16d02 
```

**Seeder.types.string({id: String, size: Number, charset: String})** 
```
Seeder.types.string({size: 5}) => d8k69 
Seeder.types.string({size: 5, charset: 'ab'}) => abaab 
Seeder.types.string({size: 10, charset: '12345'}) => 1545341244 
```

**Seeder.types.range({id: String, range: Array})** 
```
Seeder.types.range({range: ['male', 'female']}) => 'male' || 'female' 
Seeder.types.range({range: [1, 2, 'sorry']}) => 1 || 2 ||'sorry' 
```

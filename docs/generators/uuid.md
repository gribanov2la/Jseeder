# Uuid

Generates a random uuid.

::: warning
Cryptographic resistance is absent
:::

## Basic usage
```javascript
import {generators} from 'jseeder';

generators.uuid().get() // '03e6cde0-5dea-4579-a9ba-802a685f9654'
```

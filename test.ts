import {collection, generators, setSeed} from './src/index';

setSeed(10);

generators.uuid().get(); // '820a9a1d-5302-47bf-822a-7bee858eb24b'
generators.uuid().get(); // '9b38c09a-b850-40c5-8e0a-1eb5a3586b80
generators.uuid().get(); // '6b22e349-cafb-4472-bce3-d19c8a811791'

setSeed(10);

generators.uuid().get(); // '820a9a1d-5302-47bf-822a-7bee858eb24b'
generators.uuid().get(); // '9b38c09a-b850-40c5-8e0a-1eb5a3586b80
generators.uuid().get(); // '6b22e349-cafb-4472-bce3-d19c8a811791'

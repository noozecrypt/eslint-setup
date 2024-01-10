// import _ from 'underscore'; // 'underscore' import is restricted from being used  - no-restricted-imports rule - eslint error!
import lodash from 'lodash';

let arr = ['dogs', 'whales', 'cats'];

// _.findIndex(arr, 'cats');
lodash.findIndex(arr, 'cats');
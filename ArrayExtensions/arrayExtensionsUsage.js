'use strict()';

require('./arrayExtensions');

let arr = [1, 2, 2, 3, 4];
console.log(arr.min()); // 1
console.log(arr.max()); // 4
console.log(arr.sum()); // 12
console.log(arr.product()); //48
console.log(arr.myFilter(1, 2, 6)); // [1, 2, 2]
console.log(arr.search(1, 2, 6)); // { '1': [ 0 ], '2': [ 1, 2 ], '6': [] }

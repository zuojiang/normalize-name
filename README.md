normalize-name
---

### Installation
```sh
$ npm i normalize-name -S
```

### Usage
```js
var normalizeName = require('normalize-name')

normalizeName('normalize-name') // normalize_name
normalizeName('README.md')  // README_md
normalizeName('3rd party') // _3rd_party
normalizeName('_a__b___c_') // a_b_c
```

### License

MIT

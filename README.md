# framwork

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
##更改用户权限管理模块 websanova
model/src/lib/untils.js
``` bash
function compare(one, two) {
var i, ii, key;
        if (isObject(one) && isObject(two) ) {
            for (key in one) {
                if (compare(one[key], two[key])) {
                    return true;
                }
            }
            return false;
        }

        one = toArray(one);
        two = toArray(two);

        if (one.constructor !== Array || two.constructor !== Array) {
            return false;
        }

        for (i = 0, ii = one.length; i < ii; i++) {
            if (two.indexOf(one[i]) >= 0) {
                return true;
            }
        }
        return false;
    }
```

# REPRODUCING THE BUG

1. `npm install` (It will build the leaf packages using lerna + vite)
2. `npm run storybook:start` (I set it up so that only the broken doc is loaded)
3. Try to open the Button docs page (or stories) => ERROR

```
ReferenceError: o is not defined
    at http://localhost:6006/packages/components/icons/dist/index.mjs:587:2
```

Somehow, docGen is trying to attach its `__docgenInfo` to undeclared variables.

For example if we focus on a single import in the mjs file generated:

```
// 1. Name of the export is "df" after compilation.
import {ToysProduct as df} from "/packages/components/icons/dist/icons/ToysProduct.mjs";

export {df as ToysProduct}; 

// 2. But here docgen tries to attach its data to "d" instead of "df"
d.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "ToysProduct",
    "props": {
        "fill": {
            "defaultValue": {
                "value": "\"currentColor\"",
                "computed": false
            },
            "required": false
        },
        "stroke": {
            "defaultValue": {
                "value": "\"none\"",
                "computed": false
            },
            "required": false
        }
    }
};
```

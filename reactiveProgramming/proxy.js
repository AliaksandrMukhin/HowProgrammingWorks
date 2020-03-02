const obj = {};

const objProxy = new Proxy(obj, {
    get(obj, key) {
        if (obj[key]) return obj[key];
        return '';
    },

    set(obj, key, value) {
        if (typeof value === 'function') {
            const expression = value;
            value = expression();
            obj[key] = { expression, value };
        } else obj[key] = value;
        return true;
    }
})

console.log('objProxy :', objProxy);
objProxy.x = 10;
objProxy.y = () => objProxy.x + 11;
console.dir(objProxy);
// { x: 10, y: { expression: [Function], value: 21 } }
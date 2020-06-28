// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultValue({
  x: 24,
  y: 42
}, 0)

console.log(position);

// Hidden properties

const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj)
      .filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver)
      ? obj[prop]
      : void 0
  })
}

const data = withHiddenProps({
  name: 'Andrii',
  age: 25,
  _uid: '213123' // Not visible
})

// Optimization
const IndexArray = new Proxy(Array, {
  construct(target, [argArray]) {
    const index = {};
    argArray.forEach(item => index[item.id] = item)

    return new Proxy(new target(...argArray), {
      get(array, prop) {
        switch (prop) {
          case 'push': return item => {
            index[item.id] = item
            array[prop].call(array, item)
          }
          case 'findById': return id => index[id]
          default: return array[prop]
        }
      }
    })
  }
})

const users = new IndexArray([
  { id: 12, name: 'Adnrii', job: 'FullStack' },
  { id: 45, name: 'Elena', job: 'Teacher' },
  { id: 74, name: 'Victor', job: 'Backend' },
  { id: 32, name: 'Vlad', job: 'FrontEnd' }
])
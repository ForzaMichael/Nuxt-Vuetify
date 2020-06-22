type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyExclude<T, K> = T extends K ? never : T
interface User {
  a: string
  b: number
  c: object
}
type MyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>
type MyOmitUser = MyOmit<User, 'a'>

const value = 1
interface MyThis {
  value: any
  [index: string]: any
}
function getValue(this: MyThis) {
  return this.value
}
// interface Foo Map<string,number>{

// }
const foo: Map<string, number> = new Map()
foo.set('bar', 1)

function getProperty<T extends Dictionary<string | number>, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key].toString()
}
interface Dictionary<T> {
  [index: string]: T
}
// function officialGetProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }
const y = 'dwa'
let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a')
// getProperty(x, 'm')

// type PersonPartial<T> = {
//   [P in keyof T]?: T[P]
// }

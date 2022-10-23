import { add, minus } from '../src/main';

describe('test add function', () => {
  test('expect add(60,40) equal 100', () => {
    expect(add(60, 40)).toEqual(100)
  })

  test('expect add(40,60) equal 150', () => {
    expect(add(40, 60)).toEqual(150)
  })
})

describe('test minus function', () => {
  test('expect minus(60,40) equal 20', () => {
    expect(minus(60, 40)).toEqual(20)
  })

  test('expect minus(10,50) equal 40', () => {
    expect(minus(10, 50)).toEqual(40)
  })
})
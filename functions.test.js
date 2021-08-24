const {returnTwo, greeting, add, multiply, subtract} = require('./functions')

test ('Should return 2', () => {
    expect(returnTwo(2)).toEqual(2)
})

test ('Should return Hello {name}', ()=>{
    expect(greeting('James')).toEqual('Hello, James.')

    expect(greeting('Jill')).toEqual('Hello, Jill.')
})

describe('Math functions', ()=>{

    test ('Should return {num1} + {num2}', ()=> {
        expect(add(1, 2)).toEqual(3)
        
        expect(add(5, 9)).toEqual(14)
        
        expect(add(`Red`, `Green`)).toContain(`RedGreen`)
    })
    
    test('Should return {num1} * {num2}', ()=> {
        expect(multiply(5, 5)).toEqual(25)
    })
    
    // test ('Should return {num1} / {num2}', ()=> {
        //     expect(divide(10, 2)).toEqual(5)
        
        //     // expect(add(5, 9)).toEqual(14)
        // })
        
        test ('Should return {num1} - {num2}', ()=> {
            expect(subtract(500, 200)).toEqual(300)
            
            // expect(subtract(`Coding`, `ing`)).toContain(`Cod`)
        })
    })
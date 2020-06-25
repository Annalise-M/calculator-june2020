import { add } from '../utils.js';

// import example from '../example.js';

const test = QUnit.test;

test('add - it should return 21 when passed 11 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 11;
    const num2 = 10;
    const expected = 21;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add- it should return 40 when passing 25 and 15', (expect) => {
    const booger1 = 25;
    const booger2 = 15;
    const expected = 40;

    const actual = add(booger1, booger2);

    expect.equal(actual, expected);
})
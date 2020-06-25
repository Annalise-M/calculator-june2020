import { subtract } from '../utils.js';

const test = QUnit.test;

test('sub - it should return 11 when passing 33 and 22', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yaKnow1 = 33;
    const yaKnow2 = 22;
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(yaKnow1, yaKnow2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

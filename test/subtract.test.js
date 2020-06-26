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

test('sub - it should return -1 when passing 14 and 15', (expect) => {
   
    const subStuff1 = 14;
    const subStuff2 = 15;
    const expected = -1;

    const actual = subtract(subStuff1, subStuff2);

    expect.equal(actual, expected);
});

test('sub - it should return 0 when passing 100 and 100', (expect) => {

    const wtf1 = 100;
    const wtf2 = 100;
    const expected = 0;

    const actual = subtract(wtf1, wtf2);
    
    expect.equal(actual, expected);
});
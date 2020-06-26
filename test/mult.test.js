import { multiply } from '../utils.js';

// import example from '../example.js';

const test = QUnit.test;

test('multiply - should return 110 when passing 10 and 11', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stuff1 = 11;
    const stuff2 = 10;
    const expected = 110;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(stuff1, stuff2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply- should return 45 when passing 9 and 5', (expect) => {
    const thing1 = 9;
    const thing2 = 5;
    const expected = 45;

    const actual = multiply(thing1, thing2);

    expect.equal(actual, expected);
});

test('multiply- should return -33 when passing -1 and 33', (expect) => {
    const yourFace1 = -1;
    const yourFace2 = 33;
    const expected = -33;

    const actaul = multiply(yourFace1, yourFace2);

    expect.equal(actaul, expected);
});
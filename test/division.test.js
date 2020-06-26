import { divided } from '../utils.js';

const test = QUnit.test;

test('divide- it should return 3 when passing 33 and 11', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yourMom1 = 33;
    const yourMom2 = 11;
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divided(yourMom1, yourMom2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide - it should return 8 when passing 24 and 3', (expect) => {

    const yourMan = 24;
    const myMan = 3;
    const expected = 8;

    const actual = divided(yourMan, myMan);

    expect.equal(actual, expected);
});

test('divide - it should return 1 when passing 8 and 8', (expect) => {

    const whatever1 = 8;
    const expected = 1;

    const actual = divided(whatever1, whatever1);

    expect.equal(actual, expected);
});


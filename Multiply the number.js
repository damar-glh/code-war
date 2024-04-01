const multiply =(number) => { return number * Math.pow (5, Math.abs(number).toString().length);}

describe("Basic Tests",() =>{
    Test.assertEquals(multiply(10),250);
    Test.assertEquals(multiply(5),25);
    Test.assertEquals(multiply(200),25000);
    Test.assertEquals(multiply(0),0);
    Test.assertEquals(multiply(-2),-10);
})
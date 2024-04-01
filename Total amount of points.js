function points(games) {
    let totalPoints = 0;
    for (const element of games) {
        const [x, y] = element.split(':').map(Number);
        if (x > y) {
            totalPoints += 3;
        } else if (x === y) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}

const points = games => games.reduce((total, game) => total + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0), 0);

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Total amount of points", function(){
  it("Sample Tests", function(){
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });
});
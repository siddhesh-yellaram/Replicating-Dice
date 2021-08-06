function RollAndDice() {
    var randomNo, countOne = 0, countTwo = 0, countThree = 0, countFour = 0, countFive = 0, countSix = 0;
    for (var i = 0; i < 10; i++) {
        randomNo = Math.ceil(Math.random() * 6);
        switch (randomNo) {
            case 1:
                countOne += 1;
                break;
            case 2:
                countTwo += 1;
                break;
            case 3:
                countThree += 1;
                break;
            case 4:
                countFour += 1;
                break;
            case 5:
                countFive += 1;
                break;
            case 6:
                countSix += 1;
                break;
        }
    }
    return [countOne, countTwo, countThree, countFour, countFive, countSix];
}

var DiceFreq = RollAndDice();
for (var i = 0; i < DiceFreq.length; i++) {
    console.log("\nFrequency of " + (i + 1) + " is " + DiceFreq[i]);
}
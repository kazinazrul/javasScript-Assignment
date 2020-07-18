// feetToMile
function feetToMile(feet){
    var mile = feet * 0.0001893939;
    return mile;
}
var result = feetToMile(5280);
console.log(result);

// woodCalculator
function woodCalculator(char, table, bad){
    var charWoodCount = char * 1;
    var tableWoodCount = table * 3;
    var badWoodCount = bad * 10;
    var totalWood = charWoodCount + tableWoodCount + badWoodCount;
    return totalWood;
}
var totalWoodResult = woodCalculator(1, 2, 1);
console.log(totalWoodResult);

// bickCalculator
function bickCalculator(firstSection, secondSection, thirdSection){
    var oneToTenFloor = firstSection * 1000 * 15;
    var elevenToTwentyFloor = secondSection * 1000 * 12;
    var twentyOneToUpFloor = thirdSection * 1000 * 10;
    var totalBick = oneToTenFloor + elevenToTwentyFloor +twentyOneToUpFloor;
    return totalBick;
}
var totalResult = bickCalculator(2, 1, 1);
console.log(totalResult);

// tinyFriend
function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if (currentName < smallest) {
            smallest = currentName;
        }
    }
    return smallest;
}
var smallWord = tinyFriend(['Rohim', 'Kazi Jamal', 'Mohammad Salauddin', 'Kazi']);
console.log(smallWord);

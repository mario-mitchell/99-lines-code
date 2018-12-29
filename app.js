let friends = ["Nathalie", "Benal", "Gabe", "David", "Javon"];

for (var i = 0; i < friends.length; i++) {

    console.log(friends[i]);
    for (var j = 99; j > 0; j--) {

        if (j == 1) {
            console.log(j + " Line of code on the wall " + j + " Line of code " + friends[i] + " STRIKES one down clears it all out no more lines of code on the wall");
        } else {
            console.log(j + " Lines of code on the wall " + j + " Lines of code " + friends[i] + " STRIKES one down clears it all out " + (j - 1) + " on the wall");
        }
    }
}

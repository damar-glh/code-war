//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
    //Code here
    let chris = 0;
    for (let i = 1; i <= n; i++) {
        chris += i;
    }
    let tomN = Math.floor(chris / 2);
    let tom = 0;
    for (let i = 1; i <= tomN; i++) {
        tom += i;
    }
    let catN = chris + tom;
    let cat = 0;
    for (let i = 0; i <= catN; i++) {
        cat += i;
    }
    return "Chris ate " + chris + " flies, Tom ate " + tom + " flies and Cat ate " + cat + " flies"
}

//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
    //Code here
    let chris = n * (n + 1) / 2;
    let tomN = Math.floor(chris / 2);
    let tom = tomN * (tomN + 1) / 2;
    let catN = chris + tom;
    let cat = catN * (catN + 1) / 2;
    return "Chris ate " + chris + " flies, Tom ate " + tom + " flies and Cat ate " + cat + " flies";
}
let eowynAttack = 50;
let witchKingAttack = 45;

if(eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.");
} else if(witchKingAttack > eowynAttack) {
    console.log("Witch King is stronger")
} else {
    console.log("They are the same strength.");
};

let eowynHealth = 100;
let eowynDefense = 0;

if(eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("Eowyn dies.");
} else {
    eowynHealth -= witchKingAttack
    console.log(`She is down to ${eowynHealth}.`);
};

let coinLandsHeads = false;

if(coinLandsHeads === true) {
    console.log("Witch King gets to run away.");
} else {
    console.log ("Witch King got stabbed in the face");
};

//for(let i = 0; i < 3; i++) {
//    if(eowynHealth > 0) {
//        eowynHealth = eowynHealth - witchKingAttack;
//        console.log(`Eowyn has ${eowynHealth}`);
//     } else {
//         console.log(`Eowyn dies.`);
//     };
//};

while(eowynHealth > 0) {
    eowynHealth -= witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} left.`);
    if(eowynHealth <= 0) {
        console.log("Eowyn has been slain.");
    };
};
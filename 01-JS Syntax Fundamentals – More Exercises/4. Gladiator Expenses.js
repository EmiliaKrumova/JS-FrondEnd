function solve(lostFights, helmet,sword, shield, armor){
    let helmetBrokes = Math.trunc(lostFights/2);
    let helmetCosts = helmetBrokes*helmet;
    let swordBrokes = Math.trunc(lostFights/3);
    let swordCosts = swordBrokes*sword;
    let shieldBrokes = Math.trunc(lostFights/6);
    let shieldCosts = shieldBrokes*shield;
    let armorBrokes = Math.trunc(lostFights/12);
    let armorCosts = armorBrokes*armor;
    let result = helmetCosts+swordCosts+shieldCosts+armorCosts;
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
solve(7,2,3, 4, 5)
solve(23, 12.50, 21.50, 40, 200)
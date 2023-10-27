class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        if (Math.random() < this.luck) {
            return true;
        } 
        else{
            return false;
        }
    }

    attackPokemon(ennemie){
        let degats = 0
        if (this.isLucky()) {
        degats = this.attack - ennemie.defense;
        }
        ennemie.hp = ennemie.hp - degats;
    }

}



let pokemon1 = new Pokemon("pikachu", 150, 50, 190, 0,6)
let pokemon2 = new Pokemon("carapuce", 130, 40, 200, 0,6)

let variable = 0
while(pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.attackPokemon(pokemon2);
    console.log("pokemon 2 a un hp de : " + pokemon2.hp
    + ", pokemon 2 a encaissé : " + (pokemon1.attack - pokemon2.defense));
    pokemon2.attackPokemon(pokemon1);
    console.log("pokemon 1 a un hp de : " + pokemon1.hp
    + ", pokemon 1 a encaissé : " + (pokemon2.attack - pokemon1.defense));
    variable ++
    if (variable => 50) {break}
}
    
    if(pokemon1.hp <= 0 && pokemon2.hp <= 0) {
        console.log("Pokemon is dead")}


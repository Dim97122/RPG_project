class Character {
  constructor(name, mana, attack, defense, lifePoints, status, exhausted) {
    this.name = name,
    this.mana = mana,
    this.attack = attack,
    this.lifePoints = lifePoints,
    this.status = "En jeu",
    this.exhausted = false
  }

  introduction = () => {
    console.log(`Bonjour combattant, fier de te rencontrer. Mon nom est ${this.name}.`);
  }

  rage = () => {
    this.attack = (this.attack + 25)
    console.log(`Attaque de ${this.name} atteint un niveau de ${this.attack} !`);
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.attack)
    this.exhausted = true
  }

  takeDamage = (value) => {
    this.lifePoints = (this.lifePoints - value)
  }

  takeAction = () => {
    var userClass = this.constructor.name
    console.log(`Tu es un ${userClass}. Tu peux donc lancer les attaques suivantes :`);
    if (userClass == "Assassin" ) {
      console.log(`NORM => -8PV à l'ennemi`);
      console.log(`SPEC => -7PV à l'adversaire; +7PV pour toi; -20MANA`);
    }
    else if (userClass == "Healer" ) {
      console.log(`NORM => -2PV à l'ennemi`);
      console.log(`SPEC => +8PV pour toi; -25MANA`);
    }
    else if (userClass == "Paladin" ) {
      console.log(`NORM => -3PV à l'ennemi`);
      console.log(`SPEC => -4PV à l'adversaire; +5PV pour toi; -40MANA`);
    }
    else if (userClass == "Berserker" ) {
      console.log(`NORM => -4PV à l'ennemi`);
      console.log(`SPEC => -1PV pour toi; +1PATAQ pour toi`);
    }
    else if (userClass == "Fighter" ) {
      console.log(`NORM => -4PV à l'ennemi`);
      console.log(`SPEC => -5PV pour toi; -20MANA`);
    }
    else {
    }

    let playerAttaq = prompt(`Que décides-tu ${this.name}`);
    let playerVictim = prompt(`Sur qui lances-tu cette attaque ${this.name}`);
  }
}

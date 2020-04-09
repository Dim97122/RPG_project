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

  takeDamage = (value) => {
    this.lifePoints = (this.lifePoints - value)
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.attack)
    console.log(`${victim.name} a perdu ${this.attack} PV`);
    this.exhausted = true
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

    console.log(`Liste des ennemis`);
    for (let i = 0; i< game.players.length; i++) {
      name = game.players[i].name
      console.log(`${name}`);
    };

    let playerVictim = prompt(`Sur qui veux-tu lancer ton attaque ${this.name} ?`);

    let playerAttaq = prompt(`Que décides-tu ${this.name}? NORM ou SPEC ?`);

    if (game.players.length > 5) {
      if (playerVictim == game.players[0].name) {
        playerVictim = game.players[0]
      }
      else if (playerVictim == "Carl") {
        playerVictim = game.players[1]
      }
      else if (playerVictim == "Moana") {
        playerVictim = game.players[2]
      }
      else if (playerVictim == "Grace") {
        playerVictim = game.players[3]
      }
      else if (playerVictim == "Ulder") {
        playerVictim = game.players[4]
      }
      else if (playerVictim == "Draven") {
        playerVictim = game.players[5]
      }
      else {
      }
    }
    else if (game.players.length = 5){
      if (playerVictim == "Carl") {
        playerVictim = game.players[0]
      }
      else if (playerVictim == "Moana") {
        playerVictim = game.players[1]
      }
      else if (playerVictim == "Grace") {
        playerVictim = game.players[2]
      }
      else if (playerVictim == "Ulder") {
        playerVictim = game.players[3]
      }
      else if (playerVictim == "Draven") {
        playerVictim = game.players[4]
      }
      else {
      }
    }
    else {
    }

    if (playerAttaq == "NORM") {
      this.dealDamage(playerVictim)
    }
    else if (playerAttaq == "SPEC" && this.constructor.name == "Assassin") {
      this.murder(playerVictim)
    }
    else if (playerAttaq == "SPEC" && this.constructor.name == "Healer") {
      this.healSort()
    }
    else if (playerAttaq == "SPEC" && this.constructor.name == "Paladin") {
      this.lighting(playerVictim)
    }
    else if (playerAttaq == "SPEC" && this.constructor.name == "Berserker") {
      this.berserk()
    }
    else if (playerAttaq == "SPEC" && this.constructor.name == "Fighter") {
      this.darkVision(playerVictim)
    }
    else {
    }
  }
}

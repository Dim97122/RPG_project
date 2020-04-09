class Game {
  constructor(players, turnLeft) {
    this.players = []
    this.turnLeft = 10
  }

  begin = (assassin, healer, paladin, berserker, fighter) => {
    let playerCreate = prompt("Voulez-vous créer un personnage ? OUI / NON");
    if (playerCreate == "OUI") {
      let playerName = prompt("Son nom ?");
      if (playerName == "" || playerName == undefined) {
        playerName = prompt("Son nom ?");
      }
      else {
        let playerRace = prompt("Quelle type de perso vous ferait plaisir ? ASSASSIN / HEALER / PALADIN / BERSERKER / FIGHTER");
        if (playerRace == "" || playerRace == undefined) {
          playerRace = prompt("Quelle type de perso vous ferait plaisir ? ASSASSIN / HEALER / PALADIN / BERSERKER / FIGHTER");
        }
        else if (playerRace == "ASSASSIN") {
          let player = new Assassin()
          player.name = playerName
          this.players.push(player)
          console.log(`${player.name} l'Assassin rejoint la partie`);
        }
        else if (playerRace == "HEALER") {
          let player = new Healer(playerName)
          player.name = playerName
          this.players.push(player)
          console.log(`${player.name} le Guérisseur rejoint la partie`);
        }
        else if (playerRace == "PALADIN") {
          let player = new Paladin(playerName)
          player.name = playerName
          this.players.push(player)
          console.log(`${player.name} le Paladin rejoint la partie`);
        }
        else if (playerRace == "FIGHTER") {
          let player = new Fighter(playerName)
          player.name = playerName
          this.players.push(player)
          console.log(`${player.name} le Combattant rejoint la partie`);
        }
        else if (playerRace == "BERSERKER") {
          let player = new Berserker(playerName)
          player.name = playerName
          this.players.push(player)
          console.log(`${player.name} le Combattant rejoint la partie`);
        }
      }
    }
    assassin = new Assassin
    healer = new Healer
    paladin = new Paladin
    berserker = new Berserker
    fighter = new Fighter
    this.players.push(assassin, healer, fighter, paladin, berserker)
    console.log(`${assassin.name} l'Assassin: Je suis discret comme une ombre ....`);
    console.log(`${healer.name} la Guérisseuse: Qui veut de l'Hydroxychloroquine ?`);
    console.log(`${fighter.name} la Combattante: Coup de pied retourné dans ta face !`);
    console.log(`${paladin.name} le Paladin: Au nom du Père, du Fils et du Saint-Esprit, à la guerre !!!`);
    console.log(`${berserker.name} le Berserker: BWAAAHHHHHHH !!!!`);
    console.log(`LES COMBATTANTS SONT TOUS DAND L'ARENE ! QUE LE COMBAT COMMENCE !!!!!!`);
  }

  randomPlayer = () => {
    // let randomPlayer = this.players[Math.floor(Math.random() * this.players.length)];
    let playersUp = this.players.filter(player => player.exhausted == false);
    let player = playersUp[Math.floor(Math.random() * playersUp.length)];
    console.log(`${player.name}, à ton tour de jouer !`);
    player.takeAction()
  }

  watchStats = () => {
    let turns = this.turnLeft
    console.log(`Il reste ${turns} tours à jouer `);
    for (let i = 0; i< this.players.length; i++) {
      name = this.players[i].name
      status = this.players[i].status
      console.log(`${name} est ${status}`);
    };
  }

  skipTurn = () => {
    this.turnLeft = (this.turnLeft - 1)
    console.log(`Il vous reste ${this.turnLeft} tours à jouer`);
  }

  startGame = () => {
    console.log(`Tour ${this.turnLeft - (this.turnLeft - 1)}`);
    for (let i = 0; i< this.players.length; i++) {
      this.watchStats()
      this.randomPlayer()
    }
  }
}

class Berserker extends Character {
  constructor(name, mana, attack, defense, lifePoints, status, exhausted) {
    super(name, mana, attack, defense, lifePoints, status, exhausted);
    this.name = "Draven",
    this.mana = 0,
    this.attack = 4,
    this.lifePoints = 8
  }

  berserk = () => {
    this.attack = (this.attack + 1)
    this.lifePoints = (this.lifePoints - 1)
    this.exhausted = true
  }

  
}

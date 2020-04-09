class Healer extends Character {
  constructor(name, mana, attack, defense, lifePoints, status, exhausted) {
    super(name, mana, attack, defense, lifePoints, status, exhausted);
    this.name = "Moana",
    this.mana = 200,
    this.attack = 2,
    this.lifePoints = 8
  }

  healSort = () => {
    this.mana = (this.mana - 25)
    this.lifePoints = (this.lifePoints + 8)
    this.exhausted = true
  }  
}

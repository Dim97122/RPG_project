class Assassin extends Character {
  constructor(name, mana, attack, defense, lifePoints, status, exhausted) {
    super(name, mana, attack, defense, lifePoints, status, exhausted);
    this.name = "Carl",
    this.mana = 20,
    this.attack = 8,
    this.lifePoints = 6
  }

  murder = (victim) => {
    this.mana = (this.mana - 20)
    victim.takeDamage(7)
    this.exhausted = true
  }
}

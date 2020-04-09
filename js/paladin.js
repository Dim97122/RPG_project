class Paladin extends Character {
  constructor(name, mana, attack, defense, lifePoints, status) {
    super(name, mana, attack, defense, lifePoints);
    this.name = "Ulder",
    this.mana = 160,
    this.attack = 3,
    this.lifePoints = 16,
    this.status = "en jeu"
  }

  lighting = (victim) => {
    this.mana = (this.mana - 40)
    this.lifePoints = (this.lifePoints + 5)
    victim.takeDamage(4)
  }
}

class Fighter extends Character {
  constructor(name, mana, attack, defense, lifePoints, status, exhausted) {
    super(name, mana, attack, defense, lifePoints, status, exhausted);
    this.name = "Grace",
    this.mana = 40,
    this.attack = 4,
    this.lifePoints = 12
  }

  darkVision = (victim) => {
    this.mana = (this.mana - 20)
    victim.takeDamage(5)
    this.exhausted = true
  }  
}

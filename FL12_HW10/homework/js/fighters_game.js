class Fighter {
  constructor(properties) {
    let name = properties.name,
      damage = properties.damage,
      hp = properties.hp,
      strength = properties.strength,
      agility = properties.agility,
      wins = 0,
      losses = 0,
      currentHp = hp;

    this.getName = function() {
      return name;
    };
    this.getDamage = function() {
      return damage;
    };
    this.getStrenght = function() {
      return strength;
    };
    this.getAgility = function() {
      return agility;
    };
    this.getHealth = function() {
      return hp;
    };
    this.attack = function(defender) {
      const MAX_SUCCESS = 100;
      let randomSuccess = Math.floor(Math.random() * (MAX_SUCCESS + 1));
      let attackSuccess = MAX_SUCCESS - (strength + agility);
      if (randomSuccess <= attackSuccess) {
        defender.dealDamage(this.getDamage());
        console.log(
          `${this.getName()} makes ${this.getDamage()} to ${defender.getName()}`
        );
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    };
    this.logCombatHistory = function() {
      console.log(`Name : ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
    };
    this.heal = function(healPt) {
      if (hp + healPt > currentHp) {
        hp = currentHp;
      } else {
        hp += healPt;
      }
    };
    this.dealDamage = function(damage) {
      if (hp <= 0) {
        hp = 0;
      } else {
        hp -= damage;
      }
    };
    this.addWins = function() {
      return wins++;
    };
    this.addLoss = function() {
      return losses++;
    };
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
  } else {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      fighter2.attack(fighter1);
    }
    if (!fighter1.getHealth()) {
      fighter2.addWins();
      fighter1.addLoss();
      console.log(`${fighter2.getName()} has won!`);
    } else {
      fighter1.addWins();
      fighter2.addLoss();
      console.log(`${fighter1.getName()} has won!`);
    }
  }
}

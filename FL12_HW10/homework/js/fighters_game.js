const Fighter = class Fighter{
    constructor({name, damage, strength, agility, health}){
        this.name = name;
        this.damage = damage;
        this.strength = strength;
        this.agility = agility;
        this.health = health;
        this.wins = 0;
        this.loses = 0;
    }
    getName(){
        return this.name;
    }
    getDamage(){
        return this.damage;
    }
    getStrength(){
        return this.strength;
    }
    getAgility(){
        return this.agility;
    }
    getHealth(){
        return this.health;
    }
    attack(defender){
        let precision = 100 - (defender.getStrength() + defender.getAgility());
        if( Math.floor( Math.random() * 100) <= precision ){
          defender.dealDamage(this.getDamage());
          console.log(`${this.name} makes ${this.damage} damage to ${defender.name}`);
        }else{
          console.log(`${this.name} attack missed`);
        }
    }
    logCombatHistory(){
        return console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.loses}`);
    }
    heal(hp){
        let max_hp = 100;
        let healed_hp = hp + this.health;
        healed_hp<=max_hp?this.health+=hp:max_hp;
        console.log(`${this.name} is healed and currently has ${this.health} health points`);
    }
    dealDamage(damage){
        this.health = this.health - damage<0?0:this.health - damage;
    }
    addWin(){
        return this.wins++;
    }
    addLoss(){
        return this.loses++;
    }  
}
function battle(fighter1, fighter2){
	if(fighter1.health === 0){
		console.log(`${fighter1.name} is dead and can't fight`);
	}else if(fighter2.health === 0){
		console.log(`${fighter2.name} is dead and can't fight`);
	}else{
        while (fighter1.health>0&&fighter2.health>0){
            fighter1.attack(fighter2);
            if(fighter2.health === 0){
                console.log(`${fighter1.name} has won!`);
                fighter1.addWin();
                fighter2.addLoss();
                break;
            }
            if(fighter1.health === 0){
                console.log(`${fighter2.name} has won!`);
                fighter2.addWin();
                fighter1.addLoss();
                break;
            }
        }
    }
}
const fighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, health: 100});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, health: 90});
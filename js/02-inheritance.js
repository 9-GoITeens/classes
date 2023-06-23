// /*
//  * Наслідування
//  *  - extends
//  *  - super()
//  */

class Hero {
    constructor({ name, xp }) {
        this.name = name;
        this.xp = xp;
    }
    gainXp(amaund) {
        console.log(`${this.name} отримує ${this.xp}`);
        this.xp += amaund;
    }
}

class Warrionr extends Hero {
    constructor({ weapon, ...resProps } = {}) {
        super(resProps);
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} атакує використовуючи ${this.weapon}`);
    }
}

const mango = new Warrionr({ name: 'mango', xp: 1000, weapon: 'алебардо' });
console.log(mango);

mango.attack();

mango.gainXp(2000);
// console.log(mango);

class Mage extends Hero {
    constructor({ spells, ...resProps }) {
        super(resProps);
        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} щось він там кастує `);
    }
}

const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
console.log(poly);
poly.cast();
poly.gainXp(200);
console.log(poly);

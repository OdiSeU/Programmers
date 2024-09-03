// https://school.programmers.co.kr/learn/courses/30/lessons/250137

function User(maxHp) {
    let hp = maxHp;

    this.heal = (x) => {
        return (hp = Math.min(maxHp, hp + x));
    };

    this.damage = (x) => {
        hp -= x;
        return hp <= 0 ? -1 : hp;
    };
}

function Bandage([t, x, y]) {
    let combo = 0;

    this.now = () => {
        if (++combo === t) {
            combo = 0;
            return x + y;
        }
        return x;
    };

    this.reset = () => {
        combo = 0;
    };
}

function Attack(attacks) {
    let idx = 0;

    this.now = (t) => {
        if (idx >= attacks.length) {
            return -1;
        }
        if (attacks[idx][0] !== t) {
            return 0;
        }
        return attacks[idx][1];
    };
    this.next = () => {
        idx++;
    };
}

function solution(bandage, health, attacks) {
    const band = new Bandage(bandage);
    const user = new User(health);
    const attack = new Attack(attacks);

    let time = 0,
        hp = health;
    while (attack.now(++time) >= 0) {
        const damage = attack.now(time);

        if (!damage) {
            hp = user.heal(band.now());
            continue;
        }
        hp = user.damage(damage);
        if (hp < 0) {
            return -1;
        }
        attack.next();
        band.reset();
    }

    return hp;
}

export function createMap() {
    function addNormal(map) {
        const normal = new Map();
        addHalf(['Rock', 'Steel'], normal);
        normal.set('Ghost', 0);
        map.set('Normal', normal);
    }
    function addFire(map) {
        const fire = new Map();
        addHalf(['Fire', 'Water', 'Rock', 'Dragon'], fire);
        addDouble(['Grass', 'Ice', 'Bug', 'Steel'], fire);
        map.set('Fire', fire);
    }
    function addWater(map) {
        const water = new Map();
        addDouble(['Fire', 'Ground', 'Rock'], water);
        addHalf(['Water', 'Grass', 'Dragon'], water);
        map.set('Water', water);
    }
    function addElectric(map) {
        const electric = new Map();
        addDouble(['Water', 'Flying'], electric);
        addHalf(['Electric', 'Grass', 'Dragon'], electric);
        electric.set('Ground', 0);
        map.set('Electric', electric);
    }
    function addGrass(map) {
        const grass = new Map();
        addHalf(['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'], grass);
        addDouble(['Water', 'Ground', 'Rock'], grass);
        map.set('Grass', grass);
    }
    function addIce(map) {
        const ice = new Map();
        addHalf(['Fire', 'Water', 'Ice', 'Steel'], ice);
        addDouble(['Grass', 'Ground', 'Flying', 'Dragon'], ice);
        map.set('Ice', ice);
    }
    function addFighting(map) {
        const fighting = new Map();
        addDouble(['Normal', 'Ice', 'Rock', 'Dark', 'Steel'], fighting);
        addHalf(['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'], fighting);
        fighting.set('Ghost', 0);
        map.set('Fighting', fighting);
    }
    function addPoison(map) {
        const poison = new Map();
        addHalf(['Poison', 'Ground', 'Rock', 'Ghost'], poison);
        addDouble(['Grass', 'Fairy'], poison);
        poison.set('Steel', 0);
        map.set('Poison', poison);
    }
    function addGround(map) {
        const ground = new Map();
        addHalf(['Grass', 'Bug'], ground);
        addDouble(['Fire', 'Electric', 'Poison', 'Rock', 'Steel'], ground);
        ground.set('Flying', 0);
        map.set('Ground', ground);
    }
    function addFlying(map) {
        const flying = new Map();
        addHalf(['Electric', 'Rock', 'Steel'], flying);
        addDouble(['Grass', 'Fighting', 'Bug'], flying);
        map.set('Flying', flying);
    }
    function addPsychic(map) {
        const psychic = new Map();
        addHalf(['Psychic', 'Steel'], psychic);
        addDouble(['Fighting', 'Poison'], psychic);
        psychic.set('Dark', 0);
        map.set('Psychic', psychic);
    }
    function addBug(map) {
        const bug = new Map();
        addHalf(['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'], bug);
        addDouble(['Grass', 'Psychic', 'Dark'], bug);
        map.set('Bug', bug);
    }
    function addRock(map) {
        const rock = new Map();
        addDouble(['Fire', 'Ice', 'Flying', 'Bug'], rock);
        addHalf(['Fighting', 'Ground', 'Steel'], rock);
        map.set('Rock', rock);
    }
    function addGhost(map) {
        const ghost = new Map();
        ghost.set('Normal', 0);
        addHalf(['Dark'], ghost);
        addDouble(['Ghost', 'Psychic'], ghost);
        map.set('Ghost', ghost);
    }
    function addDragon(map) {
        const dragon = new Map();
        addDouble(['Dragon'], dragon);
        addHalf(['Steel'], dragon);
        dragon.set('Fairy', 0);
        map.set('Dragon', dragon);
    }
    function addDark(map) {
        const dark = new Map();
        addHalf(['Fighting', 'Dragon', 'Fairy'], dark);
        addDouble(['Psychic', 'Ghost'], dark);
        map.set('Dark', dark);
    }
    function addSteel(map) {
        const steel = new Map();
        addHalf(['Fire', 'Water', 'Electric', 'Steel'], steel);
        addDouble(['Ice', 'Fairy'], steel);
        map.set('Steel', steel);
    }
    function addFairy(map) {
        const fairy = new Map();
        addDouble(['Fighting', 'Dragon', 'Dark'], fairy);
        addHalf(['Fire', 'Poison', 'Steel'], fairy);
        map.set('Fairy', fairy);
    }
    function addAll() {
        const map = new Map();
        addNormal(map);
        addFire(map);
        addWater(map);
        addElectric(map);
        addGrass(map);
        addIce(map);
        addFighting(map);
        addPoison(map);
        addGround(map);
        addFlying(map);
        addPsychic(map);
        addBug(map);
        addRock(map);
        addGhost(map);
        addDragon(map);
        addDark(map);
        addSteel(map);
        addFairy(map);
        return map;
    }
    function addHalf(listOfHalfEffective, map) {
        for (const item of listOfHalfEffective) {
            map.set(item, 0.5);
        }
    }
    function addDouble(listOfDoubleEffective, map) {
        for (const item of listOfDoubleEffective) {
            map.set(item, 2);
        }
    }

    return addAll();
}
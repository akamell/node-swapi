class AbstractPeople {

    constructor(id) {
        if (this.constructor == AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.id = id;
    }

    async init(config = {}) {
        if (config == null) return;
        const { 
            name = '',
            mass = '',
            height = 0,
            homeworld_id = '',
            homeworld_name = ''
        } = config;
        this.name = name;
        this.mass = mass;
        this.height = height;
        this.homeworldId = homeworld_id;
        this.homeworldName = homeworld_name;
    }

    getId() {
       return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworlId() {
        return this.homeworlId;
    }

    getWeightOnPlanet(planetId){
        throw new Error('To be implemented');
    }
}

module.exports = AbstractPeople;
class AbstractPeople {

    constructor(id) {
        if (this.constructor == AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.id = id;
    }

    async init(config = {}) {
        this.name = config?.name;
        this.mass = config?.mass;
        this.height = config?.height;
        this.homeworlId = config?.homeworld_id;
        this.homeworldName = config?.homeworld_name;
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
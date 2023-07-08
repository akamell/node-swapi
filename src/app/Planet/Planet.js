module.exports = class Planet {
    constructor(id) {
        this.id = id;
    }

    async init(config = {}) {
        const { name = '', gravity = '' } = config;
        this.name = name;
        this.gravity = gravity;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getGravity() {
        return this.gravity;
    }
}
const AbstractPeople = require('./abstractPeople');

class WookieePeople extends AbstractPeople {
    constructor(id){
        // throw new Error("To be implemented");
        super(id);
    }
}

module.exports = WookieePeople;
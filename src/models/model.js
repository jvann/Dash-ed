const { Model } = require('objection');

class BaseModel extends Model {
    static createOne({ attributes, trx }) {
        return this.query(trx).insertGraphAndFetch(attributes);
    }
}

module.exports = BaseModel;
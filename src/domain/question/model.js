const BaseModel = require('./../../models/model');

class Question extends BaseModel {
    static get tableName() {
        return 'questions';
    }
}

module.exports = Question;

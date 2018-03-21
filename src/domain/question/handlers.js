function createQuestion({ models, params }) {
    const { Question } = models;
    const { newQuestion } = params;

    console.log('newQuestion', newQuestion.value);
    const question = {
        kind: newQuestion.value.kind,
        description: newQuestion.value.description
    };
    return Question.createOne({ attributes: question });
};

module.exports = {
    createQuestion
};
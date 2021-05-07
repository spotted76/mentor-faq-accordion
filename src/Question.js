
export default class Question {

    constructor(listItem) {
        this.question = listItem.querySelector('.qa');
        console.log(this.question);
    }

    equals(question) {
        return this.question === question;
    }

    toggleExpanded() {
        this.question.classList.toggle('expanded');
    }

    isExpanded() {
        return this.question.classList.contains('expanded');
    }
}
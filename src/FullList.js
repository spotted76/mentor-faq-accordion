
import Question from './Question.js';


export default class FullList {
    
    constructor(ulElement) {

        this.ul = ulElement;
        this.questions = [];

    }

    initialize() {

        this.ul.addEventListener('click', (evt) => {
            this.listClicked(evt);    
        });

        const liElements = this.ul.querySelectorAll('li');
        for(let x = 0; x < liElements.length; x++) {
            this.questions.push(new Question(liElements[x]));
        }
    }

    listClicked(evt) {
        console.log('list clicked');
        const target = evt.target;

        //Make sure it's not the question, want to ignore this
        if ( target.getAttribute('class') != 'answer') {
            const parentQuestion = target.closest('.qa');

            // first, find the target question
            let clickedQuestion;

            // First, collapse anything that is expanded 
            for(let x = 0; x < this.questions.length; x++) {
               if (this.questions[x].equals(parentQuestion)) {
                   clickedQuestion = this.questions[x];
               }
            }

            if ( clickedQuestion ) {
                //If it's already expanded, close it
                if ( clickedQuestion.isExpanded() ) {
                    clickedQuestion.toggleExpanded();
                }
                else {
                    //Close all the others, and open this one
                    for(let x = 0; x < this.questions.length; x++) {
                        if (this.questions[x].isExpanded()) {
                            this.questions[x].toggleExpanded();
                            break;
                        }
                     }
    
                    clickedQuestion.toggleExpanded();
                }
            } 

        }
        
    }

}

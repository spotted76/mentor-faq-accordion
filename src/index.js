
import FullList from './FullList.js';


document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    
    const ul = document.querySelector('ul');

    const questionList = new FullList(ul);
    questionList.initialize();

});
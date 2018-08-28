


'use strict';

//-------------- "Task 1/8"-----------------------


document.addEventListener('DOMContentLoaded', () => {
    const noteEditor = document.querySelector('.js-note-editor');
    const input = noteEditor.querySelector('input');
    const noteList = document.querySelector('.note-list');


    noteEditor.addEventListener('submit', handleSubmit );
    noteList.addEventListener('click', handlNoteListClick);
    
    function handleSubmit(evt) {
        evt.preventDefault();
    
        const text = input.value;
        
        const markup = createNotemarkup(text);
        //console.log(markup);
    
        
        noteList.insertAdjacentHTML('afterbegin', markup);
    
        noteEditor.reset(); // тоже самое this.reset
    }

});



function handlNoteListClick(evt){
//console.log(evt);
const target = evt.target;
const nodeName = target.nodeName;
const action = target.dataset.action;


if(nodeName !== 'BUTTON' || action !== 'delete-note' ) return; {
//console.log('В точку!!!')

//const parent = evt.target.parentNode;
const parent = target.closest('.note');

parent.remove();

 }
}




function createNotemarkup(text) {
    return `
    <li class="note">
      <p>${text}</p>
      <div class="actions">
        <button data-action="delete-note">Delete</button>
        <button data-action="edit-note">Edit</button>
      </div>
    </li>`;
}
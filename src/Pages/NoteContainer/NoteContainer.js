import React from 'react';
import Note from '../Note/Note';
import "./NoteContainer.css"
const NoteContainer = (props) => {
   
    const reverArray = (arr) => {
        const array = [];
    
        for (let i = arr.length - 1; i >= 0; --i) {
          array.push(arr[i]);
        }
    
        return array;
      };
    
      const notes = reverArray(props.notes);
    

    return (
        <div className='note-container '>
        <h2 className='mt-2 text-gray-700'>Keep Notes :</h2>
        <div className='note-container_notes'>
        {
          notes?.length> 0 ?  
           notes.map(item=><Note key={item.id} note={item}
            deleteNote={props.deleteNote}
           />

        ):<h2 className='text-red-500 font-bold'>No notes present ...!</h2>}
          
            
           
            </div>
        </div>
    );
};

export default NoteContainer;
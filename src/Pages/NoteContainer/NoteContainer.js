import React from 'react';
import Note from '../Note/Note';
import "./NoteContainer.css"
const NoteContainer = () => {
    return (
        <div className='note-container'>
        <h2>Keep Notes</h2>
        <div className='note-container_notes'>
          
            <Note note={{text:"aosfsgvbh",time:"4:32PM",color:"cyan"}}></Note>
            <Note note={{text:"aosfsgvbh",time:"4:32PM",color:"cyan"}}></Note>
            <Note note={{text:"aosfsgvbh",time:"4:32PM",color:"cyan"}}></Note>
            <Note note={{text:"aosfsgvbh",time:"4:32PM",color:"cyan"}}></Note>
            <Note note={{text:"aosfsgvbh",time:"4:32PM",color:"cyan"}}></Note>
            <Note note={{text:"aosfsgvbh",time:"4:32PM",color:"cyan"}}></Note>
            </div>
        </div>
    );
};

export default NoteContainer;
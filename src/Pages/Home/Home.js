import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { BsBookmarkCheck } from "react-icons/bs";
import NoteContainer from "../NoteContainer/NoteContainer";
import NoteSide from "../Note/NoteSide/NoteSide";
const Home = ({ video }) => {
  const playerRef = useRef(null);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="justify-center  mx-12 mt-8 ">
     
     

      <ReactPlayer
        width="100%"
        ref={playerRef}
        url={video?.embed}
        controls={true}
      />

      <div className="flex justify-between bg-blue-600 py-4">
        <p className=" text-lg font-semibold text-black pl-4">
          {video?.id} Video-Title: {video?.title}
        </p>
        <p className="flex pt-2 px-4  font-semibold text-white cursor-pointer">
          <BsBookmarkCheck className="mt-1  "></BsBookmarkCheck> BookMark
        </p>
      </div>

      {/* <button className={`hover:text-gray-100 bg-gradient-to-r rounded px-4 py-2 mt-2 from-emerald-500 to-lime-500 text-white flex`}
><GrNotes className='mt-1 mr-2'></GrNotes>Keep Notes </button> */}

      <div className="flex gap-4 p-6">
        <NoteSide addNote={addNote}></NoteSide>
        <NoteContainer deleteNote={deleteNote} notes={notes}></NoteContainer>
      </div>
    </div>
  );
};

export default Home;

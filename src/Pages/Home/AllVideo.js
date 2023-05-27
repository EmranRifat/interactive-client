import React, { useRef} from 'react';
import ReactPlayer from 'react-player';
import { BsBookmarkCheck } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import NoteContainer from '../NoteContainer/NoteContainer';
import NoteSide from '../Note/NoteSide/NoteSide';

const AllVideo = ({video}) => {
    const playerRef = useRef(null);

    return (
        <div className='justify-center mt-4 mx-12  '>
           {/* <video width="500" height="500" controls >
      <source src={video.embed} type="video/mp4"/>
     </video> */}
     

 <ReactPlayer    width="100%" ref={playerRef} url={video.embed} controls={true} />


<div className='flex justify-between bg-blue-600 py-4'>
<p className=' text-lg font-semibold text-black pl-4'>{video.id}  Video-Title: {video.title}</p>
<p className='flex pt-2 px-4  font-semibold text-white cursor-pointer'><BsBookmarkCheck className='mt-1  '></BsBookmarkCheck> BookMark</p>
</div>


{/* <button className={`hover:text-gray-100 bg-gradient-to-r rounded px-4 py-2 mt-2 from-emerald-500 to-lime-500 text-white flex`}
    ><GrNotes className='mt-1 mr-2'></GrNotes>Keep Notes </button> */}


    <div className='flex gap-4 p-6'>
    <NoteSide></NoteSide>
    <NoteContainer></NoteContainer>

    </div>




        </div>
    );
};

export default AllVideo;
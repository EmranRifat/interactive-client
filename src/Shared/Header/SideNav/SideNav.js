import React, { useEffect, useState } from "react";
import LeftNav from "./LeftNev";
import { Line } from "rc-progress";

const SideNav = () => {
  const [categories, setCategories] = useState([]);
  const [percent,setPercent]=useState(0)

  useEffect(() => {
    fetch("http://localhost:5000/category")
    .then((res) =>res.json()
    .then((data) => setCategories(data))
    );
  }, []);
  return (
    <div>
      <p className="font-bold text-blue-500 text-center   my-4 ">
        Learning Modules
      </p>
      <div className="space-y-2 pl-2 mt-4">
    
      
        {
                categories.map(category=><LeftNav setPercent={setPercent} percent={percent} key={category.id} category={category}></LeftNav>)
            }
            <div className="pt-4">
            <>

<p><small className="text-gray-500">Course progress</small></p>
<Line percent={percent} strokeWidth={4} strokeColor="blue" trailColor='lightblue' trailWidth={4} className='mt-4'/>
{percent}%

</>
            </div>

     
      </div>
    </div>
  );
};

export default SideNav;

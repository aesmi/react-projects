import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
//TODO: Add animation
const Question = ({ title, info }) => {
   //we set a boolean for this to toggle
   const [showInfo, setShowInfo] = useState(false);
  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=> setShowInfo(!showInfo)}>
        {/*toggles our icon*/}
        {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}
      </button>
    </header>
    {showInfo && <p>{info}</p>}
  </article>;
};

export default Question;

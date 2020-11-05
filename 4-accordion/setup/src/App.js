import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  //set it as our array
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className="container">
      <h3>Questions and Answers</h3>
      <section className="info">
        {
          questions.map((question)=>{
            //we use spread operator to spread the rest of our data as props
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
    </div>
  </main>;
}

export default App;

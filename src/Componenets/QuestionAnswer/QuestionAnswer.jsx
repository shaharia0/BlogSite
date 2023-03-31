import React from 'react';
import './QuestionAnswer.css'
const QuestionAnswer = () => {
  return (
    <div className='questionAnswer'>
      <h1>Props vs state</h1>
      <p>Ans: In React props means Properties. props work like functional arguments which pass data from one component to another component. <br />
       State needs initial value and then it manage data within components. data can be modified in the components but can not accessed from outside of components. 
      state is different from props.Because props can not changed but the value of state component can be changed
      </p>
       <h1>How does useState work?</h1>
    </div>
  );
};
import './QuestionAnswer.css'
export default QuestionAnswer;
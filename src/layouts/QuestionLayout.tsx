import { FC } from "react";
import { Outlet } from "react-router-dom";
const QuestionLayout: FC = () => {
  return (
   <div>
     <div>QuestionLayout</div>
      <div>
        <Outlet></Outlet>
      </div>
   </div>
   
  )
};

export default QuestionLayout
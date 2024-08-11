import { FC } from "react";
import { Outlet } from "react-router-dom";
const MainLayout: FC = () => {
  return (
   <div>
     <div>main - header</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>main - footer</div>
   </div>
   
  )
};

export default MainLayout
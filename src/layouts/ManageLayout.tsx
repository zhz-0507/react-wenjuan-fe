import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from './ManageLayout.module.scss'
const ManageLayout: FC = () => {
  return (
   <div className={styles.container}>
     <div className={styles.left}>
      <p>ManageLayout - left</p>
      <button>我的问卷</button><br />
      <button>我的问卷</button><br />
      <button>我的问卷</button><br />
      <button>我的问卷</button><br />
      </div>
      <div className={styles.right}>
        <Outlet></Outlet>
      </div>
   </div>
   
  )
};

export default ManageLayout
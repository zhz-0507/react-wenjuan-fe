import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from './MainLayout.module.scss'
import { Layout } from 'antd'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'

const MainLayout: FC = () => {

  const { Header, Footer, Content } = Layout;
  return (
   <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.main}>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer className={styles.footer}>小慕问卷 &copy;2024 - present. Created by 海珠老师</Footer>
   </Layout>
   
  )
};

export default MainLayout
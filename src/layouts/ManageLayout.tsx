import { FC } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from './ManageLayout.module.scss'
import { Button, Space, message } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()


  const pathParams: any = {
    list: '/manage/list',
    star: '/manage/star',
    trash: '/manage/trash'
  }
  const handleJump = (name: string) => {
    const path = pathParams[name]
    if (! path) { return}
    nav(path)
  }

  const isActive = (name: string) => {
    const path = pathParams[name]
    return pathname === path ? 'default' : 'text'
  }
  const handleCreate = () => {
    message.info('新建问卷')
  }
  return (
   <div className={styles.container}>
     <div className={styles.left}>
     <Space direction="vertical">
      <Button
        type="primary"
        size="large"
        icon={<PlusOutlined />}
        onClick={() => {handleCreate()}}
      >
        新建问卷
      </Button>
      <Button
        type={isActive('list')}
        size="large"
        icon={<BarsOutlined />}
        onClick={() => {handleJump('list')}}
      >
        我的问卷
      </Button>
      <Button
        type={isActive('star')}
        size="large"
        icon={<StarOutlined />}
        onClick={() => {handleJump('star')}}
      >
        星标问卷
      </Button>
      <Button
        type={isActive('trash')}
        size="large"
        icon={<DeleteOutlined />}
        onClick={() => {handleJump('trash')}}
      >
        回收站
      </Button>
     </Space>    
      </div>
      <div className={styles.right}>
        <Outlet></Outlet>
      </div>
   </div>
   
  )
};

export default ManageLayout
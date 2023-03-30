
import React, { useState } from 'react';
import {
    RightCircleOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import logo from '../../assets/logo/steam.svg';
import style from './style.module.scss';

export default function SideBar() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider
                style={{ backgroundColor: "#1B2248" }}
                trigger={null}
                collapsible collapsed={collapsed}
            >
                <div className={style.container_logo}>
                    <img
                        className={style.img}
                        src={logo}
                        alt="Logo de l'entreprise Steam, vendeur numérique de jeux vidéo"
                    />
                </div>
                

                <Menu
                    style={{ backgroundColor: "#1B2248", color: "#ECEFF4" }}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                        {
                            key: '4',
                            icon: <RightCircleOutlined />,
                            label: 'nav 4',
                            onClick: () => setCollapsed(!collapsed),
                        },
                    ]}
                />

            </Sider>
        </>
    );
}
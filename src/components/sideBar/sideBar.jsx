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

export default function SideBar({ collapsed, setCollapsed }) {

    return (
        <>
            <Sider
                style={{ backgroundColor: "#181d3a", position: "fixed", height: "100vh" }}
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

                <div className={style.menu}>
                    <div>
                        <Menu
                            style={{ backgroundColor: "#181d3a", color: "#ECEFF4" }}
                            className={style.item}
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
                            ]}
                        />
                    </div>
                    <div>
                        <Menu
                            style={{ backgroundColor: "#1B2248", color: "#EC544E"}}
                            mode="inline"
                            items={[
                                {
                                    key: '4',
                                    icon: <RightCircleOutlined />,
                                    label: 'nav 4',
                                    onClick: () => setCollapsed(!collapsed),
                                },
                            ]}
                        />
                    </div>
                </div>
            </Sider>
        </>
    );
}
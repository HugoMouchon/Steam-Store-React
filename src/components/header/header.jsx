import style from './style.module.scss';
import SearchBar from 'components/searchBar/searchBar';
import { ShoppingCartOutlined, HeartOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import avatar from '../../assets/avatar/avatar.jpg';

export default function Header({ collapsed, contentTransition }) {
    return (
        <div className={style.container}>
            <div className={style.search_bar}
                style={{
                    marginLeft: collapsed ? 0 : 100,
                    transition: contentTransition ? 'all 0.2s ease-out' : 'none',
                }}>
                <SearchBar />
            </div>
            <div className={style.menu_user}>
                <Space
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#ECEFF4",
                        display: "flex",
                    }}
                >
                    <Badge
                        style={{ backgroundColor: '#AECE42', color: '#1B2248', borderColor: '#AECE42', fontWeight: 600 }}
                        count={1}
                        size="small"
                    >
                        <a href="#" className={style.icone}>
                            <ShoppingCartOutlined />
                        </a>
                    </Badge>

                    <Badge>
                        <a href="#" className={style.icone}>
                            <HeartOutlined />
                        </a>
                    </Badge>

                    <Badge>
                        <a href="#" className={style.icone}>
                            <TeamOutlined />
                        </a>
                    </Badge>

                    <Badge
                        style={{ backgroundColor: '#AECE42', color: '#1B2248', borderColor: '#AECE42', fontWeight: 600 }}
                        count={1}
                        size="small"
                    >
                        <a href="#" className={style.icone}>
                            <MessageOutlined />
                        </a>
                    </Badge>

                    <div className={style.avatar}>
                        <Avatar
                            src={avatar}
                            size={40} />
                        <span>Hugo</span>
                    </div>

                </Space>
            </div>
        </div>
    );
}

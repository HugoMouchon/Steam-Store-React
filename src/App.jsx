import style from 'App.module.scss';
import React, { useState } from 'react';
import { Layout } from 'antd';
import SideBar from 'components/sideBar/sideBar';
import Header from 'components/header/header';

const { Content } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const [contentTransition] = useState(true);

  return (
    <Layout className={style.container}>
      <Header collapsed={collapsed} contentTransition={contentTransition} />
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content
        style={{
          marginLeft: collapsed ? 0 : 110,
          transition: contentTransition ? 'all 0.2s ease-out' : 'none',
        }}
        className={style.container_content}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus officia alias. Libero quo odit ratione omnis explicabo, perspiciatis delectus repudiandae at assumenda. Facilis, ullam? Maiores fugit quo asperiores? Debitis.
        </div>

      </Content>
    </Layout>
  );
};

export default App;
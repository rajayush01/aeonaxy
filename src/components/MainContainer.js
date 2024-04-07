import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const MainContainer = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default MainContainer;
import React from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

export const Router = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import "./styles/reset.css"
import Home from './pages/home/Home';
import Profile from './pages/users/Profile';
import Search from './pages/Search';
import Account from './pages/users/Account';
import Login from './pages/users/Login';
import CommonLayout from './components/common/CommonLayout';
import Comment from "./pages/Comment";

function App() {
  console.log('hello');
  return (
    <Router>
      <Routes>
        {/* CommonLayout 적용되는 라우트 */}
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="posts/:id/comment" element={<Comment />} />
          <Route path="search" element={<Search />} />
          <Route path="users/:id/profile" element={<Profile />} />
          <Route path="users/:id/edit" element={<Profile />} />
          {/* 필요하면 CommonLayout 내에서 Outlet을 사용하실 수 있습니다.*/}
        </Route>

        {/* CommonLayout 적용되지 않는 라우트 */}
        <Route path="users">
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

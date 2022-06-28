import React from 'react';
import './App.css';
import { UserList } from './components/UserList';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
}

export default App;
import { UserList } from './components/UserList';
import { Header } from './components/Header';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
}



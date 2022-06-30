import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Modal } from '../Modal';

interface userListProps {
    id: number;
    name: string;
    username: string;
    img: string;
}

export const UserList: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [selectUser, setSelectUser] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((Error) => console.log(Error));
    }, []);

    const openModal = (user: string, id: number) => {
        setModalIsOpen(true);
        setSelectUser(user);
    }

    return (
        <>
            {users.map((user: userListProps) => (
                <Container key={user.id}>
                    <div className='user'>
                        <div className="picture">
                            <img src={user.img} alt="Profile picture" />
                        </div>
                        <div className="userInfo">
                            <span className="userName">{user.name}</span>
                            <span>ID: {user.id} - Username: {user.username}</span>
                        </div>
                        <button onClick={() => openModal(user.name, user.id)}><strong>Pagar</strong></button>
                    </div>
                </Container>
            ))}
            {modalIsOpen && <Modal userNameModal={selectUser} onClose={() => setModalIsOpen(false)} />}
        </>
    );
}
import React from 'react';
import { Container } from './styles';

export const UserList = () => {
    const users = [
        { name: 'Matthew Rubèn', id: 1, user: '@matthewruben', picture: 'UserImg/1.jpg' },
        { name: 'Nadzeya Borbála', id: 2, user: '@nadzeyaborbala', picture: 'UserImg/2.jpg' },
        { name: 'Byelobog Demophon', id: 3, user: '@byelobogdemophon', picture: 'UserImg/3.jpg' },
        { name: 'Myla Khadija', id: 4, user: '@mylakhadija', picture: 'UserImg/4.jpg' },
        { name: 'Ron Partha', id: 5, user: '@ronpartha', picture: 'UserImg/5.jpg' },
        { name: 'Jessica Jasmina', id: 6, user: '@jessicajasmina', picture: 'UserImg/6.jpg' },
        { name: 'Rachel Elizabeth', id: 7, user: '@rachelelizabeth', picture: 'UserImg/7.jpg' },
        { name: 'Edward Steinway', id: 8, user: '@edwardsteinway', picture: 'UserImg/8.jpg' },
        { name: 'Natalie Mooren', id: 9, user: '@nataliemooren', picture: 'UserImg/9.jpg' },
        { name: 'Jacobs Leedgard', id: 10, user: '@jacobsleedgard', picture: 'UserImg/10.jpg' }
    ];

    return (
        <>
            {users.map((user) => (
                <Container key={user.id}>
                    <div className='user'>
                        <div className="picture">
                            <img src={user.picture} alt="Profile picture" />
                        </div>
                        <div className="userInfo">
                            <span className="userName">{user.name}</span>
                            <div className="id_user">
                                <span>ID: {user.id}</span>
                                <span className="space">-</span>
                                <span>Username: {user.user}</span>
                            </div>
                        </div>
                        <button><strong>Pay</strong></button>
                    </div>
                </Container>
            ))}
        </>
    );
}
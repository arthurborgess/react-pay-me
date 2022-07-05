import React from 'react';
import { Container } from './styles';

export const Header: React.FC = () => {
    return (
        <Container>
            <div>
                <span className="pay">pay</span>
                <span className="me">.me</span>
            </div>
        </Container>
    );
}
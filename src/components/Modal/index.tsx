import React from "react";
import { Container, ModalContent } from "./styles";
import { InputCurrency } from "../InputCurrency";
import { Cards } from "../Cards";

export interface Props {
    userModal: string;
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({ onClose = () => {}, userModal }) => {   
    
    const paySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
    }
    
    return (
        <Container>
            <ModalContent>
                <div className="header">
                    <span>Pagamento para </span>
                    <span className="userName">{userModal}</span>
                </div>
                <form className="content" onSubmit={paySubmit}>
                    <InputCurrency />
                    <Cards />
                    <div className="buttons">
                        <button className="cancel" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="pay">Pagar</button>
                    </div>
                </form>
            </ModalContent>
        </Container>
    );
}
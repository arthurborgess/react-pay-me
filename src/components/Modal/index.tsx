import React from "react";
import { Container, ModalContent } from "./styles";

export interface Props {
    userModal: string;
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({ onClose = () => {}, userModal }) => {    
    
    return (
        <Container>
            <ModalContent>
                <div className="header">
                    <span>Pagamento para </span>
                    <span className="userName">{userModal}</span>
                </div>
                <form className="content">
                    <input type="text" placeholder='R$ 0,00' required={true} />
                    <select>
                        <option value="Test">Test</option>
                        <option value="Test 11">Test 11</option>
                    </select>
                    <div className="buttons">
                        <button className="cancel" onClick={onClose}>Cancelar</button>
                        <button className="pay">Pagar</button>
                    </div>
                </form>
            </ModalContent>
        </Container>
    );
}
import React, { useState } from "react";
import { Container, ModalContent } from "./styles";
import { maskMoney, pasteCheck } from "../InputCurrency";
import { cards } from "../Cards";

export interface Props {
    userNameModal: string;
    onClose: () => void;
}
interface TransactionPayload {
    card_number: string;
    cvv: number;
    expiry_date: string;
}

export const Modal: React.FC<Props> = ({ onClose, userNameModal }) => {
    const [isPaid, setIsPaid] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsPaid(true);
        const formSubmitData = new FormData(event.currentTarget);
        const selectedCard = formSubmitData.get('selectCard');

        { selectedCard === '1111111111111111' && setSuccessful(true) }
    }

    return (
        <Container>
            <ModalContent>
                <div className="header">
                    {isPaid ?
                        <span>Recibo de pagamento</span> :
                        <div>
                            <span>Pagamento para </span>
                            <span className="userName">{userNameModal}</span>
                        </div>
                    }
                    <div className="exit" onClick={onClose}>❌</div>
                </div>
                {isPaid ?
                    <span className="payment-response">
                        O pagamento <strong>{successful ? '' : 'não'}</strong> foi concluído com sucesso.
                    </span> :
                    <form className="content" onSubmit={formSubmit}>
                        <input type="text" placeholder="R$ 0,00" onKeyPress={maskMoney} onKeyUp={pasteCheck} name="moneyInput" autoComplete="off" />
                        <select name="selectCard" >
                            {cards.map((card) => {
                                return (
                                    <option
                                        key={card.card_number}
                                        value={card.card_number}
                                    >
                                        Cartão com final {card.card_number.substring(12)}
                                    </option>
                                );
                            })}
                        </select>
                        <button type="submit" className="pay">Pagar</button>
                    </form>
                }
            </ModalContent>
        </Container>
    );
}
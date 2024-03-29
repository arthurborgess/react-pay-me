import React, { useState } from "react";
import { Container, ModalContent } from "./styles";
import { InputCurrency } from "../InputCurrency";
import { cards } from "../Cards/cardList";
import { Cards } from "../Cards";

interface ModalProps {
    userNameModal: string;
    onClose: () => void;
    userIDModal: number;
}

export const Modal: React.FC<ModalProps> = ({ onClose, userNameModal, userIDModal }) => {
    const [isPaid, setIsPaid] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formSubmitData = new FormData(event.currentTarget);
        const selectedCard = formSubmitData.get('selectCard');
        const amount = formSubmitData.get('moneyInput');
        const cardData = cards.find((card) => card.card_number === selectedCard);

        if (cardData) {
            (await fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        card_number: cardData.card_number,
                        cvv: cardData.cvv,
                        expiry_date: cardData.expiry_date,
                        destination_user_id: userIDModal,
                        value: amount
                    })
                })
            )
        }

        setIsPaid(true);
        { selectedCard === '1111111111111111' && setSuccessful(true) }
    }

    return (
        <Container>
            <ModalContent>
                <div className="header">
                    {isPaid ? (
                        <span>Recibo de pagamento</span>
                    ) : (
                        <div>
                            <span>Pagamento para </span>
                            <span className="userName">{userNameModal}</span>
                        </div>
                    )}
                    <div className="exit" onClick={onClose}>❌</div>
                </div>
                {isPaid ? (
                    <span className="payment-response">
                        O pagamento <strong>{successful ? '' : 'não'}</strong> foi concluído com sucesso.
                    </span>
                ) : (
                    <form className="content" onSubmit={formSubmit}>
                        <InputCurrency />
                        <Cards />
                    </form>
                )}
            </ModalContent>
        </Container>
    );
}
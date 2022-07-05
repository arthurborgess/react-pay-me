import { cards } from "./cardList";

interface CardsProps {
    card_number: string;
    cvv: number;
    expiry_date: string;
}

export const Cards: React.FC = () => {
    const cardList: CardsProps[] = cards;
    return (
        <>
            <select name="selectCard">
                {cardList.map((card) => {
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
        </>
    )
}
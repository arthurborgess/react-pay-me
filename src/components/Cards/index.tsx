import { cards } from "./cardList";

export const Cards: React.FC = () => {
    return (
        <>
            <select name="selectCard">
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
        </>
    )
}
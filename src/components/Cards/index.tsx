import { Container } from "./styles"

export const cards = [
  // valid card
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  // invalid card
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
];

export const Cards = () => {

  return (
    <Container>
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
    </Container>
  )
}
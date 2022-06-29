import { Container } from "./styles"

export const Cards = () => {
    let cards = [
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
      
    return (
        <Container>
            <option value="1111111111111111">Cartão com final 1111</option>
            <option value="4111111111111234">Cartão com final 1234</option>
        </Container>
    )
}
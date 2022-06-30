interface TransactionPayload {
  card_number: string;
  cvv: number;
  expiry_date: string;
}

export const cards = <TransactionPayload[]>[
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

export const InputCurrency: React.FC = () => {

    const maskMoney = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        if ((/[0-9]+/g).test(event.key)) {
            event.currentTarget.value += event.key;
        }

        let formattedInput = Number(event.currentTarget.value.replace(/[^0-9]+/g, ''));
        formattedInput /= 100;

        event.currentTarget.value = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(formattedInput);;

    }

    const pasteCheck = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'v' && event.ctrlKey) {
            maskMoney(event);
        }
    }

    return (
        <input
            type="text"
            placeholder="R$ 0,00"
            onKeyPress={maskMoney}
            onKeyUp={pasteCheck}
            name="moneyInput"
            autoComplete="off"
            required
        />
    )
}
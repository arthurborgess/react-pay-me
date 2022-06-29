import { Container } from "./styles";

export const InputCurrency = () => {
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

    const pasteCheck = (e: React.KeyboardEvent<HTMLInputElement>) => { 
        if (e.key === 'v' && e.ctrlKey) {
            maskMoney(e);
        }
    }

    
    return (
        <Container type="text" placeholder='R$ 0,00' required={true} onKeyPress={maskMoney} onKeyUp={pasteCheck} />
    )
}
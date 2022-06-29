import { Container } from "./styles";

export const InputCurrency = () => {
    const maskMoney = (e: React.KeyboardEvent<HTMLInputElement>) => {

        e.preventDefault();
        
        if ((/[0-9]+/g).test(e.key)) {
            e.currentTarget.value += e.key;
        }
    
        let formattedInput = Number(e.currentTarget.value.replace(/[^0-9]+/g, ''));
        formattedInput /= 100;
    
        e.currentTarget.value = Intl.NumberFormat('pt-BR', {
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
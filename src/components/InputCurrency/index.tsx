    export const maskMoney = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        
        if ((/[0-9]+/g).test(event.key)) {
            event.currentTarget.value += event.key;
            const amount = event.currentTarget.value;
        }
    
        let formattedInput = Number(event.currentTarget.value.replace(/[^0-9]+/g, ''));
        formattedInput /= 100;
    
        event.currentTarget.value = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(formattedInput);;
    
    } 

    export const pasteCheck = (e: React.KeyboardEvent<HTMLInputElement>) => { 
        if (e.key === 'v' && e.ctrlKey) {
            maskMoney(e);
        }
    }
    
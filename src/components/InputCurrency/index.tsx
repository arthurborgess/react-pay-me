import { useState } from "react";

export const InputCurrency = () => {
    const [value, setValue] = useState('');

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        event.preventDefault();

        if (event.key.replace(/\D/g, "") !== "" || event.key === 'Backspace') {
            let formattedValue: any = value.replace(/[^0-9]/g, '');

            if (event.key === "Backspace") {
                formattedValue = formattedValue.slice(0, -1);
                formattedValue = formattedValue / 100;
                setValue(formatMoney(formattedValue));
                return
            }
            if (event.key.replace(/\D/g, "") !== "" && value.length < 16) {
                formattedValue = formattedValue + event.key;
                formattedValue = formattedValue / 100;
                setValue(formatMoney(formattedValue));
            }
        }
    }
    function formatMoney(value: number): string {
        return value.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
            minimumFractionDigits: 2
        })
    }

    return (
        <input
            type="tel"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="R$ 0,00"
            name="moneyInput"
            autoComplete="off"
            required
        />
    );
};
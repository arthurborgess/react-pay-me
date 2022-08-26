import { useState } from "react";

export const InputCurrency = () => {
    const [value, setValue] = useState('');

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();

        if ((/[0-9]+/g).test(e.key) || e.key === 'Backspace') {
            let formattedValue: any = value.replace(/[^0-9]/g, '');

            if (e.key === "Backspace") {
                formattedValue = formattedValue.slice(0, -1);
                formattedValue = formattedValue / 100;
                setValue(formatMoney(formattedValue));
                return
            }
            if (value.length < 16) {
                formattedValue = formattedValue + e.key;
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
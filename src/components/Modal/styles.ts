import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
    ;
export const ModalContent = styled.div`
    width: 450px;
    height: 250px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 20px 0;
    }
    .header {
        width: 100%;
        height: 70px;
        background-color: #474a6e;
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: space-between;
    }
    .header span:first-child {
        margin-left: 20px;
        margin-right: 3px;
    }
    .exit {
        margin-right: 20px;
        font-size: 18px;
        cursor: pointer;
    }
    .userName {
        color: #d1da59;
    }
    input {
        width: 300px; 
        height: 25px;
        margin-top: 15px;
        text-indent: 2px;
    }
    select {
        width: 308px; 
        height: 25px;
        margin-top: 15px;
        text-indent: 2px;
    }
    button {
        margin-top: 40px;
        width: 150px;
        height: 30px;
        cursor: pointer;
        transition: 0.3s;
        border: none;
        background-color: #666BA7;
        color: #FFF;
    }
    button:hover {
        background-color: #474a6e;
    }
    .payment-response {
        margin-top: 40px;
        width: 100%;
        height: 250px;
        text-align: center;
    }
`;
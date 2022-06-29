import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
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
    width: 30%;
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
    }
    .header span:first-child {
        margin-left: 20px;
    }
    .userName {
        margin-left: 6px;
        color: #d1da59;
    }
    
    .buttons {
        display: flex;
        margin-top: 45px;
        width: 30%;
        justify-content: space-between;
    }
    .buttons button {
        width: 70px;
        height: 25px;
        cursor: pointer;
        transition: 0.3s;
    }
    .cancel {
        background-color: transparent;
        border: none;
        color: #474a6e;
    }
    .cancel:hover {
        text-decoration: underline;
    }
    .pay {
        border: none;
        background-color: #666BA7;
        color: #FFF;
    }
    .pay:hover {
        background-color: #474a6e;
    }
`;
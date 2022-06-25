import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    height: 70px;
    background-color: #333651;
    padding: 15px 40px;
    display: flex;
    border-bottom: 5px solid #2a2c40;

    .user {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    .picture {
        height: 100%;
        margin-right: 20px;
    }
    .picture img {
        height: 100%;
        border-radius: 50%;
    }
    .userInfo {
        width: 100%;
        color #FFF; 
    }
    .id_user {
        display: flex;
        margin-top: 5px;
        color: #e0e0e0;
        font-size: 15px;
    }
    .space {
        margin-left: 10px;
        margin-right: 10px;
    }
    button {
        width: 80px;
        height: 25px;
        cursor: pointer;
        color: #000;
        background-color: #CDDEFF;
        border: none;
        transition: 0.3s;
    }
    button:hover {
        background-color: #FFF;
    }
`;
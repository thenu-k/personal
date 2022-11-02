import styled from "styled-components";

export const Contact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0b0b0b;
    color: white;
    & .inner{
        border-radius: 20px;
        width: 90%;
        height: 500px;
        /*  */
        margin-top: 50px;
        margin-bottom: 100px;
        background-color: #121212;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const Socials = styled.div`
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & p {
        width: 90%;
        font-size: 18px;
        line-height: 2;
	    font-family: 'Merriweather',serif;
        text-align: center;
    }
`

export const ContactForm = styled.div`
    height: 80%;
    width: 50%;
    /* background-color: green; */
`
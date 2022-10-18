import styled from "styled-components";
import landing from '../../Assets/landing.jpg'

export const Home = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LandingImageWrap = styled.div`
    width: 100vw;
    overflow: hidden;
    background-image: url(${landing});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    >.landingText{
        width: 100%;
        height: 100vh;
        color: white;
        font-family: 'Abril Fatface', cursive;
        position: relative;
        >.wrap{
            position: absolute;
            display: flex;
            align-items: center;
        }
        & h1{
            font-size: 5em;
            margin-right: 10px;
        }
        & span{
            font-size: 1.5em;

            color: black;
            background-color: white;
            padding: 0px 5px;
        }
    }
`

export const About = styled.div`
    width: 100%;
    background-color: transparent;
    >.inner{
        width: 100%;
        background-color: #0b0b0b;
        height: 300px;
        border-radius: 50px 50px 0 0;
    }
    
`
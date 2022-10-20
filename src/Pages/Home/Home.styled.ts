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
    background-color: #0b0b0b;
    border-radius: 50px 50px 0 0;
    >.inner{
        width: 90%;
        background-color: #0b0b0b;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    >.inner>*{
        width: 45%;
        height: 450px;
        margin: 100px 0;
        &.design.outer{
            margin-left: auto;
            border-radius: 20px;
            transform-style: preserve-3d;
            perspective: 1000px;
            >.inner.design{
                background-color: #121212;
                height: 100%;
                width: 100%;
                border-radius: 20px;
                transition: transform 0.2s;  
                color: white;
                font-size: 3em;

                >p{
                    width: 75%;
                    font-size: 18px;
                    line-height: 2;
                    text-align: left;
                    font-family: 'Merriweather', serif;
                }
            }
        }
    }
    
`
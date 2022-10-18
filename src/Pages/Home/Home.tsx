import * as S from './Home.styled'
import landing from '../../Assets/landing.jpg'
import { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    // Parallax effect
    const paxE = document.querySelector('#paxE')
    const parallax = (paxE:Element | null) => {
      var yPos = 0 - window.pageYOffset/5
      // @ts-ignore
      paxE.style.top = 50 + yPos + "%"
    }
    window.addEventListener('scroll', () => {
      // parallax(paxE)
    })
  })
  return (
    <S.Home>
        <S.LandingImageWrap>
          <div className="landingText center">
            <div id='paxE' className="wrap">
              <h1>Thenu Kal</h1>
              <span>Dev</span>
            </div>
          </div>
          <S.About>
            <div className="inner">
              
            </div>
          </S.About>
        </S.LandingImageWrap>
    </S.Home>
  )
}

export default Home
import * as S from './Home.styled'
import { annotate } from 'rough-notation'
import { useEffect } from 'react'
import Contact from './Contact/Contact'

const Home = () => {
  useEffect(()=>{
    const cardOuter = document.querySelector('.design.outer')
    // cardOuter?.addEventListener('mousemove', rotate);
    // cardOuter?.addEventListener('mouseout', stopRotate)
    function rotate(e:any){
      // @ts-ignore
      const cardItem = this.querySelector('.inner');
      const halfHeight = cardItem.offsetHeight / 2;
    
      cardItem.style.transform = 'rotateX('+-(e.offsetY - halfHeight) / 15+'deg) rotateY('+(e.offsetX - halfHeight) / 15+'deg)';
    }
    function stopRotate(){
      // @ts-ignore
      const cardItem = this.querySelector('.inner');
      cardItem.style.transform = 'rotate(0)';
    }

    const e = document.querySelector('p');
    //@ts-ignore
//const annotation = annotate(e, { type: 'box' });
//annotation.show();
  })
  return (
    <>
    <S.Home>
        <S.LandingImageWrap>
          <div className="landingText center">
            <div id='paxE' className="wrap">
              <h1>Thenu Kal</h1>
              <span>Dev</span>
            </div>
          </div>
          <S.About className='center'>
            <div className="inner">
              <div className="text outer">
                The Sunday<br/>Times
              </div>
              <div className="design outer">
                <div className="design inner center">
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </S.About>
        </S.LandingImageWrap>
        <Contact/>
    </S.Home>
    </>
  )
}

export default Home
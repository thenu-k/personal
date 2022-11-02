import { useEffect } from 'react'
import * as S from './Contact.styled'
import ReactBodymovin from 'react-bodymovin'
import orbitJSON from '../../../Assets/orbitJSON.json'

const Contact = () => {

  //Animation
  const bodymovinOptions = {
      path: `C:\Users\Thenu\code\portfolioWebsites\personal\src\Assets\orbitJSON.json`, // required
      renderer: 'svg', // required
      loop: true, // optional
      autoplay: true, // optional
      name: "Demo Animation", // optional
  }

  return (
   <S.Contact>
    <div className="inner">
    {/* <iframe src="https://lottie.host/?file=7f3d40c8-b88f-45a4-b161-e49ac43e21d6/CmP6DKvkRZ.json"></iframe> */}
      <S.Socials>
        <ReactBodymovin options={bodymovinOptions}></ReactBodymovin>
        <p>
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, provident? */}
        </p>
        <div className="icons">

        </div>
      </S.Socials>
      <S.ContactForm>
        
      </S.ContactForm>
    </div>
   </S.Contact>
  )
}

export default Contact
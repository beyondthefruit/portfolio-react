import { BsMailbox } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { GiAustralia } from 'react-icons/gi';

const Contact = () => {
  return (
    <div className='contact-me'>
      <h3>Contact</h3>
      <div className='contact'>
        <BsMailbox className='icons' />
        <a href='kevin.hanard@gmail.com'>kevin.hanard@gmail.com</a>
      </div>
      <div className='contact'>
        <AiOutlineLinkedin className='icons' />
        <a href='https://www.linkedin.com/in/kevin-hanard-275165a5/'>
          Linkedin Profile
        </a>
      </div>
      <div className='contact'>
        <AiOutlineGithub className='icons' />
        <a href='https://github.com/beyondthefruit'>Github Profile</a>
      </div>
      <div className='contact'>
        <GiAustralia className='icons' />
        <a href='https://www.google.com/maps/place/Op%C3%A9ra+de+Sydney/@-33.8605841,151.2137784,16z/data=!3m1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m13!1m7!3m6!1s0x6b129838f39a743f:0x3017d681632a850!2sSydney+Nouvelle-Galles+du+Sud!3b1!8m2!3d-33.8688197!4d151.2092955!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967'>
          Sydney Based
        </a>
      </div>
    </div>
  );
};

export default Contact;

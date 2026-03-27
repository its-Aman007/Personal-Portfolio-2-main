import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.instagram.com/noobi_ta7_'
        aria-label='Facebook'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagramSquare />
      </a>
      <a
        href='https://www.linkedin.com/in/aman-vishwakarma-4b0885227/'
        aria-label='Linkedin'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/its-Aman007'
        aria-label='Github'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;

import { BsFillChatFill } from 'react-icons/bs';

const Helper = () => {
  return (
    <div className='cta'>
      <a
        href='https://1drv.ms/w/c/5a65bf2f422817c4/IQDtMOfuzTk4R7HIUVqDLh0MAW2IVUSk5vaRYQ1RYsKXU_k?e=1hrVD7'
        target='_blank'
        rel='noreferrer'
        className='btn cta-icon dl'
      >
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary cta-icon'>
        <BsFillChatFill /> Let&apos;s Talk
      </a>
    </div>
  );
};

export default Helper;

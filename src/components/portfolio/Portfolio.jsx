import { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import './portfolio.css';

import IMG1 from '../../assets/room_rental.png';
import IMG1webp from '../../assets/room_rental.webp';

import IMG2 from '../../assets/Live_ai.png';
import IMG2webp from '../../assets/Live_ai.webp';

import IMG3 from '../../assets/thriftyx.png';
import IMG3webp from '../../assets/thriftyx.webp';

import IMG4 from '../../assets/portfolio.png';
import IMG4webp from '../../assets/portfolio.webp';

// import IMG5 from '../../assets/';
// import IMG5webp from '../../assets/';

import IMG6 from '../../assets/covid-19.png';
import IMG6webp from '../../assets/covid-19.webp';

const data = [
  {
    id: 6,
    image: IMG6,
    imageWebp: IMG6webp,
    title: 'Covid-19 website',
    github: 'https://github.com/its-Aman007/Covid-19-website',
    demo: 'https://benevolent-cuchufli-8299c5.netlify.app/',
    tags: ['html', 'css', 'javascript'],
    desc: 'This is a Covid-19 website which contains all nessasary information about Covid-19 and its prevention. Also conatains a map which shows the number of cases in each country.',
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   imageWebp: IMG5webp,
  //   title: 'GokuFlex',
  //   github: '',
  //   demo: '',
  //   tags: ['React','Node/Express','MongoDb', 'Anime API', 'React Context API'],
  //   desc: 'This is a anime streaming website with user authentication and watchlist feature. Users can watch anime and add them to their watchlist.',
  // },
  {
    id: 4,
    image: IMG4,
    imageWebp: IMG4webp,
    title: 'Portfolio Website',
    github: '',
    demo: 'https://app.netlify.com/projects/warm-churros-c254ce/deploys/69c6a4c7e726012a973f0114',
    tags: ['React', 'React Icons', 'React Hooks'],
    desc: 'This is my personal portfolio website. It is a single page application with dark mode and light mode support.',
  },
  {
    id: 3,
    image: IMG3,
    imageWebp: IMG3webp,
    title: 'ThriftyX',
    github: '',
    demo: 'https://thriftyx.com/',
    tags: ['Reactjs','MongoDB', 'Node/Express', 'code editor'],
    desc: 'Thrifty X is a dynamic marketing and events company that launched in November 2023. We began by organizing socializing events on weekends in Hyderabad, which quickly gained popularity',
  },
  {
    id: 2,
    image: IMG2,
    imageWebp: IMG2webp,
    title: 'Chat with AI',
    github: 'https://github.com/its-Aman007/try-me',
    demo: 'https://melodious-croquembouche-c8233d.netlify.app/',
    tags: ['React', 'React+vite', 'PyTorch','mongoDB' ],
    desc: 'Welcome to LiveCollab AI , here you can also use the chat on the right to ask questions or run /agent web searches',
  },
  {
    id: 1,
    image: IMG1,
    imageWebp: IMG1webp,
    title: 'Room-rental app',
    github: 'https://github.com/its-Aman007/Rental-project/tree/main',
    demo: 'https://inquisitive-chebakia-5d7a86.netlify.app/',
    tags: ['React+vite', 'node/express', 'MongoDB'],
    desc: 'A full-stack residential apartment rental management system with a modern web interface for residents and powerful admin controls. This project demonstrates a complete solution covering UI, API, database, and containerized deployment.',
  }


];

const Portfolio = () => {
  const [count, setCount] = useState(6);
  return (
    <section id='portfolio'>
      <h1 className='small-title'>My Recent Work</h1>
      <h2 className='medium-title'>Portfolio</h2>

      <div className='container portfolio__container'>
        {data
          .slice(0)
          .reverse()
          .slice(0, count)
          .map(({ id, image, imageWebp, title, github, demo, tags, desc }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <picture>
                    <source srcSet={imageWebp} type='image/webp' />
                    <img
                      src={image}
                      type='image/jpg'
                      width='600'
                      height='420'
                      alt={title}
                    />
                  </picture>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__tag'>
                  {tags.map((tag, index) => {
                    return (
                      <span key={index} className='portfolio__tag-pill'>
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <p className='portfolio__desc'>{desc}</p>
                <div className='portfolio__item-cta'>
                  <a
                    href={github}
                    className='btn btn-variant'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className='btn btn-white'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
      <div className='btn-row'>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (count === 6) {
              setCount(data.length);
            } else {
              setCount(6);
            }
          }}
          type='button'
          className='btn btn-dark-variant'
        >
          See{' '}
          {count === 6 ? (
            <>
              More <BsArrowDownCircle className='moreless' />
            </>
          ) : (
            <>
              Less <BsArrowUpCircle className='moreless' />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

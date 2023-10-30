import React from 'react'
import Header from './Header';
import Vdo from './Vdo';
import Footer from './Footer';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Vdo />
      <section className='kabir'>
      <div className='kabir-vdo'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-RuSqMYcQK0?si=SF-m_PjOE9J5IUCL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='kabir-info'>
      <h2>Kabir And Beyond...</h2>
      <p>Meet The Agent Kabir And Witness HRX Transformation</p>
      </div>
      </section>
      <section className='hritikbio'>
        <div className='bio'>          
        <h1>Hritik Roshan</h1>
        <br/>
        <hr/>
        <br/>
        <p>Hrithik Roshan (pronounced [ɾɪt̪ɪk ɾoʃən];[1] born 10 January 1974) is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, including six Filmfare Awards, of which four were for Best Actor. Starting from 2012, he has appeared in Forbes India's Celebrity 100 several times based on his income and popularity.</p>
        <br/>
        <p>Roshan has frequently collaborated with his father, Rakesh Roshan. He made brief appearances as a child actor in several films in the 1980s and later worked as an assistant director on four of his father's films. His first leading role was in the box-office success Kaho Naa... Pyaar Hai (2000), for which he received several awards. Performances in the 2000 terrorism drama Fiza and the 2001 ensemble family drama Kabhi Khushi Kabhie Gham... consolidated his reputation but were followed by several poorly received films.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

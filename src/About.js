import React from 'react'
import Header from './Header';
import Footer from './Footer';
import RunHritik from './images/hritik-running.jpg';
import './About.css';

export default function About() {
  return (
    <div className='about'>
      <Header />
      <div className='abt-bg'>
        <h1>OUR STORY</h1>
        <p>HRX (Hrithik Roshan Extreme) is a lifestyle and fitness brand jointly owned by Hrithik Roshan and Exceed Entertainment and founded in 2013. The brand launched first on Myntra.com in November 2013 with an athleisure line for men.</p>
        <p>HrX is India ’ s first celebrity brand which was introduced by Hrithik Roshan and Exceed Entertainment. The brand was launched in 2013 with a holistic mission to help transform the youth of India a better version of themselves, in terms of fitness. They initially launched with apparels and footwears, slowly as they entered the market they saw a rise in the acceptance of fitness being an integral part of people ’ s life, thats when HrX decided to expand its horizon and ventured into accessories, equipments etc.</p>
        <img src={ RunHritik} alt='Hritik'/>
        <p>The transaction is likely to be completed over the next few weeks, according to a report in LiveMint, which quoted a senior official of the e-retailer but did not mention the financial terms of the deal.</p>
        <p>Launched in late 2013, HRX is a sports and lifestyle brand that is sold on Myntra and Flipkart. Apart from clothing and shoes, its products include belts, backpacks and wallets. HRX will bring in sales of Rs.300 crore this financial year, up from Rs.100 crore last year, said Rajesh Narkar, vice-president, Myntra Fashion Brands observing that the deal would add an “attractive sportswear and lifestyle” brand in the on-line store’s private brands collection.</p>
        <p>Indians are looking to become healthier, more active and want more choice. Apart from a few international sports brands, there’s a lack of choice for consumers in sportswear and lifestyle and there’s massive scope to build a large brand in this segment. Buying an equity stake in HRX will align our vision with HRX’s over the long term,” said Narkar.

HRX will become part of Myntra’s growing portfolio of private brands. The company, which is owned by Flipkart, now owns 12 private brands, including HRX. Its largest private brand is Roadster, a casualwear offering. Among online retailers, Myntra has by far been the most successful in building a large private brands’ business ahead of its parent Flipkart and smaller rival Jabong. Increasing sales of private brands, which rope in higher margins than third-party brands, is one of the main drivers of Myntra’s plan of achieving profitability over the next couple of years and more.</p>
      </div>
      <Footer />
    </div>
  )
}

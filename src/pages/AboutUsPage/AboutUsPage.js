import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
import TeamMember from '../../components/TeamMember/TeamMember';

export default function AboutUsPage(){
    const teamMembers = [
        {
            name: 'Alfonso Rodriguez',
            title: 'Founder & CEO',
            socials: {
                linkedin: 'https://www.linkedin.com/in/alfonsorodz/',
                twitter: 'https://twitter.com/alfonsomlrodz'
            },
            img: '',
        },
        {
            name: 'Spyridon Coffinas',
            title: 'Software Engineer',
            socials: {
            },
            img: '',
        },
        {
            name: 'Vincent Caliendo',
            title: 'Software Engineer',
            socials: {
            },
            img: '',
        },
    ];
    const teamMembersTemplate = teamMembers.map(member => {
        return <TeamMember 
            memberName={member.name} 
            memberImg={member.img}
            memberTitle={member.title} 
            socialLinks={member.socials}
        />
    })

    return (
    <>
    <NavBar/>
    <div class="our-story-section">
    <div class="our-story-container w-container">
      <h1 class="heading_h1 call_to_action">Our Story</h1>
      <p class="paragraph-3">Large coin aggregators report billions of dollars of fake volume, every day, despite knowing much of it comes from wash trading. 
      <strong> Misinformation hurts everyone. </strong>Traders. Investors. Researchers. Exchanges. Miners. Developers. <br/><br/>
      We’ve realized volume is a poor way to determine liquidity in crypto markets. Which is why we built Liquidity Scan. 
      We scan and index the markets so you can always
      <strong> find the most liquid exchange with the best price to trade on</strong>. Real-time. Actionable. Verifiable.<br/><br/>
      Together we can<strong> make the crypto more transparent</strong>, get rid of misinformation, and level the playing field for everyone.</p>
    </div>
  </div>
  <div class="our-team-section">
    <div class="our-team-container w-container">
        <h1 class="heading_h1 call_to_action">Our Team</h1>
        <div class="w-layout-grid our-team-grid">
            {teamMembersTemplate}
        </div>
        </div>
        </div>
        <div class="backed-by-section">
            <div class="backed-by-container w-container">
            <h1 class="heading_h1 call_to_action">Backed by</h1>
            <a href="https://www.sternventurefellows.com/" target="_blank" class="backed-by-link-block w-inline-block">
                <img src="images/design-1ab0c92d-3f54-4427-b137-7c1e4385c1d6.png" loading="lazy" width="178" sizes="100px" 
                srcset="images/design-1ab0c92d-3f54-4427-b137-7c1e4385c1d6-p-500.png 500w, images/design-1ab0c92d-3f54-4427-b137-7c1e4385c1d6-p-800.png 800w, 
                images/design-1ab0c92d-3f54-4427-b137-7c1e4385c1d6.png 958w" alt="" class="svf-image"/>
            </a>
            </div>
        </div>
    <Footer/>
    </>
    )
}
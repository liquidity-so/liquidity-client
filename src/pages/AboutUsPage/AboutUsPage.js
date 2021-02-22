import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
import TeamMember from '../../components/TeamMember/TeamMember';
import {ALFONSO_LG, SPIRO_LG, VINCENT_LG, MIGUEL_LG} from '../../assets/team';
import "./AboutUsPage.css";
const SVF_LOGO_SM = require('../../assets/logos/SVF_SM.png');
const SVF_LOGO_M= require('../../assets/logos/SVF_M.png');
const SVF_LOGO_LG= require('../../assets/logos/SVF_LG.png');

export default function AboutUsPage(){
    const teamMembers = [
        {
            name: 'Alfonso Rodriguez',
            title: 'Founder & CEO',
            socials: {
                linkedin: 'https://www.linkedin.com/in/alfonsorodz/',
                twitter: 'https://twitter.com/alfonsomlrodz'
            },
            img: ALFONSO_LG,
        },
        {
            name: 'Spyridon Coffinas',
            title: 'Software Engineer',
            socials: {
            },
            img: SPIRO_LG,
        },
        {
            name: 'Vincent Caliendo',
            title: 'Software Engineer',
            socials: {
            },
            img: VINCENT_LG,
        }
    ];
    const teamMembersTemplate = teamMembers.map((member, i) => {
        return (
        <TeamMember
            key={i}
            memberName={member.name} 
            memberImg={member.img}
            memberTitle={member.title} 
            socialLinks={member.socials}
        />)
    })

    return (
    <>
    <NavBar/>
    <div className="our-story-section">
    <div className="our-story-container w-container">
      <h1 className="heading_h1 call_to_action">Our Story</h1>
      <p className="paragraph-3">Large coin aggregators report billions of dollars of fake volume, every day, despite knowing much of it comes from wash trading. 
      <strong> Misinformation hurts everyone. </strong>Traders. Investors. Researchers. Exchanges. Miners. Developers. <br/><br/>
      We’ve realized volume is a poor way to determine liquidity in crypto markets. Which is why we built Liquidity Scan. 
      We scan and index the markets so you can always
      <strong> find the most liquid exchange with the best price to trade on</strong>. Real-time. Actionable. Verifiable.<br/><br/>
      Together we can<strong> make the crypto more transparent</strong>, get rid of misinformation, and level the playing field for everyone.</p>
    </div>
  </div>
  <div className="our-team-section">
    <div className="our-team-container w-container">
        <h1 className="heading_h1 call_to_action">Our Team</h1>
        <div className="w-layout-grid our-team-grid">
            {teamMembersTemplate}
        </div>
        </div>
        </div>
        <div className="backed-by-section">
            <div className="backed-by-container w-container">
            <h1 className="heading_h1 call_to_action">Backed by</h1>
            <a href="https://www.sternventurefellows.com/" target="_blank" className="backed-by-link-block w-inline-block">
                <img src={SVF_LOGO_LG} loading="lazy" width="178"
                srcSet={`${SVF_LOGO_SM} 500w, ${SVF_LOGO_M} 800w, 
                ${SVF_LOGO_LG} 958w`} alt="Stern Venture Fellows" className="svf-image"/>
            </a>
            </div>
        </div>
    <Footer/>
    </>
    )
}
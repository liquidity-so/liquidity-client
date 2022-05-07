import React from 'react'

const mapSocialsToImage = (linkType) => {
    const imageSrc = linkType === "twitter" ?  "twitter_link" : linkType === "linkedin" ? "linkedin_link" : null;
    return imageSrc;
}
export default function TeamMember(props){
    let socialLinksTemplate;
    let socials = Object.keys(props.socialLinks);
    if (socials.length) {
        socialLinksTemplate = socials
        .map((key, i) => {
            return (
            <a key={i} href={props.socialLinks.key} target="_blank" className="link-block-3 w-inline-block">
                <img src={mapSocialsToImage(key)} loading="lazy" alt="" className="team-member"/>
            </a>);
        })
    }
    return (
    <> 
        <div className="team-member-block">
        <img src={props.memberImg} loading="lazy" width="171" height="205" alt="" className="team_member"/>
        <div className="team_description_box">
            <div className="team_description">{props.memberName}</div>
            <div>{props.memberTitle}</div>
            </div>
            <div className="team-member-links-block">
                {socialLinksTemplate}
            </div>
        </div>
    </>
    )
}


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
        .map(key => {
            return (
            <a href={props.socialLinks.key} target="_blank" class="link-block-3 w-inline-block">
                <img src={mapSocialsToImage(key)} loading="lazy" alt="" class="team-member"/>
            </a>);
        })
    }
    return (
    <> 
        <div class="team-member-block">
        <img src={props.memberImg} loading="lazy" width="171" alt="" class="team_member"/>
        <div class="team_description_box">
            <div class="team_description">{props.memberName}</div>
            <div>{props.memberTitle}</div>
            </div>
            <div class="team-member-links-block">
                {socialLinksTemplate}
            </div>
        </div>
    </>
    )
}


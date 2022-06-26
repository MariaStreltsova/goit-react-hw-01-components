
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {ProfileContainer, DescriptionContainer, AvatarImage, Name, TagName, Location, StatsList, StatsItem, Label, Quantity} from './ProfileStyled';

// const ProfileContainer = styled.div`

// align-items: center;
   
//       margin-top: ${p => p.theme.space[7]}px;
//   margin-bottom:  ${p => p.theme.space[6]}px;
//   width: 400px;
//   margin-left: auto;
//   margin-right: auto;
//   padding: ${p => p.theme.space[4]}px;
//   border-radius: ${p => p.theme.radii.normal};
//     box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
// `;

// const DescriptionContainer = styled.div`
//   display: flex; 
//   align-items: center;

 
//   flex-direction: column;

//   padding-top: ${p => p.theme.space[6]}px;
//     padding-bottom: ${p => p.theme.space[5]}px;
//   border-radius: ${p => p.theme.radii.normal};
//   background-color: ${p => p.theme.colors.white};

// `;

// const AvatarImage = styled.img`
// width: 260px;
// height: 260px;
// border-radius: ${p => p.theme.radii.round};
// background-color:${p => p.theme.colors.accent}; 
// `;

// const Name = styled.p`
// font-weight: ${p => p.theme.fontWeights.bold};
// font-size: ${p => p.theme.fontSizes.l};
// line-height: ${p => p.theme.lineHeights.heading};
// `;
// const TagName = styled.p`
// font-weight: ${p => p.theme.fontWeights.normal};
// font-size: ${p => p.theme.fontSizes.m};
// line-height: ${p => p.theme.lineHeights.body};
// color: ${p => p.theme.colors.accentText};
// :hover,:focus{
// color: ${p => p.theme.colors.text};
// }
// `;

// const Location = styled.p`
// font-weight: ${p => p.theme.fontWeights.normal};
// font-size: ${p => p.theme.fontSizes.m};
// line-height: ${p => p.theme.lineHeights.body};
// color: ${p => p.theme.colors.accentText};
// :hover,:focus{
// color: ${p => p.theme.colors.text};
// }
// `;

// const StatsList = styled.ul`
// padding: 0;
// margin: 0;
// align-items: center;
// list-style: none;
// display: flex;
// justify-content: space-between;
// background-color:${p => p.theme.colors.accent};
// `;
// const StatsItem = styled.li`

//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   font-size: 17px;
//   justify-content: center;
// padding-top:  ${p => p.theme.space[4]}px;
// padding-bottom:  ${p => p.theme.space[4]}px;

// :not(:last-child) {
//   border-right: 1px solid rgb(253, 252, 252);
// };
// `; 
// const Label = styled.span`
// margin-bottom:  ${p => p.theme.space[2]}px;
// color:${p => p.theme.colors.accentText};
// :hover,:focus{
// color: ${p => p.theme.colors.text};
// }
// `;

// const Quantity = styled.span`
// display: block;
//   text-align: center;
// font-weight: ${p => p.theme.fontWeights.bold};
// `;


export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <ProfileContainer>
  <DescriptionContainer>
    <AvatarImage
      src={avatar}
      alt="User avatar"
 
    />
    <Name>{username}</Name>
    <TagName>{tag}</TagName>
    <Location>{location}</Location>
  </DescriptionContainer>

  <StatsList>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </StatsList>
</ProfileContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,

}
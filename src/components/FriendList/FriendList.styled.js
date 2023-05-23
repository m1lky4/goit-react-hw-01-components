import styled from "styled-components";


export const FriendsList = styled.ul`
display: flex;
flex-direction: column;
gap: 30px;
list-style: none;
padding: 0;
margin: 0;
`;
export const FriendListItem = styled.li`
display: flex;
align-items: center;
background-color: lightgrey;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;
export const FriendStatus = styled.span`
margin: auto 0;
margin-left: 10px;
margin-right: 30px;
`;
export const FriendAvatar = styled.img`
width:auto;
height: 75px;
margin-right: 15px;

`;
export const FriendName = styled.p`
font-size: 40px;
margin-right: 15px;

`;


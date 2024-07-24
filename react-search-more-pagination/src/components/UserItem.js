import React from 'react'
import styled from "styled-components";

function UserItem({ fullname, email, phone, avatar}) {
  console.log("page - data");
  console.log("fullname: " , fullname);
  console.log("email: ", email);
  console.log("phone: ", phone);
  return (
    <Wrapper>
      <Main>
        <FlexContainer>
          <UserAvatarImage src={avatar}/>
          <UserInfoFlexContainer>
            <UserFullname>{fullname}</UserFullname>
            <UserEmail>{email}</UserEmail>
          </UserInfoFlexContainer>
        </FlexContainer>
      </Main>
    </Wrapper>
    
  )
}

export default UserItem;

const Wrapper = styled.div`
    width: 300px;
    height: 100px;
    border: 1px solid red;
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) /* 2열*/
  grid-template-rows: repeat(2, 1fr); /* 2행*/
  gap: 10px 5px;
  padding: 0 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserInfoFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserAvatarImage = styled.img`
  width:24%;
  border-radius: 50%;
  object-fit: cover;
`;

const UserFullname = styled.div`
  font-size: 15px;
`;

const UserEmail = styled.div`
  font-size: 15px;
`;
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const MessageStyle = styled.h1`
  font-size: 28px;
  color: red;

  &:hover {
    color:blue;
  }
  @media (max-width: 600px) {
    background-color: orange;
  }
`;

const Input = styled.input.attrs({
  type: 'text',
  size: props => props.small ? 3 : 8
})`
  color: #dedede;
  background: blue;
`;

const Info = styled.p`
  font-size: 20px;
  color: black;
`;

const InfoWarning = styled(Info)`
color: red;
`;

const Link = styled.a`
  font-size: 34px;
  color: green;
`;

const LinkButton = Link.withComponent('button');

const MessageWrapper = () => {
  return (
    <div>
      <Input size={30}></Input>
      <MessageStyle><Message msg={'Hello! World!'}></Message></MessageStyle>

      <Info>{"Information"}</Info>
      <InfoWarning>MessageWrapper</InfoWarning>

      <Link>Hello, Button</Link>
      <LinkButton>Click!</LinkButton>
    </div>
  )
}
export default MessageWrapper
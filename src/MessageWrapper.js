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

const MessageWrapper = () => {
  return (
    <MessageStyle><Message msg={'Hello! World!'}></Message></MessageStyle>
  )
}
export default MessageWrapper
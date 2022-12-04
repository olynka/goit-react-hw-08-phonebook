import styled from "styled-components";

export const Block = styled.div`
display:flex;

  margin-top: 20px;

  border: solid 1px #337AB7;
  border-radius: 15px;
  flex-direction: column;
`;

export const Totle = styled.h2`
    display:flex;
 justify-content:center;
 color:#337AB7;

    `
export const ButtonLogOut = styled.button`
    color:#1c5a90;
  padding: 4px;
  margin: 5px;
  font-size: 14px;
  border-radius: 10px;
  background-color:#98caf6;

  outline: 0;
  text-decoration: none;

  cursor: pointer;
  :hover {
    color: #337AB7;
    background-color: #f065c4;
    outline: 0;
    text-decoration: none;
  }
`;
export const DivMenu = styled.div`
display:flex;
padding-left:auto;
`;
export const P = styled.p`
 color: #337AB7;
`;


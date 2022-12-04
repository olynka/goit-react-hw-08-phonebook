import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
box-shadow: rgba(32, 169, 215, 0.4) 0px 2px 4px,
    rgba(7, 29, 137, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color:#337AB7;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #e87abe;
  }
`;
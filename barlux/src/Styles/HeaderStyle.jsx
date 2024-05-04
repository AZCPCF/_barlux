import { MenuList, TextField } from "@mui/material";
import styled from "styled-components";
import json from "../links.json";
export const Logo = styled.img`
  width: 75%;
  height: 100%;
  margin-right: 10px;
`;
export const ResponsiveMenu = styled.div`
  display: none;
`;
export const MenuHeader = styled.div` 
  color: ${json.color};
`;
export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1050px) {
    & > * {
      display: none;
    }
    & > #responsiveMenu {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

    }
  }
`;
export const Navbar = styled(MenuList)`
  display: flex;
  height: 75%;
`;
export const SearchInput = styled(TextField)`
  width: 100%;
`;
export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const CartButtonHeader = styled.div`
  width: 20%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${json.color};
  color: white;
`;
export const SignUpButtonHeader = styled.div`
  width: 35%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${json.color};
  color: ${json.color};
`;

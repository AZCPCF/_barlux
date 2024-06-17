import { BottomNavigation, Button, Grid, MenuItem, MenuList, TextField } from "@mui/material";
import styled from "styled-components";
import json from "../../JSON/variables.json";
export const Logo = styled.img`
  width: 50%;
  height: 100%;
  margin-right: 50px;
`;
export const ResponsiveMenu = styled(Grid)`
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
  box-shadow: 0 1px 5px -3px ${json.color};
  @media (max-width: 1199px) {
    &{
      box-shadow: unset;
    }
    & > * {
      display: none;
    }
    & > .muirtl-hagxv6-MuiGrid-root{
      width: 100%;
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
export const Navbar = styled(BottomNavigation)`
  display: flex;
  text-align:center;
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
export const CartButtonHeader = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 10px solid red;

`;
export const SignUpButtonHeader = styled(Button)`
  width: 35%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  font-size: 54px ;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${json.color};
  color: ${json.color};
  @media (max-width: 1180px) {
    &>span{
      font-size: 11px;
    }
  }
`;

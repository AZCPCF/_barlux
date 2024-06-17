import { Grid, MenuItem, Typography } from "@mui/material";
import json from "../../JSON/variables.json";
import styled from "styled-components";
export const LogoFooter = styled.img`
  width: 100px;
  height: 100%;
`;
export const ContactFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LinksDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: ${json.color};
  @media (max-width: 1199px) {
    & {
      justify-content: space-evenly;
      padding: 5px;
    }
  }
`;
export const FooterMenuItem = styled(MenuItem)`
  width: max-content;
`;
export const FooterMenuTitle = styled.span`
  border-bottom: 1px solid ${json.color};
  padding-left: 50px;
  margin-right: 10px;
`;

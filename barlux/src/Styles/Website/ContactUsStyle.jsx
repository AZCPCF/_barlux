import styled from "styled-components";

import json from "../../JSON/variables.json";
import { Grid } from "@mui/material";
export const ContactUsIcon = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -60px;
  margin: 0 auto;
  border-radius: 100%;
  border: 1px solid #d9d9d9;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${json.color.default};
  background-color: white;
  @media (max-width: 1199px) {
    & {
      width: 80px;
      height: 80px;
      top: -40px;
    }
    & > * {
      font-size: 120px;
    }
  }
`;
export const Line = styled(Grid)`
  width: 30%;
  height: 1px;
  border-radius: 4px;
  border: 2px solid #e2e2e2;
`;
export const AboutCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0px 30px;
  text-align: start;
  align-items: center;
  @media (max-width: 1199px) {
    &{
        justify-content: space-evenly;
        /* padding: 0px 10px; */
        padding: 0;
    }

}
`;
export const AboutCardTextParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;
export const AboutCardIconParent = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${json.color.default};
  @media (max-width: 1199px) {
      &{
          width: 100px;
          height: 100px;
        }
    }
    & > .icon-rwdijad{
        font-size:52px;
        color:white;
    }
`;

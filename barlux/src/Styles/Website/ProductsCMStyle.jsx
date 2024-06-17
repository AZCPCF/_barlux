import { ReactComponent as LogoDiscount } from "../Assets/img/Group 23.svg";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import Swiper from "swiper";
export const ProductTitle = styled(Typography)`
  @media (max-width: 1199px) {
    & {
      font-size: 12px;
    }
  }
`;
export const ProductTitleMore = styled(Typography)`
  color: gainsboro;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1199px) {
    & {
      font-size: 10px;
    }
    & > * {
      font-size: 10px;
    }
  }
`;
export const ProductCardP = styled(Grid)`
  height: 350px;
  width: 500px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (max-width: 500px) {
    height: 250px;
  }
`;
export const ProductCardImage = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 5px;
  height: 50%;
  background-color: #f5f5f5;
  border-radius: 8px;
`;
export const PriceP = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  /* text */
`;
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  @media (max-width: 900px) {
    & > * {
      font-size: 8px;
    }
  }
`;


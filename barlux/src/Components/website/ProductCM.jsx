// head - products
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import "swiper/css/grid";
import "swiper/css";
import "./styles.css";
import "swiper/css/navigation";
import { ReactComponent as LogoDiscount } from "../Assets/img/Group 23.svg";
import { Navigation } from "swiper/modules";
import React, { useEffect, useState } from "react";
import {
  PriceP,
  Prices,
  ProductCardImage,
  ProductCardP,
  ProductTitle,
  ProductTitleMore,
} from "../../Styles/ProductsCMStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProductByCateogry } from "../../API/GET";
import Loading from "./Loading";
import useLoading from "../../hook/use-loading";
const ProductCM = ({ title, category_id }) => {
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useLoading();
  // const [loading, setLoading] = useState(false);
  const buildProductObject = (product) => {
    return {
      id: product.id,
      title: product.title,
      before_discount_price: product.before_discount_price,
      image: product.image_1,
      price: product.price,
      discount_percent: product.discount_percent,
    };
  };
  const getFunction = async () => {
    setLoading(true);
    const res = await getProductByCateogry(category_id);
    const newProducts = res.data.data.map((product) =>
      buildProductObject(product)
    );
    console.log(newProducts);
    setProducts(newProducts);
    setLoading(false);
  };
  useEffect(() => {
    getFunction();
  }, []);
  const theme = useTheme();

  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Loading isLoading={loading} />
      <Box flexGrow={"1"} mt={"100px"} mb={"100px"}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignproducts="center"
        >
          <Grid
            xs={10}
            container
            flexDirection={"row"}
            alignproducts={"center"}
            justifyContent={"space-between"}
            textAlign={"center"}
          >
            <ProductTitle variant={lg ? "h4" : md ? "h5" : "body1"}>
              {title}
            </ProductTitle>
            <ProductTitleMore variant={lg ? "h6 " : "overline"}>
              مشاهده بیشتر
              <ArrowBackIosIcon fontSize={lg ? "1.25rem" : "0.75rem"} />
            </ProductTitleMore>
          </Grid>
          <Grid
            xs={10}
            item
            container
            justifyContent={"space-between"}
            mt={"40px"}
          >
            {lg ? (
              <Swiper
                navigation={true}
                rewind={true}
                slidesPerView={4}
                modules={[Navigation]}
                injectStyles={[
                  `
              .swiper-button-next,
              .swiper-button-prev {
              }
              .swiper-pagination-bullet{
                width: 40px;
                height: 40px;
                background-color: red;
              }
              `,
                ]}
                className="mySwiper"
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardP
                      xs={10}
                      container
                      flexDirection={"column"}
                      justifyContent={"space-around"}
                      textAlign={"center"}
                      mt={"10px"}
                    >
                      <ProductCardImage />
                      <Typography
                        variant={lg ? "h5" : md ? "h5" : "button"}
                        textAlign={"start"}
                        width={"max-content"}
                        pl={"10px"}
                        pb={"10%"}
                      >
                        {product.title}
                      </Typography>
                      <PriceP>
                        <LogoDiscount
                          style={{
                            height: "50%",
                          }}
                        />
                        <Prices>
                          <del style={{ color: "#7B808C" }}>
                            {product.before_discount_price} تومان
                          </del>
                          <p style={{ paddingLeft: "20px" }}>
                            {product.price} تومان
                          </p>
                        </Prices>
                      </PriceP>
                    </ProductCardP>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              products.map((product, index) =>
                index <= 1 ? (
                  <ProductCardP
                    key={index}
                    xs={5.5}
                    item
                    container
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                    textAlign={"center"}
                  >
                    <ProductCardImage />
                    <Typography
                      variant={lg ? "h5" : md ? "h5" : "button"}
                      textAlign={"start"}
                      width={"max-content"}
                      pl={"10px"}
                      pb={"10%"}
                    >
                      {product.title}
                    </Typography>
                    <PriceP>
                      <LogoDiscount
                        style={{
                          height: "50%",
                        }}
                      />
                      <Prices>
                        <del style={{ color: "#7B808C" }}>
                          {product.before_discount_price} تومان
                        </del>
                        <p style={{ paddingLeft: "20px" }}>
                          {product.price} تومان
                        </p>
                      </Prices>
                    </PriceP>
                  </ProductCardP>
                ) : (
                  ""
                )
              )
            )}
          </Grid>
          <div></div>
        </Grid>
      </Box>
    </>
  );
};
export default ProductCM;

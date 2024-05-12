import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../Components/TokenContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";
export default function AppRoutes() {
  const { token } = React.useContext(TokenContext);
  const [tokenn, setTokenn] = useState(token);
  console.log(tokenn);
  useEffect(() => {
    setTokenn(token);
  }, [token]);
  return (
    <BrowserRouter>
      {tokenn == null ? (
        <Routes>
          <Route path="/" element={<p>s</p>} />
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home>
            <center style={{margin:'150px 0px'}}>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam modi rerum odio dolores optio, obcaecati eum deleniti ea, atque voluptatum, debitis accusamus beatae nesciunt voluptatem adipisci accusantium architecto nam!</p>
            </center>
          </Home>} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="*" element={<Home ><center><h1>404</h1></center></Home>} />
        </Routes> 
      )}
    </BrowserRouter>
  );
}

import React from "react";
import Banner from "./banner";
import Service from "./service";
import NewsLetter from "./news-letter";
import About from "./about";
import Faq from "./faq";
import Founder from "./founder";
import Product from "./product";
import Contact from "./contact";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <NewsLetter />
        <Service />
        <About />
        <Faq />
        <Founder />
        <Product />
        <Contact />
      </>
    );
  }
}

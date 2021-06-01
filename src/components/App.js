import React from "react";
import Header from "../components/Header"
import "../assets/styles/App.scss"
import Search from "./Search";
import Categories from "./Categories";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Categories title="Mi lista">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>

      <Categories title="Recomendados">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>
      <Footer/>
    </div>
  );
}

export default App;
import React from "react";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const RenderVideos = ({ list }) => (
  <Carousel>
    {list.map(item =>
      <CarouselItem
        key={item.id}
        title={item.title}
        cover={item.cover}
        year={item.year}
        contentRating={item.contentRating}
        duration={item.duration}
      />
    )}
  </Carousel>
);



export default RenderVideos;
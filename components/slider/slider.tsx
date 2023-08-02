'use client';

import Slider, { Settings } from "react-slick";
import CardManga from "../CardManga";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderItem {
  id: string;
  title: string;
  thumbnail: string;
  is_trending: boolean;
  short_description: string;
  lastest_chapter?: string[];
  genres?: string[];
  status: string;
  total_views: string;
  total_comments: string;
  followers?: string;
  update_at: string;
  authors: string;
}

interface ReuseableSliderProps {
  items: SliderItem[];
}

const ReuseableSlider: React.FC<ReuseableSliderProps> = ({ items }) => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {items?.map((item) => (
          <CardManga key={item.id} manga={item} />
        ))}
      </Slider>
    </div>  
    );
};

export default ReuseableSlider;

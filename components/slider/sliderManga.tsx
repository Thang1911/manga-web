"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface mangaImage {
  page: number;
  src: string;
  backup_url_1: string;
  backup_url_2: string;
}

interface sliderMangaProps {
  images: mangaImage[];
}

const SliderManga: React.FC<sliderMangaProps> = ({ images }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      {images.map((image) => (
        <div key={image.page}>
          <Image src={image.src} alt="image" width={550} height={550} />
        </div>
      ))}
    </div>
  );
};

export default SliderManga;

import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1, itemFit:"contain" },
    568: { items: 3, itemFit:"contain" },
    1024: { items: 5.5, itemFit:"contain" },
  };

  const slidePrev = () => setActiveIndex(activeIndex-1);
  const slideNext = () => setActiveIndex(activeIndex+1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.map((item) => (
    <div className="">
      {" "}
    <HomeSectionCard product={item} />;
    </div>
  ));
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
        <h2 className="text -2xl font-extrabold text-gray-800 py-5ss">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
           onSlideChanged={syncActiveIndex}
           animationType="fadeout"
           animationDuration={2000}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            color="secondary"
            onClick={slideNext}
            variant="contained"
            className="z-10000 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
            >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color:"black"}}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-10000 bg-[]"
            color="secondary"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
            }}
            aria-label="next"
            >
            <KeyboardArrowLeftIcon
              className=""
              sx={{ transform: "rotate(90deg)", color:"black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
export default HomeSectionCarousel;

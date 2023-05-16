/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PersonList from "./PersonList";
import ItemsList from "./ItemsList";
import { Swiper as ISwiper } from "swiper/types";

const Switcher: FC = () => {
  const [tab, setTab] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState<ISwiper>();

  const handleTabChanged = (_: unknown, newValue: number) => {
    setTab(newValue);
    controlledSwiper?.slideTo(newValue);
  };

  const handleSwiped = (swiper: ISwiper) => {
    setTab(swiper.snapIndex);
  };

  return (
    <>
      <Tabs variant="fullWidth" value={tab} onChange={handleTabChanged}>
        <Tab label="persons" />
        <Tab label="items" />
      </Tabs>
      <Swiper
        onSlideChange={handleSwiped}
        onSwiper={swiper => setControlledSwiper(swiper)}
        style={{
          width: "100%",
          maxHeight: "30%",
        }}
      >
        <SwiperSlide
          style={{
            overflow: "auto",
          }}
        >
          <PersonList />
        </SwiperSlide>
        <SwiperSlide
          style={{
            overflow: "auto",
          }}
        >
          <ItemsList />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Switcher;

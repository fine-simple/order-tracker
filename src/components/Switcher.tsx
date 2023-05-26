/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { Tabs, Tab, Stack, styled } from "@mui/material";
import { useState } from "react";
import PersonList from "./PersonList";
import ItemsList from "./ItemsList";
import { SwipeableViews } from "./SwipableTabs";

const StyledStack = styled(Stack)(() => ({
  width: "100%",
  overflowX: "hidden",
}));

const Switcher: FC = () => {
  const [tab, setTab] = useState(0);

  const handleTabChanged = (_: unknown, newValue: number) => {
    setTab(newValue);
  };

  const handleSwiped = (currTab: number) => {
    setTab(currTab);
  };

  return (
    <StyledStack>
      <Tabs variant="fullWidth" value={tab} onChange={handleTabChanged}>
        <Tab label="orders" />
        <Tab label="items" />
      </Tabs>
      <SwipeableViews
        views={[<PersonList />, <ItemsList />]}
        selectedView={tab}
        onSwipe={handleSwiped}
        inkBarRef={null}
      />
    </StyledStack>
  );
};

export default Switcher;

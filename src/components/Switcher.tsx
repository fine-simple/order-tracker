/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
// @ts-ignore-next-line
import SwipeableViews from "react-swipeable-views-react-18-fix";
import PersonList from "./PersonList";
import ItemsList from "./ItemsList";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (value === index && <Box {...other}>{children}</Box>) || <></>;
}

const Switcher: FC = () => {
  const [tab, setTab] = useState(0);
  const theme = useTheme();

  const handleTabChanged = (_: unknown, newValue: number) => {
    setTab(newValue);
  };
  const handleIndexChange = (index: number) => {
    setTab(index);
  };

  return (
    <>
      <Tabs variant="fullWidth" value={tab} onChange={handleTabChanged}>
        <Tab label="persons" />
        <Tab label="items" />
      </Tabs>
      <SwipeableViews index={tab} onChangeIndex={handleIndexChange}>
        <TabPanel value={tab} index={0} dir={theme.direction}>
          <PersonList />
        </TabPanel>
        <TabPanel value={tab} index={1} dir={theme.direction}>
          <ItemsList />
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default Switcher;

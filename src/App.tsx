import Summary from "./components/Summary";
import {
  AppBar,
  Box,
  Button as button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Dialog,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, useState } from "react";
import Switcher from "./components/Switcher";
import AddModify from "./components/AddModify";

const Button = styled(button)({
  margin: "1rem auto",
});

const App: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showAddNew, setShowAddNew] = useState<boolean>(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDialog = () => {
    setShowAddNew(false);
  };
  const handleOpenAddDialog = () => {
    setShowAddNew(true);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      {/* TODO: Add header */}
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar> */}
      <Grid container justifyContent="center">
        <Grid container flexDirection="column" md={6} xl={4} sm={10} item>
          <Switcher />
          <Button
            variant="contained"
            title="add new order"
            onClick={handleOpenAddDialog}
          >
            Add New Order
          </Button>
          <Dialog open={showAddNew} onClose={handleCloseDialog}>
            <AddModify onSave={handleCloseDialog} />
          </Dialog>
          <Summary />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

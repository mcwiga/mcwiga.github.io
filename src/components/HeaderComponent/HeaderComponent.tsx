import "./HeaderComponent.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

export function HeaderComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 0.5 }}>
      <AppBar position="static">
        <Toolbar
          disableGutters={true}
          sx={{ backgroundColor: "rgba(20, 16, 36, 0.9)" }}
        >
          {/* <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen((isOpen) => !isOpen)}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        slotProps={{
          paper: {
            className: "drawer",
          },
        }}
        open={drawerOpen}
        onClose={() => setDrawerOpen((isOpen) => !isOpen)}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "white", margin: "10px 0px" }}
        >
          Michael McGloin
        </Typography>
        <Button sx={{ color: "white" }}>Projects</Button>
        <Button sx={{ color: "white" }}>About Me</Button>
      </Drawer>
    </Box>
  );
}

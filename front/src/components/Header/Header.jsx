import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import logo from "../../assert/logo-hipay.png";
import HeaderStyle from "./HeaderStyle";
import Buttons from "../Common/Button/Buttons";
import SideBar from "../SideBar/SideBar";

function Header() {
  const [MenuBurgerOpen, setMenuBurgerOpen] = useState(false);

  const classes = HeaderStyle();
  const history = useHistory();

  const moveTo = (page) => {
    history.push(`/${page}`);
  };

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.logoWrapper}>
        <img className={classes.image} src={logo} alt="logo hipay" />
        <h2>Movies Achives</h2>
      </div>

      <MenuIcon
        className={classes.IconeBurger}
        onClick={() => setMenuBurgerOpen(!MenuBurgerOpen)}
        color="inherit"
      />

      <div className={classes.buttonWrapper}>
        <Buttons
          text="Home"
          OnClick={() => {
            setMenuBurgerOpen(!MenuBurgerOpen);
            history.push("/");
          }}
          size="medium"
          color="inherit"
        />
        <Buttons
          text="Research"
          OnClick={() => {
            setMenuBurgerOpen(!MenuBurgerOpen);
            moveTo("research");
          }}
          size="medium"
          color="inherit"
        />
      </div>

      <SideBar setMenuBurgerOpen={setMenuBurgerOpen} isOpen={MenuBurgerOpen} />
    </div>
  );
}

export default Header;

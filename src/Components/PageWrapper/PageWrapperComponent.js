import { NavLink } from "react-router-dom";

import logoIZ from "../../Assets/Pictures/logoIZ.png";
import leftArrow from "../../Assets/Pictures/leftArrow.png";

import classes from "./PageWrapperComponent.module.css";

const PageWrapperComponent = ({ removeShadow, returnArrow, children }) => {
  const classList = removeShadow
    ? `${classes.header}`
    : `${classes.header} ${classes.headerShadow}`;

  return (
    <div className={classes.wrapper}>
      <header className={classList}>
        {returnArrow && (
          <div className={classes.backArrow}>
            <NavLink to="/naslovna">
              <img src={leftArrow} alt="Strelica nazad na početnu stranicu" />
            </NavLink>
          </div>
        )}
        <div clasName={classes.logoContainer}>
          <img src={logoIZ} alt="Islamska zajednica u Bosni i Hercegovini" />
        </div>
        <div className={classes.headerTitleContainer}>
          <p className={classes.headerTitleBold}>Program za vođenje troškova</p>
          <p className={classes.headerTitle}>
            Medžlis islamske zajednice Gračanica
          </p>
          <p className={classes.headerTitle}>Džemat Golaći</p>
        </div>
      </header>
      {children}
    </div>
  );
};

export default PageWrapperComponent;

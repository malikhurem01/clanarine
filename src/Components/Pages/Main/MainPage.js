import PageWrapperComponent from "../../PageWrapper/PageWrapperComponent";

import budgetBalance from "../../../Assets/Pictures/stanjeBudzeta.png";
import budgetBalanceDonations from "../../../Assets/Pictures/stanjeBudzetaDonacije.png";
import budgetBalanceOtherIncome from "../../../Assets/Pictures/stanjeBudzetaOstaliPrihodi.png";
import allExpenses from "../../../Assets/Pictures/sviTroskovi.png";
import emailLogo from "../../../Assets/Pictures/emailLogo.png";
import odjavaLogo from "../../../Assets/Pictures/odjavaLogo.png";

import classes from "./MainPage.module.css";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <PageWrapperComponent>
      <div className={classes.mainContainer}>
        <div className={classes.itemsContainer}>
          <NavLink to="/clanarine">
            <div className={classes.mainItemContainer}>
              <img src={budgetBalance} alt="Stanje budžeta članarine" />
              <p>
                Pregled stanja Budžeta <br />- redovne članarine -
              </p>
            </div>
          </NavLink>
          <NavLink to="/#">
            <div className={classes.mainItemContainer}>
              <img src={budgetBalanceDonations} alt="Stanje budžeta donacije" />
              <p>
                Pregled stanja Budžeta <br />- Donacije -{" "}
              </p>
            </div>
          </NavLink>
          <NavLink to="/#">
            <div className={classes.mainItemContainer}>
              <img
                src={budgetBalanceOtherIncome}
                alt="Stanje budžeta ostali prihodi"
              />
              <p>
                Pregled stanja Budžeta <br /> - ostali prihodi -{" "}
              </p>
            </div>
          </NavLink>
        </div>
        <div className={classes.itemsContainer}>
          <NavLink to="/#">
            <div className={classes.mainItemContainer}>
              {" "}
              <img src={allExpenses} alt="Svi ukupni troškovi" />
              <p>svi ukupni troškovi</p>
            </div>
          </NavLink>
          <NavLink to="/email">
            <div className={classes.mainItemContainer}>
              {" "}
              <img src={emailLogo} alt="E-mail zahvale" />
              <p>e-mail zahvale</p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className={classes.mainItemContainer}>
              {" "}
              <img src={odjavaLogo} alt="Odjava" />
              <p>Odjava</p>
            </div>
          </NavLink>
        </div>
      </div>
    </PageWrapperComponent>
  );
};

export default MainPage;

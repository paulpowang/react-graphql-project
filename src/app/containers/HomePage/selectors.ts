import { createSelector } from "reselect";
import { IRootState } from "../../services/animeService/types";

const selectHomePage = (state: IRootState) => state.homePage;

export const makeSelectAnimePage = createSelector(
  selectHomePage,
  (homePage) => homePage.animePage
);

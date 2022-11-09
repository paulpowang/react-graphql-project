import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./HomePageSlice";
import HotAnime from "./hotAnime";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService
      .getAnimePage(0)
      .catch((error) => console.log("error", error));

    console.log("Anime Page", animePage);

    if (animePage) {
      setAnimePage(animePage);
    }
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
}

export default HomePage;

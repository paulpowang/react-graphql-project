import React from "react";
import { createSelector } from "reselect";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";
import styled from "styled-components";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  margin-bottom: 10em;
`;
const AnimeCover = styled.div`
  width: auto;
  height: 100%;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  font-size: 19px;
  margin-top: 8px;
  color: black;
`;
const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;
  if (isEmptyAnimePage) {
    return null;
  }
  return (
    <HotAnimeContainer>
      {animePage?.media?.map((anime) => {
        return (
          <AnimeItemContainer>
            <AnimeCover>
              <img src={anime?.coverImage?.extraLarge || ""} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          </AnimeItemContainer>
        );
      })}
    </HotAnimeContainer>
  );
}

export default HotAnime;

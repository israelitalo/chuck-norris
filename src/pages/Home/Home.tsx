import React, { useCallback, useEffect, useMemo, useState } from "react";

import NorrisGif from "../../assets/gifs/norris.gif";
import JokesCards from "../../components/JokesCards/JokesCards";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { Title } from "../../components/Title";
import { useSearchContext } from "../../contexts/searchContext";
import * as S from "./styles";
import { useSearchParams } from 'react-router-dom';

const Home: React.FC = () => {
  const { loadingSearch, hasError, isResult, getJokes } = useSearchContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      if(searchInput) {
        getJokes(searchInput);
        setSearchParams({ search: searchInput});
      } 
    },
    [getJokes, searchInput]
  );

  useEffect(() => {
    if(searchParams.get('search') && searchInput !== searchParams.get('search')){
      setSearchInput(searchParams.get('search') || '');
      getJokes(searchParams.get('search') || '');
      return;
    }
    if(!searchParams.get('search')){
      setSearchInput('');
      getJokes('');
      setSearchParams({
        search: ''
      });
    }
  },[searchParams]);

  return (
    <S.Container>
      <S.ContainerTitle>
        <div>
          <Title />
        </div>
        <div>
          <S.ImageNorris src={NorrisGif} aria-label="norris-gif" />
        </div>
      </S.ContainerTitle>
      <S.ContainerForm>
        <form onSubmit={handleSubmit}>
          <input
            value={searchInput}
            onChange={({ target }) => setSearchInput(target.value)}
            placeholder="search here"
            data-testid="input-search"
          />
          <button
            disabled={loadingSearch}
            type="submit"
            data-testid="button-search"
          >
            {loadingSearch ? "hold up" : "search"}
          </button>
        </form>
        {hasError && <span>{hasError}</span>}
      </S.ContainerForm>
      {loadingSearch ? <SpinnerLoading /> : isResult && <JokesCards />}
    </S.Container>
  );
};

export default Home;

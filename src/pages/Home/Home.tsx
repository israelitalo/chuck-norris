import React, { useCallback, useEffect, useMemo, useState } from "react";

import NorrisGif from "../../assets/gifs/norris.gif";
import JokesCards from "../../components/JokesCards/JokesCards";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { Title } from "../../components/Title";
import { useSearchContext } from "../../contexts/searchContext";
import * as S from "./styles";
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const { loadingSearch, hasError, isResult, getJokes } = useSearchContext();

  const location = useLocation();

  const searchParsed = useMemo(() => {
    const _searchParsed = parse(location.search);
    return _searchParsed['search']?.toString() || '';
  },[location]);

  const [searchInput, setSearchInput] = useState<string>(searchParsed);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      searchInput && getJokes(searchInput);
    },
    [getJokes, searchInput]
  );

  useEffect(() => {
    if(searchParsed && searchParsed !== searchInput){
      getJokes(searchParsed);
      setSearchInput(searchParsed);
    }
    if(!searchParsed){
      setSearchInput('');
      getJokes('');
    }
  },[searchParsed]);

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

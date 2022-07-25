import React, { useCallback, useState } from 'react';

import NorrisGif from '../../assets/gifs/norris.gif';
import JokesCards from '../../components/JokesCards/JokesCards';
import { SpinnerLoading } from '../../components/SpinnerLoading';
import { Title } from '../../components/Title';
import { useSearchContext } from '../../contexts/searchContext';
import * as S from './styles';

const Home: React.FC = () => {

    const { loadingSearch, hasError, isResult, getJokes } = useSearchContext();

    const [search, setSearch] = useState<string>('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((event) => {
        event.preventDefault();
        getJokes(search);
    },[getJokes, search]);

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
                        value={search}
                        onChange={({ target }) => setSearch(target.value)}
                        placeholder="search here"
                    />
                    <button disabled={loadingSearch} type='submit'>{loadingSearch ? 'hold up' : 'search'}</button>
                </form>
                {hasError && <span>{hasError}</span>}
            </S.ContainerForm>
            { loadingSearch 
                ? <SpinnerLoading /> 
                : isResult && <JokesCards />
            }
        </S.Container>
    );
};

export default Home;
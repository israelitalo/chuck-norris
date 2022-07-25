import React, { useCallback, useState } from 'react';

import NorrisGif from '../../assets/gifs/norris.gif';
import JokesCards from '../../components/JokesCards/JokesCards';
import { SpinnerLoading } from '../../components/SpinnerLoading';
import { Title } from '../../components/Title';
import { api } from '../../service/api';
import { JokeServiceType, JokeType } from '../../types/joke';
import * as S from './styles';

const Home: React.FC = () => {

    const [search, setSearch] = useState<string>('');
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
    const [isResult, setIsResult] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean | string>(false);
    const [jokes, setJokes] = useState<JokeType[]>([]);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((event) => {
        event.preventDefault();
        setLoadingSearch(true);
        const params = {
            query: search
        };
        api.get<JokeServiceType>('/search', { params })
        .then(response => {
            setJokes(response.data.result);
            setHasError(false);
        })
        .catch((error) => setHasError(error.response?.data?.message || 'erro inesperado'))
        .finally(() => {
            setLoadingSearch(false);
            setIsResult(true);
        });
    },[search])

    return (
        <S.Container>
            <S.ContainerTitle>
                <div>
                    <Title />
                </div>
                <div>
                    <S.ImageNorris src={NorrisGif} aria-label='norris-gif' />
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
                : isResult && <JokesCards jokes={jokes} />
            }
        </S.Container>
    );
};

export default Home;
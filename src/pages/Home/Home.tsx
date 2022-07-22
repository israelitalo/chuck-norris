import React, { useCallback, useState } from 'react';
import JokesCards from '../../components/JokesCards/JokesCards';

import { Title } from '../../components/Title';
import { api } from '../../service/api';
import { JokeServiceType, JokeType } from '../../types/joke';
import * as S from './styles';

const Home: React.FC = () => {

    const [search, setSearch] = useState<string>('');
    const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
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
        })
        .finally(() => setLoadingSearch(false));
    },[search])

    return (
        <S.Container>
            <Title />
            <S.ContainerForm>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={search}
                        onChange={({ target }) => setSearch(target.value)}
                        placeholder="search here"
                    />
                    <button disabled={loadingSearch} type='submit'>{loadingSearch ? 'hold up' : 'search'}</button>
                </form>
            </S.ContainerForm>
            <JokesCards jokes={jokes} />
        </S.Container>
    );
};

export default Home;
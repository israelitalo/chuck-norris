import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

import { useSearchContext } from '../../contexts/searchContext';
import { NotFoundItems } from '../NotFoundItems';
import * as S from './styles';

const JokesCards: React.FC = () => {

    const { jokes } = useSearchContext();
    
    return (
        <section data-testid="joke-component">
            <S.Count>
                {jokes.length} itens
            </S.Count>
            {jokes.length > 0 ? 
                (<S.ContainerCards>
                    {jokes.map((joke) => (
                        <S.Card key={joke.id} href={joke.url} target="_blank">
                            <RiDoubleQuotesL /> <p>{joke.value}</p>
                        </S.Card>
                    ))}
                </S.ContainerCards>)
            : <NotFoundItems /> }
        </section>
    );
};

export default JokesCards;
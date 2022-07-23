import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

import { JokeType } from '../../types/joke';
import { NotFoundItems } from '../NotFoundItems';
import * as S from './styles';

interface JokesCardProps {
    jokes: JokeType[];
}

const JokesCards: React.FC<JokesCardProps> = ({jokes}) => {
    return (
        <>
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
        </>
    );
};

export default JokesCards;
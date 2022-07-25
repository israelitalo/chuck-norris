import React from 'react';
import * as S from './styles';

const Title: React.FC = () => {
    return (
        <S.Title data-testid="title-application">
            <h1>
                Search something about 
                <span>Chuck Norris</span>
            </h1>
        </S.Title>
    );
};

export default Title;
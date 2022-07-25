import React from 'react';
import * as S from './styles';

const SpinnerLoading: React.FC = () => {
    return (
        <S.Container data-testid="spinner">
            <S.Spinner />
        </S.Container>
    );
};

export default SpinnerLoading;
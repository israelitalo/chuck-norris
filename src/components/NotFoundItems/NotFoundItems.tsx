import React from 'react';
import { MdOutlineSearchOff } from 'react-icons/md';

import * as S from './styles';

const NotFoundItems: React.FC = () => {
    return (
        <S.Container>
            <h2>Not found items</h2>
            <MdOutlineSearchOff data-testid="not-found-items" size={60} color="#2151a1" />
        </S.Container>
    );
};

export default NotFoundItems;
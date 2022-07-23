import React from 'react';
import { MdOutlineSearchOff } from 'react-icons/md';

import * as S from './styles';

const NotFoundItems: React.FC = () => {
    return (
        <S.Container>
            <h2>Not found items</h2>
            <MdOutlineSearchOff size={60} color="#5333ed" />
        </S.Container>
    );
};

export default NotFoundItems;
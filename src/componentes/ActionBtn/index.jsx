import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../Contexto';

const ButtonS = styled.button`
    width: 180px;
    font-size: 2rem;
    text-transform: uppercase;
    border-radius: 12px;
    height: 50px;
    font-weight: bold;
    color: ${ props => props.$main ? 'var(--main-blue)' : 'var(--secondary-white)' };
    box-shadow: ${ props => props.$main ? 'inset 0 0 12px 2px #29d' : '' };
    background: ${ props => props.$main ? 'var(--secondary-dark-blue)' : 'transparent' };
    border: ${ props => props.$main ? '2px solid var(--main-blue)' : '2px solid var(--secondary-white)' };

    &:disabled {
        border: 2px solid var(--main-gray);
        box-shadow: inset 0 0 12px 2px var(--main-gray);
        color: var(--secondary-white);
        cursor: not-allowed;
    }
`;

const ActionBtn = ({ children, main, type, action }) => {
    const { isFormValid } = useContext(GlobalContext);

    return <>
        {action ? (
            <ButtonS onClick={() => action()} type={type} $main={main}>
                {children}
            </ButtonS>    
            ) : (
            <ButtonS disabled={!isFormValid} type={type} $main={main}>
                {children}
            </ButtonS>
            )}
    </>
};

export default ActionBtn;

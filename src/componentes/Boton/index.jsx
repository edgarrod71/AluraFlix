import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const ImgS = styled.img`
    height: ${ props => props.$active ? '22px' : '100%' };
`

const LinkS = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center
    gap: 0.5em;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    padding: 8px 16px;
    text-decoration: none;
    color: ${ props => props.$active ? 'var(--main-blue)' : 'var(--secondary-white)' };
    border: ${ props => props.$active ? '4px solid var(--main-blue)' : 'none' };
    background: ${ props => props.$active ? 'var(--button-gray)' : 'none' };
    p {
        display: ${ props => props.$active ? 'block' : 'none' };
    }

    @media (width > 980px) {
        min-width: 180px;
        justify-content: center;
        border: ${ props => props.$active ? '3px solid var(--main-blue)' : '3px solid var(--secondary-white)' };
        border-radius: 12px;
        background: none;
        box-shadow: ${ props => props.$active ? 'inset 0 0 12px 2px #48b' : ''};

        p {
            display: block;
        }
    }
`;

const Boton = ({ iconActive, iconInactive, children, path }) => {
    const ubicacion = useLocation();
    const isActive = location.pathname === path;

    return <>
        <LinkS to={path} $active={isActive}>
            <ImgS
                $active={isActive}
                src={isActive ? iconActive : iconInactive}
                alt= {`icono de ${children}`}
            />
            <p>{children}</p>
        </LinkS>
    </>
}

export default Boton;

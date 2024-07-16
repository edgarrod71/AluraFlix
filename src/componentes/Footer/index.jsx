import styled from 'styled-components';
import { LogoStyles } from '../Header';

const ShadowS = styled.div`
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    background: var(--main-blue);
`;

const FooterS = styled.footer`
    position: relative;
    width: 100%;
    height: 120px;
    min-height: 120px;
    display: none;
    justify-content: center;
    align-items: center;
    background: var(--secondary-dark-blue);

    @media (width > 980px) {
        display: flex;
    }
`;

const Footer = ({logotipo}) => {
    return <>
        <FooterS>
            <ShadowS />
            <LogoStyles src={logotipo} alt='Logo AluraFlix' />
        </FooterS>
    </>
};

export default Footer;

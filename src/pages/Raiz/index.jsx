import { Outlet } from 'react-router-dom';
import Header from '../../componentes/Header';
import styles from './Raiz.module.css';
import GlobalContextProvider from "../../Contexto";
import logo from "/img/aluraflix.svg";
import Footer from '../../componentes/Footer';

const Raiz = () => {
    return <>
        <h1> hola antes </h1>
        <img src='/img/aluraflix.svg' />
        <main className={styles.container}>
            <Header logo={logo} />
            <GlobalContextProvider>
        <h1>Hola desde Raiz</h1>
                <Outlet />
            </GlobalContextProvider>
            <Footer logo={logo} />
        </main>
    </>
}

export default Raiz;

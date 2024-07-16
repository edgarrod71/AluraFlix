import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Raiz from './pages/Raiz';
import Home from './pages/Home';
import Add from './pages/Add';

const RutasApp = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Raiz />}>
                    <Route index element={<Home />} />
                    <Route path="add" element={<Add />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default RutasApp;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContextProvider } from '../contexts/searchContext';
import { Home } from '../pages/Home';

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={
                    <SearchContextProvider>
                        <Home />
                    </SearchContextProvider>} 
                />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRouters };
import { Routes, Route } from 'react-router-dom';

import { MoviePreview } from '../pages/MoviePreview';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MoviePreview />} />
        </Routes>
    );
}
import { Routes, Route } from 'react-router-dom';

import { MoviePreview } from '../pages/MoviePreview';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { CreateNote } from '../pages/CreateNote';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/preview/:id" element={<MoviePreview />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<CreateNote />} />
        </Routes>
    );
}
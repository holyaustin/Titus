import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppIndex from './AppIndex.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Token from './Token.tsx'
import Yield from "./Yield.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppIndex />} />
                <Route path="/token" element={<Token />} />
                <Route path="/yield" element={<Yield />} />
            </Routes>
        </BrowserRouter>
  </StrictMode>
);

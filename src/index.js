import React from 'react';
import { createRoot } from 'react-dom/client';
import BodyComponent from './components/body_component';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
<>
<BodyComponent/>
</>

);
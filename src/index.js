import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header.jsx';
import PostEditor from './pages/postEditor/PostEditor.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <br></br>
        <PostEditor/>
    </React.StrictMode>
);
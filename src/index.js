import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Post from './components/post';


ReactDOM.render(
(
<div className="content">
    <div className="panel">
        <div class="panel-header">
            <h1 className="panel-title">Hello World</h1>
        </div>
        <Post texto="Olá Mundo" title="Primeiro"/>
        <Post texto="Eu sou segundo Post" title="Segundo"/>
        <Post texto="Sou o ultimo post" title="Terceiro"/>
    </div>
</div>
),
 document.getElementById('root')
);


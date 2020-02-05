import React from 'react';
import TableProfissionais from "./tableprofissionais";

//outro jeito de exportar
//export default class App extends React.Componen{}
class App extends React.Component{
    //sempre que tiver uma classe de React Component chamados a função render que retornará um HTML.
    render(){
        return(
            <div>
                <h1>{this.props.texto}</h1>
                <TableProfissionais textoDois ="Eu sou uma tabela"/>
            </div>
            
        )
    }
}

export default App;

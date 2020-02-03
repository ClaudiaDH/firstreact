import React from 'react';

class Post extends React.Component{
    //sempre que tiver uma classe de React Component chamados a função render que retornará um HTML.
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.texto}</p>
            </div>
        )
    }
}

export default Post;

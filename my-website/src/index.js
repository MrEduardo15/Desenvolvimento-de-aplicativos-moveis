import React from "react";
import { createRoot } from "react-dom/client";

// function App(){
//     return <h1> APP </h1>
// }


// podemos compilar um elemnto dentro de app

// function App(){
//     return <Titulo/>
// }

// se quiser compilar dois elemenstos dentro de app

// function App(){
//     return (
//     <div> 
//         <Titulo/>
//         <Mensagem/>
//     </div>
//     )
// }

// function Titulo(){
//     return <h1>Olá titulo</h1>
// }

// function Mensagem(){
//     const meuEstilo = {
//         color: "red",
//         backgroundColor: "DodgerBlue",
//         padding: "14px",
//         fontSize: "20px"
//     }
//     return <p style={meuEstilo}>Olá, mensagem</p>
// }

function Box(){
    const meuEstilo = {
        fontsize: "14px",
        padding: "20px",
        width: "1850px",
        height: "30px",
        color: "green",
        position:"absolute",
        textAlign: 'center',
        top: "-5%",
        fontSize: "50px",
        border: "solid 2px blue",
        backgroundColor: "bisque"
    }
    return <p style={meuEstilo}>APRENDENDO REACT PARA DESENVOLVIMENTO WEB</p>
}

function Bar() {
    
    const containerStyle = {
        display: "flex",          
        justifyContent: "center", 
        gap: "20px",              
        width: "100%",            
        backgroundColor: "skyblue",
        padding: "8px",
        top: "9%",
        position: "absolute"      
    };

    
    const itemStyle = {
        fontSize: "10px",         
        color: "red",
        margin: 0                 
    };
    
    return ( 
        <div style={containerStyle}>
            <p style={itemStyle}>HOME</p>
            <p style={itemStyle}>LIVROS</p>
            <p style={itemStyle}>VÍDEOS</p>
            <p style={itemStyle}>CONTATOS</p>
        </div>
    ); 
}

function Title(){
    const titleStyle = {
        width: "1850px",
        position:"absolute",
        textAlign: 'center',
        top: "15%",
        fontSize: "30px",

    }
    return <h1 style={titleStyle}>Introdução</h1>
}


function Text1(){
    const textStyle = {
        width: "1850px",
        position:"absolute",
        textAlign: 'center',
        top: "20%",
        fontSize: "30px",
        color: "purple"

    }
    return(<div style={textStyle}>
        <p>Com o React, você cria interfaces organizadas em componentes reutilizáveis, que
controlam tanto a exibição quanto o comportamento da aplicação. Ele permite
atualizar elementos de forma dinâmica, sem recarregar a página inteira, além de
facilitar a aplicação de estilos, animações e recursos interativos de maneira escalável.
(Fonte Usada: SansSerif, tamanho 20pt)</p>

<p>O React é uma das bibliotecas mais populares do ecossistema JavaScript e tornou-se
referência no desenvolvimento de interfaces modernas. Sua principal força está na
criação de componentes reutilizáveis, que tornam o código mais organizado e
facilitam a construção de aplicações escaláveis e de fácil manutenção. (Fonte Usada:
SansSerif, tamanho 20pt)</p>

    </div>) 
}

function Title1(){
    const titleStyle = {
        width: "1850px",
        position:"absolute",
        textAlign: 'center',
        top: "50%",
        fontSize: "30px",

    }
    return <h1 style={titleStyle}>Livros</h1>
}

function BookImages() {
    // Componentes React devem começar com letra MAIÚSCULA (BookImages)
    
    const containerStyle = {
        position: "relative", // Alterado para relative para servir de base para o filho
        width: "100%",
        minHeight: "400px",   // Garante que o contêiner tenha espaço vertical na tela
        marginTop: "20px"
    };

    const imgStyle = {
        position: "absolute",
        top: "10%",          // Ajustado para não sumir no rodapé (90% + 100% jogava a imagem para baixo)
        left: "15%",         // Centraliza horizontalmente combinando com o transform
        transform: "translateX(-50%)", 
        width: "250px",      // Define uma largura explícita para renderização correta
        height: "auto",      // Mantém a proporção original da capa do livro
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" // Sombra opcional para destacar o livro
    };

    return ( 
         <div style={containerStyle}>
             <img 
                 style={imgStyle}  
                 src="https://m.media-amazon.com/images/I/91YPcsFTbIL._AC_UF1000,1000_QL80_.jpg" 
                 alt="Capa do livro Learning Web Design"
             />
         </div>
     ); 
}







const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Box/>);

const bar = document.getElementById('bar');
const root1 = createRoot(bar)
root1.render(<Bar/>);

const title = document.getElementById('title');
const Titulo = createRoot(title)
Titulo.render(<Title/>);

const text = document.getElementById('text1');
const Text = createRoot(text)
Text.render(<Text1/>);

const title1 = document.getElementById('title1');
const Titulo1 = createRoot(title1)
Titulo1.render(<Title1/>);

const bookimage = document.getElementById('bookimage');
const Bookimage = createRoot(bookimage)
Bookimage.render(<BookImages/>);




// function Welcome() {
//     return <div>Ola Mundo!</div>;
// }

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Welcome />);
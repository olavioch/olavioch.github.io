class Navbar extends React.Component{
    render(){
        return(
            <nav className="navb">
                <span>Seja Bem Vindo!</span>
                <ul>
                    <li><a href="#perfil">Perfil</a></li>
                    <li><a href="#tecno">Tecnologias</a></li>
                    <li><a href="#porti">Portifolio</a></li>
                    <li><a href="#contatos">Contato</a></li>
                </ul>
            </nav>
        );
    }
}
class Perfildesc extends React.Component{
    render(){
        return(
            <div className="perfil-desc">
                "Meu nome é <b>Olavo</b>, tenho 24 anos e sou desenvolvedor web junior front-end.<br/>
                Nesse site quero apresentar minha trilha de aprendizado e profissionalismo."<br/>
            </div>
        );
    }
}
class Perfil extends React.Component{
    render(){
        return(
            <div className="site mt-2" id="perfil">
                <div className="site-cont">
                <div>
                    <Navbar/>
                    <Perfildesc/>
                    <a href="assets/curriculo/index.html" target="_blank" className="btn btn-primary"> Saber Mais </a>
                </div>
                    <img className="img_perfil mt-4" src="assets/profile.jpg"></img> 
                </div>
               
            </div>
        );
    }
}
class Tecnologias extends React.Component{
    render(){
        return(
        <div className = "site mt-2" id="tecno">
            <div className="site-cont tecnologia">
                <div className="tecno">
               <span>Minhas Tecnologias:</span>
                <ul class="tecno-list">
                    <li>Html5</li>
                    <li>Css3</li>
                    <li>JavaScript</li>
                    <li>Git</li>
                    <li>Sass</li>
                    <li>Webpack</li>
                    <li>React</li>
                </ul>
                </div>
            </div>
        </div>    
        );

    }
}
class Portifolio extends React.Component{
    Carrosel(){
        return(
              <div className="carrosel">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-dark rounded"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-dark rounded"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-dark rounded"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3" className="bg-dark rounded"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4" className="bg-dark rounded"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5" className="bg-dark rounded"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block m-auto img-car" src="assets/desafio.jpeg" alt="..."/>
    <div class="carousel-caption d-flex justify-content-center d-md-block">
    <h1 className="mb-3">Desafio</h1>
  </div>
    </div>
    <div className="carousel-item">
    <img className="d-block m-auto img-car" src="assets/login.jpeg" alt="Second slide"/>
    <div class="carousel-caption d-flex justify-content-center d-md-block">
        <h1 className="mb-3">Login</h1>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block m-auto img-car" src="assets/quis.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-flex justify-content-center d-md-block">
        <h1 className="mb-3">Quiz</h1>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block m-auto img-car" src="assets/coca.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-flex justify-content-center d-md-block">
        <h1 className="mb-3">Coca-Cola</h1>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block m-auto img-car" src="assets/king.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-flex justify-content-center d-md-block">
        <h1 className="mb-3">Kingston</h1>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block m-auto img-car" src="assets/food.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-flex justify-content-center d-md-block">
        <h1 className="mb-3">Awax</h1>
    </div>
    </div>
  </div>
</div> 
</div>               
        );
    }
    render(){
        return(
            <div className="site mt-2" id="porti">
                <div className="site-cont p-4">
                    <div className="w-100 m-3">
                    <div className="mb-3 ml-1 mb-3"><span>Meu Portifolio</span></div>
                    <div className="m-auto">
                        <this.Carrosel/>
                    </div>
                    <h4 className="mt-5 p-3">Projetos</h4>
                    <div className="porti-grid">
                        <div className="grid-item">
                            <a href="projetos/uiux/index.html" target="_blank">Desafio</a>
                        </div>
                        <div className="grid-item">
                            <a href="projetos/formulario/index.html" target="_blank">Correios</a>
                        </div>
                        <div className="grid-item">
                            <a href="projetos/quiz/index.html" target="_blank">Quiz</a>
                        </div>
                        <div className="grid-item">
                            <a href="projetos/coca/index.html" target="_blank">Coca Cola</a>
                        </div>
                        <div className="grid-item">
                            <a href="projetos/kingston/index.html" target="_blank">Kingston</a>
                        </div>
                        <div className="grid-item"><a href="projetos/awa/index.html" target="_blank">Awax Food</a></div>
                    </div>
                    </div>    
                </div>                
            </div>
        );
    }
}
class Contatos extends React.Component{
    render(){
        return(
            <div className="site mt-2" id="contatos">
            <div className="site-cont p-4 mt-2">
                <div className="d-icon">
                <span className="contato">Contatos:</span>
                    <div className="style-icon"><div className="icon"></div><div className="texto">
                        <a href="https://www.linkedin.com/in/olavo-argemiro-12bb981b1/" target="_blank">acesse aqui</a></div></div>
                    <div className="style-icon"><div className="icon"></div><div className="texto">(21)97651-0776</div></div>
                    <div className="style-icon"><div className="icon"></div><div className="texto" >olavio_champions@gmail.com</div></div>
                </div>
            </div>                
        </div>
        );
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
          <div>
              <Perfil/>
              <Tecnologias/>
              <Portifolio/>
              <Contatos/>
          </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));

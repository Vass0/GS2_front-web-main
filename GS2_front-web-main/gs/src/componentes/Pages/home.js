import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Seção Carrosel
const data = [
  {
   image: require('../../img/fg257641.jpg'), 
  },
  {
    image:require('../../img/depositphotos_317594646-stock-illustration-cartoon-diabetes-symptoms-infographics-concept.jpg'), 
   },
   {
    image:require('../../img/imagem-home.png'), 
   } 
]

// Fim seção carrosel
function Home() {
  const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(JSON.parse(localStorage.getItem('usuario')));

  useEffect(() => {
    // Verificar a autenticação aqui (por exemplo, verificar se o usuário está no LocalStorage)
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    setUsuarioAutenticado(usuario);

    if (!usuario) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpar o LocalStorage e redirecionar para a página de login
    localStorage.removeItem('usuario');
    setUsuarioAutenticado(null);
    navigate('/login');
  };

  return (
    <><center>
      <h1 className='bemVindo'>Bem-vindo à página inicial {usuarioSalvo.nome}!</h1>
      <p>Você está logado com sucesso.</p>
      <p>O nosso projeto está está sendo desenvolvido para ampliar informações e a relevância da Diabetes no Brasil fornecendo</p> 
      <p>resultados em tempo real, dicas personalizadas, e acesso a profissionais de saúde online, visando cuidado abrangente.</p>
      <p></p>
      

      <div className='divCarrosel'>
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
        {data.map((slide, i) => (
          <Carousel.Item key={i}>
            <img
              className="tamanhoImgCarrosel"
              src={slide.image}
              alt={slide.caption}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </center></>
    
  );
}

export default Home;
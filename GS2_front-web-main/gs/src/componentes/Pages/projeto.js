import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Diabetesimg from '../../img/grupo2.png';

const TextTdah = styled.h1`
    color: #1B1B1B;
    text-align: left;
    align-items: left;
    font-weight: 10;
    margin-left: 20vw;
`

const SecContainer = styled.section`
    display: flex;
    margin:0 auto;
    width: 100%;
    max-width: 1920px;
`

const DivTopics1 = styled.div`
    display: inline-block;
    margin:0 0 0 7vw;
    width:30%;
`

const DivTopics2 = styled.div`
    display: inline-block;
    margin:auto;
    margin-top: 100px;
`

const DivInline = styled.div`
    display: inline-flex;
    margin:0;
    text-align: center;
    align-items: center;
`
const ColorBlack = styled.h3`
    color:black;
    font-weight: 500;
`
const DivSpace = styled.div`
    width:100%;
    height: 30px;
`

function Diabetes() {

    const navigate = useNavigate();

     useEffect(() => {
    // Verificar a autenticação aqui (por exemplo, verificar se o usuário está no LocalStorage)
    const usuarioAutenticado = JSON.parse(localStorage.getItem('usuario'));

    if (!usuarioAutenticado) {
      // Se não estiver autenticado, redirecionar para a página de login
      navigate('/Login');
    }
  }, [navigate]);

    return (
        <div>
            <DivSpace/><DivSpace/>
            <TextTdah>Nosso Projeto</TextTdah>
            <DivSpace/>
            <SecContainer>
                <DivTopics1>
                    <div>
                        <DivInline><ColorBlack>O que é solução?</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        A solução proposta consiste no desenvolvimento de um dispositivo inovador dedicado à medição do nível
 de glicose dos usuários, integrado a um sistema online abrangente. Este projeto visa oferecer uma
 abordagem para monitoramento e gerenciamento dos níveis de glicose, proporcionando suporte proativo e personalizado aos usuários.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack>O que ela fará?</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        A solução desempenhará um papel crucial na monitorização 
contínua da glicose, enviando automaticamente os resultados para um site dedicado. 
Além disso, a plataforma oferecerá sugestões e orientações aos usuários com base nos resultados obtidos. 
Se os níveis de glicose estiverem fora da faixa normal, o sistema fornecerá recomendações, como "Consulte um especialista" , 
e em um futuro próximo a solução incluirá um chat público para permitir a interação entre os usuários, também um portal que 
conectará os usuários a profissionais de saúde para atendimento online.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack>Como funcionará?</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        O dispositivo realizará medições precisas do nível de glicose e, por meio de uma conexão segura, transmitirá esses dados para o 
site correspondente. O sistema online analisará os resultados em tempo real e fornecerá feedback imediato aos usuários. Se necessário, 
as sugestões de ação serão personalizadas, indicando conselhos simples. A presença do chat público e do portal de profissionais de saúde
 ampliará as opções de suporte, facilitando a comunicação entre usuários e especialistas.
                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack></ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        
                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack></ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        
                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack></ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        
                        </p>
                    </div>
                </DivTopics1>
                <DivTopics2>
                    <img src={Diabetesimg} alt="Descrição da imagem" />
                </DivTopics2>
            </SecContainer>
            <DivSpace/><DivSpace/><DivSpace/><DivSpace/>
            
        </div>
    );
  }
  
   export default Diabetes;
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TdahImage from '../Images/image2';

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
            <TextTdah>Diabetes</TextTdah>
            <DivSpace/>
            <SecContainer>
                <DivTopics1>
                    <div>
                        <DivInline><ColorBlack>O que é?</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        Diabetes Mellitus é uma doença caracterizada pela elevação da glicose no sangue (hiperglicemia). Pode ocorrer devido a defeitos na secreção ou na ação do hormônio insulina, que é produzido no pâncreas, pelas chamadas células beta . A função principal da insulina é promover a entrada de glicose para as células do organismo de forma que ela possa ser aproveitada para as diversas atividades celulares. A falta da insulina ou um defeito na sua ação resulta portanto em acúmulo de glicose no sangue, o que chamamos de hiperglicemia.

                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack>Prevalência da Diabetes</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        Mundialmente, o diabetes se tornou um sério problema de saúde pública, cujas previsões vêm sendo superadas a cada nova triagem. Por exemplo, em 2000, a estimativa global de adultos vivendo com diabetes era de 151 milhões. Em 2009, havia crescido 88%, para 285 milhões. Em 2020, calcula-se que 9,3% dos adultos, entre 20 e 79 anos (assombrosos 463 milhões de pessoas) vivem com diabetes. Além disso, 1,1 milhão de crianças e adolescentes com menos de 20 anos apresentam diabetes tipo 1.

                        </p>
                    </div>
                    <div>
                        <DivInline><h3></h3><ColorBlack>Como funcionará?</ColorBlack></DivInline>
                        <p className='textoJustificado'>
                        De acordo com um estudo conduzido pela Organização Pan-Americana da Saúde (OPAS), a crescente incidência de obesidade, sedentarismo e hábitos alimentares inadequados, entre outros fatores, levou a mais do que triplicar o número de pessoas diagnosticados com diabetes nas Américas ao longo das últimas três décadas.

É importante entender que pelo menos 62 milhões de pessoas vivem com diabetes nas Américas, um número que é provavelmente muito maior, dado que cerca de 40% dos indivíduos não sabem que têm a doença. Se as tendências atuais persistirem, o número de pessoas com diabetes nesta região poderá atingir os 109 milhões até 2040.

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
                    <TdahImage/>
                </DivTopics2>
            </SecContainer>
            <DivSpace/><DivSpace/><DivSpace/><DivSpace/>
            
        </div>
    );
  }
  
   export default Diabetes;
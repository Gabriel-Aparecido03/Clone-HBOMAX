import React from 'react';

import logo from './assets/images/hbo-max-h-w-l.svg'
import separator from './assets/images/hero_promo_purpline.png'

import paulistao from './assets/images/paulistao_0.png'
import euphoria from './assets/images/euphoria_996x576_0.jpg'
import matrix from './assets/images/matrix_996x576-pt_0.png'
import jorel from './assets/images/jorel.jpg'

import harryPotter from './assets/images/harrypotterreunion_996x576-pt_0(1).png'
import bilbardo from './assets/images/bilardo_0.jpg'
import gildeage from './assets/images/gildedage_996x576_0.webp'
import superman from './assets/images/peacemaker_996x576-pt_0.webp'
import ondaboa from './assets/images/ondaboa_996x576_0.webp'


import theFallout from './assets/images/the-fallout-bpo.png'


import './style/style.scss'
import {AiOutlineMobile} from 'react-icons/ai'
import {BsTabletLandscape,BsLaptop,BsTv} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
        <div className="header-content">
        <header>
          <img src={logo} alt="logo" />
          <div className="header-buttons-content">
            <button className='entry-button'><p>ENTRAR</p></button>
            <button className='subscribe-button'><p>ASSINE AGORA</p></button>
          </div>
        </header>
        </div>
        <div className="principal-content">

          <div className="intro-content">
            <div className="header-content">
            </div>
            <div className="text-content">
              <h1>CURTAS AS MELHORES HISTÓRIAS</h1>
              <h2>PARA O MUNDO TODO</h2>
              <img src={separator} alt="" />
              <p>Assinatura a partir de </p>
              <div className="price-content">
                <p>R$ 14,16<span>/mês*</span> </p>
              </div>
              <button><p>ASSINE AGORA</p></button>
              <p className='details'>*aplicável da plano anual com o pagamento antecipado.</p>
            </div>
          </div>

          <div className="pricing-content">
            <h1>Conheça nossos planos e economize na assinatura trimestral ou anual com o pagamento antecipado</h1>
            <div className="change-pricing-content">
              <div className="mounth-change">
                <div className="buttons-content">
                  <button>1 Mês</button>
                  <button>3 Mês</button>
                  <button>12 Mês</button>
                </div>
                <div className="text-content">
                  <p></p>
                  <p>Economize 11%</p>
                  <p>Economize 33%</p>
                </div>
              </div>
              <div className="price-content">

                <div className="screens-content">
                  <div className="price-and-type">
                    <div className="types">
                      <h1>Mobile</h1>
                      <div className="price">
                        <p>R$ 19,90<span> / mês</span></p>
                      </div>
                      </div>
                    </div>
                    <div className="types-content">
                        <AiOutlineMobile color='white' fontSize='1.4rem'/>
                        <BsTabletLandscape color='white' fontSize='1.4rem'/>
                  </div>
                  <div className="spec">
                    <ul>
                      <li>+ Aproveite em smartphones e tablets, onde quiser;</li>
                      <li>+ Assista em 1 tela por vez;</li>
                      <li>+ Tenha conteúdo em resolução adaptada para cada dispositivo;</li>
                      <li>+ Baixe suas séries e filmes favoritos, assista onde e quando quiser;</li>
                      <div className="button-content">
                        <button><p>ESCOLHE O PLANO MOBILE</p></button>
                      </div>
                    </ul>
                    
                  </div>
                </div>

                <div className="screens-content">
                  <div className="price-and-type">
                    <div className="types">
                      <h1>Multitelas</h1>
                      <div className="price">
                      <p>R$ 27,90<span> / mês</span></p>
                    </div>
                    </div>
                    <div className="types-content">
                        <AiOutlineMobile color='white'fontSize='1.4rem'/>
                        <BsTabletLandscape color='white'fontSize='1.4rem' />
                        <BsLaptop color='white' fontSize='1.4rem'/>
                        <BsTv fontSize='1.4rem' color='white'/>
                      </div>
                  </div>
                  <div className="spec">
                    <ul>
                      <li>+ Aproveite em todos os seus dispositivos;</li>
                      <li>+ Assista em até 3 telas ao mesmo tempo;</li>
                      <li>+ Tenha conteúdo em alta definição, com qualidade 4K;</li>
                      <li>+ Baixe suas séries e filmes favoritos, assista onde e quando quiser;</li>
                      <li>Crie até 5 perfis diferentes.</li>
                      <div className="button-content">
                      <button><p>ESCOLHE O PLANO MOBILE</p></button>
                    </div>
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="films-slide">
          <h1>Alerta de spoiler: a HBO Max</h1>
         <div className="tracker">
         <div className="films-collections">
            
              
            <div className="film">
              <img src={paulistao} alt="paulistão no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
          
            <div className="film">
              <img src={euphoria} alt="euphoria no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
          
            <div className="film">
              <img src={harryPotter} alt="Harry Potter no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
          
            <div className="film">
              <img src={ondaboa} alt="onda boa no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
        
        
            <div className="film">
              <img src={bilbardo} alt="bilbardo no HBO MAX" />
              <h1>17 de feveiro</h1>
            </div>
          
          
            <div className="film">
              <img src={jorel} alt="Irmão do Jorel no HBO MAX" />
              <h1>25 feveiro</h1>
            </div>
          
          
            <div className="film">
              <img src={superman} alt="superman no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
          
            <div className="film">
              <img src={matrix} alt="matrix no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
          
            <div className="film">
              <img src={gildeage} alt="gilddeage no HBO MAX" />
              <h1>disponível agora</h1>
            </div>
          
      </div>
         </div>
        </div>
      </div>
      
  );
}

export default App;

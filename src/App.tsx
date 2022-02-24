import React from 'react';
import logo from './assets/images/hbo-max-h-w-l.svg'
import separator from './assets/images/hero_promo_purpline.png'
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
                      <div className="types-content">
                        <AiOutlineMobile color='white' fontSize='1.4rem'/>
                        <BsTabletLandscape color='white' fontSize='1.4rem'/>
                      </div>
                    </div>
                    <div className="price">
                      <p>R$ 19,90<span> / mês</span></p>
                    </div>
                  </div>
                  <div className="spec">
                    <ul>
                      <li>+ Aproveite em smartphones e tablets, onde quiser;</li>
                      <li>+ Assista em 1 tela por vez;</li>
                      <li>+ Tenha conteúdo em resolução adaptada para cada dispositivo;</li>
                      <li>+ Baixe suas séries e filmes favoritos, assista onde e quando quiser;</li>
                    </ul>
                    <button>ESCOLHE O PLANO MOBILE</button>
                  </div>
                </div>

                <div className="screens-content">
                  <div className="price-and-type">
                    <div className="types">
                      <h1>Multitelas</h1>
                      <div className="types-content">
                        <AiOutlineMobile color='white'fontSize='1.4rem'/>
                        <BsTabletLandscape color='white'fontSize='1.4rem' />
                        <BsLaptop color='white' fontSize='1.4rem'/>
                        <BsTv fontSize='1.4rem' color='white'/>
                      </div>
                    </div>
                    <div className="price">
                      <p>R$ 27,90<span> / mês</span></p>
                    </div>
                  </div>
                  <div className="spec">
                    <ul>
                      <li>+ Aproveite em todos os seus dispositivos;</li>
                      <li>+ Assista em até 3 telas ao mesmo tempo;</li>
                      <li>+ Tenha conteúdo em alta definição, com qualidade 4K;</li>
                      <li>+ Baixe suas séries e filmes favoritos, assista onde e quando quiser;</li>
                      <li>Crie até 5 perfis diferentes.</li>
                    </ul>
                    <button>ESCOLHE O PLANO MOBILE</button>
                  </div>
                </div>



                
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

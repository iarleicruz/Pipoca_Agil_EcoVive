import './DescricaoProdutos.css';
import imgCopao from './assets/1.png';
import imgCopo1 from './assets/btn1.png';
import imgCopo2 from './assets/btn2.png';
import imgCopo3 from './assets/btn3.png';
import imgCopo4 from './assets/btn4.png';
import imgEstrelas from './assets/estrelas.png';
import imgCarrinho from './assets/carrinho.png'
import imgCompartilhar from './assets/compart.png'
import imgCor from './assets/cor.png'
import carVerde from './assets/carVerde.png'
import imgCaixinha from './assets/caixinha.png'
import imgSimbolo from './assets/simbolo.png'
import imgSeta from './assets/seta.png'
import imgInfo from './assets/inf.png'
import imgComponente from './assets/componente.png'
import imgCert from './assets/cert.png'
import imgCarro from './assets/carPreto.png'



function DescricaoProdutos(){
    return (

        <div className='descricaoProd__container'>
   <nav>
        <ul>
            <li>Inicio</li>
            <li>/</li>
            <li>Produtos</li>
            <li>/</li>
            <li>Mesa do Centro de Madeira Depositada</li>
       </ul>
       
    </nav>
    <p> <img src={imgSeta} alt="imagem hero"/>Voltar aos produtos</p>
               <div className='descricao__imagensProduto'>
                     <div className="descricaoProd__imagem">
                      <img className="imgCopao" src={imgCopao} alt="imagem hero"/>
                      <img className="img__cert" src={imgCopo1} alt="imagem certificado"/>
                      <img className="img__cert" src={imgCopo2} alt="imagem certificado"/>
                      <img className="img__cert" src={imgCopo3} alt="imagem certificado"/>
                      <img className="img__cert" src={imgCopo4} alt="imagem certificado"/>
                    </div>

                    <div className="descricaoProd__text">
                      <h2>Copo Reutilizável de Bambu</h2>
                      <p>Copo ecológico feito de bambu <br/> natural, perfeito para bebidas</p>

                           <div className="descricaoProd__imgEstrelas">
                              <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                              <p>4.8 (124 avaliações)</p>
                           </div>

                           <div className='descricaoProd__preco'>
                            <div className='descricaoProd__preco__valor'>
                            <p><strong>R$ 29,90</strong></p>
                            <p className='line-through'> R$ 39,90 </p>
                            <p><span>-25%</span></p>
                            </div>
                            <p>Em estoque (15 unidades)</p>
                           </div>

                           <div className='descricaoProd__button'>
                            <p>Cor: Natural</p>
                            <button>Natural</button>
                            </div>

                            <div className='descricaoProd__buttonQuant'>
                            <p>Quantidade</p>
                             <div className='descricaoProd__buttonQuant__MaisMenos'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                            </div>
                             </div>
                            <div className='descricaoProd__buttonAd'>
                            <button> <img src= {imgCarrinho} alt="" />Adicionar ao Carrinho</button>
                            <button> <img src= {imgCor} alt="" />Favoritar</button>
                            <button> <img src={imgCompartilhar} alt="" />Compartilhar</button>
                            </div>

                            <div className='descricaoProd__frete'>
                                <div className="frete">
                                  <img src={carVerde} alt="" />
                                <p><strong>Frete Grátis</strong></p>
                                </div>
                                <p>Entrega em 5-7 dias úteis - Entrega carbono neutro</p>
                             </div>

                            <div className='descricaoProd__garantia'>
                              <div className='descricaoProd__garantia__1'>
                                  <img src={imgSimbolo} alt="" />
                                <p>2 anos de garantia</p>
                              </div>

                              <div className='descricaoProd__garantia__2'>
                                  <img src={imgCaixinha} alt="" />
                                <p>30 dias para devolução</p>
                              </div>
                              
                             </div>
              </div>
                            
               </div>
               <div className='descricao__completaProduto'>
                 <nav>
                  <ul>
                      <li><img src={imgInfo} alt="" />Descrição </li>
                      <li><img src={imgComponente} alt="" />Atributos Circulares</li>
                      <li><img src={imgCert} alt="" />Certificações</li>
                      <li><img src={imgCarro} alt="" />Entrega</li>
                 </ul>
               </nav>
               <h2>Descrição Completa Produto</h2>
               <p>Copo reutilizável de bambu cultivado de forma sustentável com acabamento natural e livre de químicos tóxicos. Produto desenvolvido com foco na redução
                de resíduos plásticos, utilizando fibra de bambu renovável e processos de producção ecologicamente responsáveis.
               </p>

               <h3>Características Principais:</h3>
               <ul>
                <li>Bambu orgânico certificado FSC</li>
                <li>Acabamento com cera natural de carnaúba</li>
                <li>Design ergonômico com tampa hermética removível</li>
                <li>Embalaegm compostável feita de fibra vegetal</li>
               </ul>
              </div>
              
              
        </div>

    )
}

export default DescricaoProdutos;
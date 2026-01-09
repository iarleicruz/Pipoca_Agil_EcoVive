import HeroProdutos from '../components/Produtos/HeroProdutos';
import FiltroProdutos from '../components/Produtos/FiltroProdutos'
// import TransEmpresas from '../components/Produtos/TransEmpresas'
// import NossosProdutos from '../components/Produtos/NossosProdutos'


function Produtos(){
    return(
          <div>
             {/* <HeroProdutos />
           <NossosProdutos />
           <EcoviveProdutos />
           <TransEmpresas /> */}
              <HeroProdutos />
        <FiltroProdutos />
          </div>
    )
}
export default Produtos;
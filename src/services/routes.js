import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import CadastroAdmin from "../pages/CadastroAdmin";
import Login from "../pages/Login";
import LoginAdmin from "../pages/LoginPageAdmin";
import AdminController from "../pages/AdminController";
import AdminCadastroProdutos from "../pages/AdminCadastroProdutos";
import Pedidos from "../pages/Pedido";
import PoliticadePrivacidade from "../pages/PoliticasdePrivacidade";
import Favoritos from "../pages/Favoritos";
import Minhaconta from "../pages/Minhaconta";
import PaginaProduto from "../pages/PaginaProduto";
import AdminLogin from "../pages/LoginAdmin";
import Carrinho from "../pages/Carrinho";
import Loja from "../pages/Loja";
import Loja2 from "../pages/Loja2";
import Loja3 from "../pages/Loja3";
import Loja4 from "../pages/Loja4";
import Mudasenha from "../pages/Mudasenha";
import Contato from "../pages/Contato";
import Sobrenos from "../pages/sobrenos";
import Comocomprar from "../pages/Comocomprar";
import PerguntasFrequentes from "../pages/PerguntasFrequentes";

export default function RouteApp() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route exact path={"/cadastroAdmin"} component={CadastroAdmin}></Route>
      <Route exact path={"/login"} component={Login}></Route>
      <Route exact path={"/AdminLogin"} component={AdminLogin}></Route>
      <Route exact path={"/Contato"} component={Contato}></Route>
      <Route exact path={"/Sobrenos"} component={Sobrenos}></Route>
      <Route
        exact
        path={"/Admincontroller"}
        component={AdminController}
      ></Route>
      <Route exact path={"/create"} component={AdminCadastroProdutos}></Route>
      <Route exact path={"/LoginAdmin"} component={LoginAdmin}></Route>
      <Route exact path={"/Pedidos"} component={Pedidos}></Route>
      <Route exact path={"/Cadastro"} component={Cadastro}></Route>
      <Route exact path={"/comocomprar"} component={Comocomprar}></Route>
      <Route
        exact
        path={"/perguntasfrequentes"}
        component={PerguntasFrequentes}
      ></Route>
      <Route
        exact
        path={"/PoliticadePrivacidade"}
        component={PoliticadePrivacidade}
      ></Route>
      <Route
        exact
        path={"/PoliticadePrivacidade/comprasegura"}
        component={PoliticadePrivacidade}
      ></Route>
      <Route
        exact
        path={"/PoliticadePrivacidade/formasdepagamento"}
        component={PoliticadePrivacidade}
      ></Route>
      <Route
        exact
        path={"/PoliticadePrivacidade/entregaefrete"}
        component={PoliticadePrivacidade}
      ></Route>
      <Route
        exact
        path={"/PoliticadePrivacidade/arrependimento"}
        component={PoliticadePrivacidade}
      ></Route>
      <Route
        exact
        path={"/PoliticadePrivacidade/trocas"}
        component={PoliticadePrivacidade}
      ></Route>
      <Route exact path={"/favoritos"} component={Favoritos}></Route>
      <Route exact path={"/Minhaconta"} component={Minhaconta}></Route>
      <Route exact path={"/esqueciasenha"} component={Mudasenha}></Route>

      <Route exact path={"/Carrinho"} component={Carrinho}></Route>
      <Route exact path={"/loja/:produto"} component={Loja}></Route>
      <Route exact path={"/loja2/:categoria"} component={Loja2}></Route>
      <Route exact path={"/loja3/:desconto"} component={Loja3}></Route>
      <Route exact path={"/loja4/:search"} component={Loja4}></Route>
      <Route
        exact
        path={"/PaginaProduto/:_id"}
        component={PaginaProduto}
      ></Route>
    </Switch>
  );
}

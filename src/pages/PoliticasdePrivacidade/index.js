import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function PoliticadePrivacidade() {
  useEffect(() => {
    setTimeout(() => {
      if (
        document.location.pathname == "/politicadeprivacidade/entregaefrete" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2500,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/entregaefrete" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 6000,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname == "/politicadeprivacidade/arrependimento" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2400,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/arrependimento" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 5500,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname == "/politicadeprivacidade/trocas" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2085,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/trocas" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 4870,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname == "/politicadeprivacidade/comprasegura" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 2950,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname == "/politicadeprivacidade/comprasegura" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 7130,
          behavior: "smooth",
        });
      }
      if (
        document.location.pathname ==
          "/politicadeprivacidade/formasdepagamento" &&
        window.screen.width > 500
      ) {
        window.scrollTo({
          top: 3100,
          behavior: "smooth",
        });
      } else if (
        document.location.pathname ==
          "/politicadeprivacidade/formasdepagamento" &&
        window.screen.width < 500
      ) {
        window.scrollTo({
          top: 7490,
          behavior: "smooth",
        });
      }
    }, 1000);

    // console.log(document.location.pathname)
  }, []);

  return (
    <div className="container-politica">
      <Header back="#e06f84" />

      <div className="content-politica">
        <h2>POLÍTICAS DE PRIVACIDADE</h2>

        <p>
          Nós temos como objetivo ser um centro comercial virtual para a
          promoção e comercialização varejista de produtos e/ou serviços de
          joias e acessórios relacionadas à indústria. Ao acessar nosso site, o
          USUÁRIO adere automaticamente às disposições constantes neste
          documento, denominado Política de Privacidade, que deverá ser
          estritamente respeitado. Nossa loja está à disposição para esclarecer
          quaisquer dúvidas.
        </p>
        <p>DEFINIÇÕES</p>
        <p>
          1. USUÁRIO: Qualquer pessoa que navegue pelo nosso site. 2. CLIENTE:
          Todo USUÁRIO que estabelecer alguma compra ou utilizar algum
          vale-troca para aquisição de produtos em nosso site. 3. ÁREA PESSOAL
          RESTRITA: Seção do site acessada somente pelo USUÁRIO mediante
          fornecimento de login e senha. 4. LOGIN: Identificações escolhidas
          pelo USUÁRIO quando preenche o cadastro para acesso à nossa ÁREA
          PESSOAL RESTRITA e funcionalidades exclusivas do nosso site. 5. SENHA:
          Conjunto de caracteres que serve como prova de identidade do USUÁRIO,
          cujo conhecimento deve ser exclusivo e único. 6. DADOS CADASTRAIS:
          Conjunto de informações pessoais de um USUÁRIO de modo que o
          identifique dos demais, a exemplo do número de documento de identidade
          (RG ou RNE), cadastro de pessoa física (CPF), endereço residencial ou
          comercial, nome completo, dentre outros.
        </p>
        <p>NAVEGAÇÃO</p>
        <p>
          1. Nossa loja é melhor visualizada com uma resolução mínima de 1024
          pixels e é compatível com os navegadores: Microsoft Internet Explorer,
          versão 7 ou superiores; Mozilla Firefox, versão 3 ou superiores; e
          Google Chrome. 2. O USUÁRIO é responsável por realizar a
          instalação/habilitação de tais recursos em seu equipamento de
          informática, assim como por mantê-lo seguro, através da utilização de
          ferramentas de segurança lógica, tais como antivírus e firewall
          pessoal. 3. Salvo disposição diversa ou notificação, nosso site
          procurará manter todo o conteúdo disponível 24 (vinte e quatro) horas
          por dia, 07 (sete) dias por semana, com base no horário oficial de
          Brasília. Todavia, não garante o acesso contínuo ou sem interrupção ao
          site. 4. Eventualmente o site poderá não estar disponível devido a:
          4.1. Manutenções técnicas e/ ou operacionais que exijam a retirada do
          site do ar ou impossibilitem o seu acesso; 4.2. Casos fortuitos ou
          força maior; 4.3. Ações de terceiros que impeçam a disponibilização do
          site; 4.4. Interrupção ou suspensão dos serviços prestados pelas
          prestadoras de serviços de telecomunicações; 4.5. Ocorrências de
          falhas na transmissão e/ou roteamento no acesso à Internet, entre
          outros. 4.6. Organização de estoque e manutenção do site.
        </p>
        <p>CADASTRO</p>
        <p>
          1. A despeito de existirem páginas de livre navegação, a aquisição de
          quaisquer produtos e/ou serviços anunciados em nosso site somente se
          dará mediante a realização de um procedimento de cadastramento por
          parte do USUÁRIO. 1.1. Tal cadastramento implicará na criação de um
          perfil de navegação exclusivo, o que possibilitará ao USUÁRIO o acesso
          a uma área pessoal restrita, além da execução de atividades
          específicas e a participação em programas de fidelização. 1.2.
          Informações sobre o tratamento dos dados pessoais fornecidos no
          processo de cadastro poderão ser obtidas em nossa Política de
          Privacidade. 2. Ao efetuar o cadastramento, o USUÁRIO compromete-se a
          fornecer informações verdadeiras e atualizadas sobre sua pessoa, e de
          seu responsável legal, se menor de 18 (dezoito) anos, bem como a
          manter tais informações atualizadas. 2.1. O USUÁRIO, portanto, poderá
          visualizar e alterar seus dados cadastrais, posteriormente, a qualquer
          momento, mediante acesso à sua área pessoal restrita. 3. Durante o
          cadastramento, o USUÁRIO manifestará seu expresso consentimento com os
          Termos de Uso do nosso site , mediante um procedimento de validação
          eletrônica cujo registro será armazenado de forma segura. 4. O USUÁRIO
          poderá receber, em sua caixa de e-mail, uma mensagem referente à
          confirmação de seu cadastro em nosso site contendo um link de
          ativação. 5. Caso o USUÁRIO não concorde com os Termos de Uso do nosso
          site, não será possível que o mesmo realize as atividades inerentes
          aos perfis de navegação exclusiva. 6. Anteriormente ao lançamento
          oficial do nosso site, especificamente para fins de promoção do mesmo,
          o USUÁRIO poderá cadastrar seu endereço de correio eletrônico (e-mail)
          em uma lista de contatos de interessados em receber mensagens
          eletrônicas contendo informações e novidades (newsletters). 6.1. Após
          o lançamento oficial do nosso site, o USUÁRIO que não esteja inscrito
          na lista de envio de newsletters poderá se inscrever na mesma, a
          qualquer momento, mediante acesso à sua área pessoal restrita. 6.2. O
          USUÁRIO poderá se descadastrar de tal lista de envio de newsletters a
          qualquer momento, bastando, para isso, clicar no link de cancelamento
          contido no corpo da própria newsletter. 7. Durante o processo de
          cadastramento, o USUÁRIO deverá criar uma senha pessoal,
          intransferível e confidencial. 7.1. Esta senha deverá conter no mínimo
          6 (seis) caracteres, incluindo letras, números e caracteres especiais
          e ser de difícil adivinhação, não sendo recomendável o uso de
          sequências de letras e números, nomes de entes próximos e/ou datas
          especiais. 7.2. O USUÁRIO deverá zelar pela segurança de sua senha,
          devendo alterá-la imediatamente caso tome conhecimento ou desconfie de
          que a mesma tenha sido descoberta por terceiro. 7.3. Em caso de
          esquecimento, o USUÁRIO poderá requerer o envio de sua senha para seu
          e-mail cadastrado, no item “Esqueci Minha Senha”. 8. O USUÁRIO poderá
          cancelar seu cadastro, posteriormente, a qualquer momento, mediante
          acesso a sua área pessoal restrita no item cancelamento de cadastro.
          8.1. Eventuais casos de inadimplência do USUÁRIO serão tratados de
          forma independente, conforme previsto em nossa Política de Compra,
          parte integrante destes Termos de Uso. 8.2. Eventuais casos de
          apuração de responsabilidades cíveis e criminais de USUÁRIO infratores
          deste Termos de Uso serão tratados de forma independente.
        </p>
        <p>PROPRIEDADE INTELECTUAL</p>
        <p>
          1. Os conteúdos do nosso site, incluindo, mas não se limitando a,
          quaisquer programas, dados e arquivos, assim como o uso da expressão
          do nosso site como marca, nome empresarial e nome de domínio, são
          propriedades exclusivas do nosso site ou, eventualmente, estão
          adequadamente cobertas por licença/cessão de uso. 2. O simples acesso
          ao nosso site não confere ao USUÁRIO qualquer direito de uso sobre os
          conteúdos compreendidos como todo ou fração, que nele estejam,
          estiveram ou venham a estar disponíveis. 3. Portanto, os conteúdos
          exibidos em nosso site não poderão, de qualquer forma, serem copiados,
          distribuídos, reproduzidos ou divulgados, em qualquer meio, sob pena
          de responsabilidade civil e/ou criminal. 4. Autorizações para uso
          envolvendo a cópia dos conteúdos disponíveis em nosso site poderão ser
          obtidas mediante solicitação prévia e autorização formal, desde que as
          finalidades sejam estritamente pessoais, não comerciais e não envolvam
          modificação dos conteúdos. 5. Quaisquer conteúdos submetidos à
          publicação pelo USUÁRIO em nosso site serão de responsabilidade cível
          e criminal exclusiva do USUÁRIO e não poderão ser interpretados de
          nenhuma forma como um ato do site. 6. O nosso site, entretanto, se
          reserva ao direito de não publicar, assim como, remover quaisquer
          conteúdos considerados inadequados moralmente ou legalmente. 7. A
          eventual retirada, ainda que mediante solicitação, de qualquer
          conteúdo deverá ser sempre compreendida como uma demonstração de
          prevenção de dissabores e, jamais, como reconhecimento de qualquer
          infração pelo nosso site a direito de terceiros. 8. As imagens
          utilizadas em nosso site podem não refletir o tamanho original ou
          situação atual do conteúdo reproduzido, sendo meramente ilustrativas.
        </p>
        <p>DEVERES DO USUÁRIO</p>
        <p>
          1. O USUÁRIO assume todo o ônus e responsabilidade decorrentes de seus
          atos em nosso site, respondendo, ainda, pelos atos que terceiros
          praticarem em seu nome, por meio do uso de seu login e senha. 2. O
          USUÁRIO deverá indenizar o nosso site por quaisquer danos e prejuízos
          decorrentes de suas ações ou omissões que violem as disposições
          contidas nestes Termos de Uso ou as normas legais em vigor.
        </p>
        <p>LIMITAÇÕES DE RESPONSABILIDADE</p>
        <p>
          1. Em decorrência de questões operacionais, o nosso site está sujeito
          a eventuais problemas de interrupção, falha técnica e
          indisponibilidade de funcionamento temporário. 1.1. O nosso site se
          exime de qualquer responsabilidade pelos danos e prejuízos de toda
          natureza que possam decorrer da falta de disponibilidade ou de
          continuidade do funcionamento do site. 2. O nosso site envida seus
          maiores esforços para garantir a segurança e confiabilidade do nosso
          site e dos conteúdos disponibilizados no mesmo, para isso emprega
          diversos controles de detecção, prevenção e combate a atividades
          maliciosas. 2.1. Portanto, o nosso site não será responsabilizado por
          quaisquer danos e prejuízos provenientes da ação de terceiros, pela
          conduta inadequada do USUÁRIO e/ou que de qualquer forma fujam de sua
          esfera de vigilância. 3. O nosso site não detém qualquer
          responsabilidade pela navegação do USUÁRIO em web sites externos,
          mesmo quando referenciados em nosso site, sendo um dever do USUÁRIO a
          leitura dos Termos de Uso e Política de Privacidade do website
          acessado. 4. O nosso site não se responsabiliza por quaisquer tipos de
          indisponibilidade ou erros ocorridos no processamento de pagamentos
          através dos cartões de crédito e bancos afiliados.
        </p>
        <p>DISPOSIÇÕES GERAIS</p>
        <p>
          1. Os conteúdos constantes em nosso site, inclusive estes Termos de
          Uso, poderão ser atualizados ou modificados a qualquer momento,
          cabendo ao USUÁRIO efetuar a verificação dos mesmos sempre que efetuar
          um novo acesso. 2. A tolerância por eventual descumprimento de
          quaisquer dos itens do presente instrumento não constituirá novação e
          tampouco impedirá ou inibirá a exigibilidade dos mesmos a qualquer
          tempo. 3. Em caso de dúvidas relativas ao nosso site, seus conteúdos e
          estes Termos de Uso, o USUÁRIO deverá entrar em contato pelo nosso
          e-mail. 4. Os presentes Termos de Uso serão interpretados segundo a
          legislação brasileira, no idioma português, sendo eleito o Foro da
          Comarca de São Paulo, Capital, com expressa renúncia de qualquer
          outro, por mais privilegiado que seja, para dirimir qualquer dúvida,
          pendência ou litígio oriundo destes Termos de Uso.
        </p>

        <h2>TROCAS E DEVOLUÇÕES</h2>
        <p>1- TROCA</p>
        <p>
          Todas as compras efetuadas no site www.artrei.com.br possuem o prazo
          de até 07 dias a partir da data de entrega do produto. No caso de
          troca por um outro modelo/produto, terá o custo de mão de obra (preço
          de custo). Para prosseguir com a troca, é necessário entrar em contato
          com nosso Suporte pelo e-mail .
        </p>
        <p>2- DEVOLUÇÃO</p>
        <p>
          Para compras feitas em nosso site www.artrei.com.br ou filiais o prazo
          de devolução é de 07 dias a partir da data da entrega do seu pedido.
          Os produtos devem ser devolvidos exatamente nas mesmas condições e na
          embalagem que foram enviados, incluindo o certificado de garantia e
          nota fiscal. Para receber as instruções de como prosseguir com a
          devolução, é necessário entrar em contato com o nosso Suporte ao
          Cliente: clique aqui. Importante: Custos do frete para troca ou
          devolução ficam por conta dos clientes nestes casos. Em qualquer um
          dos casos (troca ou devolução), a Outlet das Lingeries não aceitará
          caso haja violação ou descumprimento do regulamento acima. Para
          prosseguir com a devolução envie um e-mail para:
          outletdaslingeries.gspace@gmail.com
        </p>
        <h2>3. DIREITOS DE ARREPENDIMENTO</h2>
        <p>
          Garantia contra qualquer defeito de fabricação A Outlet das Lingeries
          garante pelo prazo de 12 meses (a contar da data de recebimento do
          produto) qualquer defeito de fabricação, incluindo a cravação dos
          diamantes. Não nos responsabilizamos em casos de acidentes ou uso
          inadequado. A modificação ou manutenção feita por qualquer
          estabelecimento acarretará na perda da Garantia. IMPORTANTE: A
          garantia não cobre o uso inadequado, acidentes de qualquer natureza,
          contato ou manipulação com agentes químicos que possam causar danos ao
          produto.
        </p>

        <h2>4. ENTREGA E FRETE</h2>

        <p>
          Garantia de Recebimento: Produtos enviados via Correios com seguro
          Após a confirmação de seu pagamento, o prazo de fabricação dos
          produtos é de 10 até 25 dias úteis. Todos os produtos fabricados pela
          Art’ Rei são enviados exclusivamente via Correios com seguro,
          acompanhados da nota fiscal em nome do comprador e certificado de
          garantia. Lembre-se de que o prazo de entrega varia sempre de acordo
          com o CEP de destino. Portanto, deve-se levar em conta o prazo de
          fabricação do produto, mais o prazo de entrega para seu CEP de
          destino. IMPORTANTE: A partir do dia 24/11, devido ao excesso de
          encomendas, os Correios notificam que há tolerância de até 2 dias
          úteis além do prazo previsto para entrega. O prazo de entrega é de
          inteira responsabilidade dos Correios e está sujeito a eventuais
          atrasos em função de condições climáticas, tráfego de aeroportos,
          greve dos Correios, datas festivas, condições das rodovias e outros
          motivos de força maior. As reclamações por atraso na entrega só podem
          ser feitas se os prazos de entrega do objeto estiverem expirados. Caso
          sua encomenda esteja atrasada, entre em contato conosco para que
          possamos abrir uma reclamação junto aos Correios. A Outlet das
          Lingeries não se responsabiliza por atrasos no transporte, mas presta
          todo o suporte ao cliente no esclarecimento do ocorrido e nas
          possíveis soluções do problema. Nos raríssimos casos de extravio, o
          caso será averiguado pelos Correios. O seguro somente será ativado
          após a confirmação de extravio oficial do site dos Correios. Após
          oficialmente confirmado o extravio, uma nova fabricação é
          imediatamente iniciada, de modo a reduzir possíveis transtornos
          causados pelo atraso na entrega. A nova fabricação do produto é
          tratada como prioritária pela Outlet das Lingeries e deve obedecer aos
          prazos mínimos para que a joia seja corretamente confeccionada.
          Importante: Os prazos para esclarecimento de atrasos ou de extravio
          são estipulados pelos Correios e devem ser obrigatoriamente obedecidos
          para que tais casos possam ser solucionados. A Outlet das Lingeries
          tem controle apenas sobre o prazo de fabricação do produto e não se
          responsabiliza por quaisquer danos possivelmente gerados em
          decorrência de atrasos de entrega dos Correios. Por isso, recomendamos
          que clientes com datas marcadas e/ou urgência na entrega façam os
          pedidos com bastante antecedência. Caso o cliente perca o interesse no
          recebimento do produto em decorrência do atraso na entrega, basta
          recusar o recebimento da mercadoria. Feita a recusa de recebimento, os
          Correios, automaticamente, devolverão o produto para a Outlet das
          Lingeries. Após a confirmação de chegada da encomenda inviolada na
          empresa, será feito o reembolso do valor pago pelo cliente.
        </p>

        <h2>5. COMPRA SEGURA </h2>
        <p>
          A Loja Outlet das lingeries garante a proteção de uma compra segura a
          seus usuários, pois usamos o Certificado de segurança SSL (Secure
          Socket Layer) dedicado, que criptografa e protege os dados enviados
          pelos usuários via internet. O sistema Digicert garante ao usuário que
          suas informações e transações estarão guardadas e protegidas no ato da
          compra. Todas as informações utilizadas em nosso sistema, desde a
          senha até os dados de pagamento, são codificadas, com isso impedimos
          qualquer tipo de alteração ou consulta por terceiros. Só é permitido
          fechar compra com até cinco peças do mesmo modelo, isto é, no mesmo
          tamanho e cor.
        </p>

        <h2>6. FORMAS DE PAGAMENTO</h2>
        <p>
          Cartão de Crédito A loja Outlet das Lingeries disponibiliza as
          bandeiras Visa, Mastercard, Amex, Diners e Hipercard para pagamento em
          cartão de crédito. É importante verificar o saldo de seu cartão antes
          de realizar a compra. Contamos com o apoio de empresas especializadas
          em checagem de dados para garantir a segurança de nossos clientes em
          todos os processo da transação da compra. Caso encontremos algum dado
          divergente, nossa equipe entrará em contato com o responsável pela
          conta. O prazo de entrega é contato a partir da data de aprovação da
          análise de crédito.<br></br>
          Condições de Parcelamento<br></br>A Outlet das Lingeries oferece
          parcelamento em até 5x vezes sem juros, apenas para cartões de
          crédito, com parcela mínima de R$49,90. As parcelas disponíveis para
          cada valor de compra seguirão a regra abaixo<br></br>
          <br></br>
          Compras acima de R$ 100,00 podem ser parceladas em até 2x sem juros;
          <br></br>
          Compras acima de R$ 150,00 podem ser parceladas em até 3x sem juros;
          <br></br>
          Compras acima de R$ 200,00 podem ser parceladas em até 4x sem juros;
          <br></br>
          Compras acima de R$ 250,00 podem ser parceladas em até 5x sem juros;
          <br></br>
          <br></br>É possível que o valor mínimo das parcelas e a taxa de juros
          em compras parceladas possam ser alteradas sem aviso prévio.<br></br>
          Qualquer dúvida ou dificuldade de pagamento, favor entrar em contato
          com nossa central de atendimento pelo telefone (22) 99618-2056 ou via
          e-mail: outletdaslingeries.gspace@gmail.com .<br></br>
          Boleto Bancário<br></br>
          <br></br>O Boleto deverá ser impresso após a finalização do pedido,
          pois não será enviado via correio. Lembre-se de liberar a visualização
          de pop-us no seu navegador para imprimi-lo. Caso não consiga imprimir,
          faça o pagamento do Boleto pelo Home Banking do seu banco . Para isso,
          utilize o código de barras localizado na parte superior esquerda da
          ficha de compensação do boleto. Os pedidos efetuados por meio dessa
          modalidade serão liberados para entrega após a confirmação do
          pagamento (em média 2 a 4 dias). Não é possível pagar o seu pedido
          através de DOC, Transferência ou Depósito para a conta indicada neste
          boleto. O prazo de entrega começa a contar a partir da data de
          liberação da fatura. A data de vencimento do Boleto é de 2 dias
          corridos após o fechamento do pedido. Após essa data, seu pedido será
          cancelado. Compras realizadas por boleto bancário só terão os produtos
          reservados para a entrega mediante a identificação e aprovação do
          pagamento. Não aceitamos depósitos ou transferência bancária. O boleto
          deixa de ser válido após a data de vencimento. Para reimprimir seu
          boleto, utilize o menu superior “Meus Pedidos”. Caso haja discrepância
          de preços entre o valor exibido na vitrine e qualquer meio de
          divulgação, como marketplaces ou redes sociais, o valor final é sempre
          o exibido no carrinho, no ato do pagamento. Qualquer dúvida ou
          dificuldade de pagamento, entre em contato com nossa central de
          atendimento pelo telefone (22) 99618-2056 ou via
          e-mail:outletdaslingeries.gspace@gmail.com. Em caso de discrepância de
          valores entre o exibido no site e qualquer canal de divulgação sempre
          será aplicado o valor do carrinho, na conclusão da compra. Caso os
          seus dados de endereço estejam incompletos ou houver a impossibilidade
          de confirmação dos mesmos, a Outlet das Lingeries se reserva ao
          direito de cancelar o pedido, por motivo de segurança.
        </p>
      </div>
      <Footer />
    </div>
  );
}

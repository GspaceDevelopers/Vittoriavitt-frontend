import Produtos from "../schemas/Produtos";

class ProdutoController {
  async index(req, res) {
    const Produtolist = await Produtos.find();

    return res.json(Produtolist);
  }

  async index2(req, res) {
    const { _id } = req.query;
    const Produtolist = await Produtos.findOne({ _id: _id });
    return res.json(Produtolist);
  }

  async index3(req, res) {
    const { produto, tipo } = req.query;
    const Produtolist = await Produtos.find({ produto: produto, tipo: tipo });
    return res.json(Produtolist);
  }

  async store(req, res) {
    const {
      produto: produto,
      preco: preco,
      modelo: modelo,
      marca: marca,
      tipo: tipo,
      categoria: categoria,
      descricao: descricao,
      cores: {
        corPrimary: {
          imgurl: imgurl,
          imgurl2: imgurl2,
          cor1: cor1,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl3: imgurl3,
          imgurl4: imgurl4,
          cor2: cor2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl5: imgurl5,
          imgurl6: imgurl6,
          cor3: cor3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl7: imgurl7,
          imgurl8: imgurl8,
          cor4: cor4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
      },
    } = req.body;

    const Produtolist = await Produtos.create({
      produto: produto,
      preco: preco,
      modelo: modelo,
      marca: marca,
      tipo: tipo,
      categoria: categoria,
      descricao: descricao,
      cores: {
        corPrimary: {
          imgurl: imgurl,
          imgurl2: imgurl2,
          cor1: cor1,
          tamanhos: {
            tamanhoOne: { tamanho1: tamanho1, quantidade: quantidade },
            tamanhoTwo: { tamanho2: tamanho2, quantidade2: quantidade2 },
            tamanhoThree: { tamanho3: tamanho3, quantidade3: quantidade3 },
            tamanhoFour: { tamanho4: tamanho4, quantidade4: quantidade4 },
          },
        },
        corSecondary: {
          imgurl3: imgurl3,
          imgurl4: imgurl4,
          cor2: cor2,
          tamanhos: {
            tamanhoOne: { tamanho5: tamanho5, quantidade5: quantidade5 },
            tamanhoTwo: { tamanho6: tamanho6, quantidade6: quantidade6 },
            tamanhoThree: { tamanho7: tamanho7, quantidade7: quantidade7 },
            tamanhoFour: { tamanho8: tamanho8, quantidade8: quantidade8 },
          },
        },
        corTertiary: {
          imgurl5: imgurl5,
          imgurl6: imgurl6,
          cor3: cor3,
          tamanhos: {
            tamanhoOne: { tamanho9: tamanho9, quantidade9: quantidade9 },
            tamanhoTwo: { tamanho10: tamanho10, quantidade10: quantidade10 },
            tamanhoThree: { tamanho11: tamanho11, quantidade11: quantidade11 },
            tamanhoFour: { tamanho12: tamanho12, quantidade12: quantidade12 },
          },
        },
        corQuaternary: {
          imgurl7: imgurl7,
          imgurl8: imgurl8,
          cor4: cor4,
          tamanhos: {
            tamanhoOne: { tamanho13: tamanho13, quantidade13: quantidade13 },
            tamanhoTwo: { tamanho14: tamanho14, quantidade14: quantidade14 },
            tamanhoThree: { tamanho15: tamanho15, quantidade15: quantidade15 },
            tamanhoFour: { tamanho16: tamanho16, quantidade16: quantidade16 },
          },
        },
      },
    });

    return res.json(Produtolist);
  }

  async delete(req, res) {
    const { _id } = req.params;
    const Produtolist = await Produtos.deleteOne({ _id: _id });
    return res.json(Produtolist);
  }

  async update(req, res) {
    const { _id } = req.params;

    const {
      produto,
      modelo,
      marca,
      tipo,
      estoque,
      preco,
      categoria,
      cor,
      cor2,
      cor3,
      cor4,
      descricao,
      imgurl,
      imgurl2,
      imgurl3,
      imgurl4,
      imgurl5,
      imgurl6,
      imgurl7,
      imgurl8,
      tamanho,
      tamanho2,
      tamanho3,
      tamanho4,
    } = req.body;
    const Produtolist = await Produtos.updateOne(
      { _id: _id },
      {
        produto,
        modelo,
        marca,
        tipo,
        estoque,
        preco,
        cor,
        cor2,
        cor3,
        cor4,
        descricao,
        categoria,
        imgurl,
        imgurl2,
        imgurl3,
        imgurl4,
        imgurl5,
        imgurl6,
        imgurl7,
        imgurl8,
        tamanho,
        tamanho2,
        tamanho3,
        tamanho4,
      }
    );
    return res.json(Produtolist);
  }
}

export default new ProdutoController();

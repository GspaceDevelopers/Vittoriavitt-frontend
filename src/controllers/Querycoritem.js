import Produtos from "../schemas/Produtos";


class Querycoritem {

    async getmodelo(req, res) {
        const { cor,produto } = req.query;

        const Produtolist = await Produtos.find({ cor: cor, produto: produto  })

        return res.json(Produtolist)
    }

}
export default new Querycoritem();
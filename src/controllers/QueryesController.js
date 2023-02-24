import Produtos from "../schemas/Produtos";


class Querycontroller {

    async getproduto(req, res) {
        const { produto } = req.query;

        const Produtolist = await Produtos.find({ produto: produto })

        return res.json(Produtolist)
    }

}
export default new Querycontroller();
import Produtos from "../schemas/Produtos";


class Querycategory{

    async getCategoryProduct(req, res) {
        const {categoria} = req.query;

        const CategoryList = await Produtos.find({categoria:categoria})
        return res.json(CategoryList)
    }

}
export default new Querycategory();
import produce from "immer";
import { toast } from "react-toastify";

export default function Carrinho(state = [], action) {
    // const dataitem = useSelector(dat => dat.carrinho)


    switch (action.type) {

        case 'ADD_ITEM':
            const carrinho = JSON.parse(localStorage.getItem('carrinhorr11') || '[]')

            return produce(carrinho, draft => {

                
                const itemindex = draft.findIndex(data => data.pid === action.item.pid)
               /* if (draft[itemindex].promocao == true && draft[itemindex].quantidade >= draft[itemindex].qtdpromocao) {
                    
                }*/

                if( draft[itemindex].estoque == draft[itemindex].quantidade){
                    toast.info(`Quantidade de estoque disponível ${draft[itemindex].estoque}`)
                    window.preventDefoult()
                    return
                }

                if (itemindex >= 0) {
                    draft[itemindex].quantidade += 1
                    draft[itemindex].valorTotal += parseFloat(action.item.preco)

                }
                localStorage.setItem('carrinhorr11', JSON.stringify(draft))

            })




        case 'REMOVE_ITEM':
            const carrinho2 = JSON.parse(localStorage.getItem('carrinhorr11') || '[]')

            return produce(carrinho2, draft => {

                const itemindex = draft.findIndex(data => data.imgurl === action.item.imgurl)



                if (itemindex >= 0) {
                    draft[itemindex].quantidade -= 1
                    draft[itemindex].valorTotal -= parseFloat(action.item.preco)
                }

                localStorage.setItem('carrinhorr11', JSON.stringify(draft))
            })

        case 'DELETE_ITEM':
            const carrinho3 = JSON.parse(localStorage.getItem('carrinhorr11') || '[]')
            return produce(carrinho3, draft => {
                const itemindex = draft.findIndex(data => data.imgurl === action.item.imgurl)


                if (itemindex >= 0) {
                    draft.splice(itemindex, 1)
                }

                localStorage.setItem('carrinhorr11', JSON.stringify(draft))
            })



        default: return state
    }
}
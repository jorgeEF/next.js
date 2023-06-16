// import { useRouter } from "next/router"
import { list } from "../../utils"

/*
// listar estaticos con Router
export default function ListDetails() {
    // uso router para acceder al query de la ruta dinamica para filtrar elemento
    const router = useRouter();
    const { query } = router;
    const { details } = query;

    //console.log(router);

    return (
        <div>
            <h1>Componente Detalles de Lista del elemento {details}</h1>
        </div>
    )
}
*/
// listar con props, getStaticProps y getStaticPaths (sin router)
export default function ListDetails(props) {    
    const {filteredListItem} = props;

    return (
        <div>
            <h1>Componente Detalles de Lista del elemento {filteredListItem.id} y su etiqueta es {filteredListItem.label} </h1>
        </div>
    )
}

// usando list de utils.js con getStaticProps en ruta dinámica (necesita getStaticPaths)

export async function getStaticPaths() {
    // crear todas las rutas (paths) aqui

    const ListOfItemsPaths = list.map((item) => ({
        params: {
            details: item.id
        }
    }))

    return {
        paths: ListOfItemsPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    //console.log(context);

    // obetenemos los parametros de context
    const {params} = context;
    // obtenemos details de params
    const {details} = params;

    // filtrar elemento actual de la lista
    const filteredListItem = list.find(item=>item.id === details);

    //console.log(filteredListItem)

    return {
        props: {
            filteredListItem
        }
    };
}
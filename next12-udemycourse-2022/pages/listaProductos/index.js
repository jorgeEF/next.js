import {useEffect,useState} from "react"

// en vez de cargar la lista de productos del utils.js cargamos los productos desde la API api/listaProductos

export default function ListaProductos(){

    // data state
    const [listaProductos,setListaProductos] = useState([]);

    useEffect(()=>{
        async function getData(){
            const apiResponse = await fetch('/api/listaProductos')
            const dataFromApiResponse = await apiResponse.json()
            const {listaProductos} = dataFromApiResponse

            if(listaProductos && listaProductos.length > 0) setListaProductos(listaProductos);

            //console.log(dataFromApiResponse);
        }
        // llamamos metodo
        getData();
    },[])

    return (
        <div>
            <h1>Este es un producto de la ruta de API</h1>
            <ul>
                {
                    listaProductos && listaProductos.length > 0 ? listaProductos.map((item)=>(
                        <li key={item.id}>{item.label}</li>
                    )) : null
                }
            </ul>
        </div>
    )
    
}
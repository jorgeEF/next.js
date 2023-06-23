
import useSWR from "swr"

const fetcher = (...args)=> fetch(...args).then(res=>res.json());

export default function SwrEjemplo(){

    const {data,error} = useSWR('https://dummyjson.com/products/',fetcher);

    if(error) return <div>Ocurrió un error, por favor intente de nuevo</div>

    if(!data) return <div> Cargando...</div>

    //console.log(data,error);

    return (
        <div>
            <h1>Este es un hoow SWR para obtencion de datos del lado del cliente</h1>
            {
                data && data.products && data.products.length > 0 ? data.products.map((item)=>(
                    <div key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                    </div>
                )) : null
            }
        </div>
    );
}
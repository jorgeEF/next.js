import { Fragment, useEffect, useState } from "react"

export default function ClienteSideDataFetching() {

    // obtener estado de carga 
    const [loading, setLoading] = useState(false);

    // estado de datos
    const [data, setData] = useState(null);

    // usamos useEffect para obetenr esos datos al cargar la pagina
    useEffect(() => {

        // Establecemos estado cargando
        setLoading(true)

        // llamado a la API
        async function getData() {
            const apiResponse = await fetch('https://dummyjson.com/products/');
            const dataFromApiResponse = await apiResponse.json();
            const { products } = dataFromApiResponse;

            // setTimeout es solo para demorar un poco la carga y poder ver el mensaje de cargando...
            if (products && products.length > 0) {
                setTimeout(()=>{
                    setLoading(false)
                    setData(products)
                },1500)
                
            }

            //console.log(dataFromApiResponse)
        }

        // Disparamos el metodo getdata aca
        getData()

    }, []) // desmontaje de componente, se ejecutara una sola vez al cargar la pagina (DOMContentLoaded)

    console.log(loading, data);

    if (loading) {
        return <div>Cargando... Espere por favor.</div>
    }

    return (
        <div>

            {
                data && data.length > 0 ? (
                    <Fragment>
                        <h1>Ejemplo de obtencion de datos del lado del cliente</h1>
                        {
                            data.map((item) => (
                                <p key={item.id}>
                                    <span>{item.title}</span>
                                    <span>{item.description}</span>
                                </p>
                            ))
                        }
                    </Fragment>
                ) : null}
        </div>
    )
}
import { useRouter } from "next/router"


export default function ListDetails(){
    // uso router para acceder al query de la ruta dinamica para filtrar elemento
    const router = useRouter();
    const {query} = router;
    const {details} = query;

    //console.log(router);

    return (
        <div>
            <h1>Componente Detalles de Lista del elemento {details}</h1>
        </div>
    )
}
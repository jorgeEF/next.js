import Link from "next/link"

/* 
//lista estática hardcodeada
export default function List() {
    
    return (
        <div>
            <h1>Componente Lista</h1>
            <ul>
                <Link href="/list/1">
                    <li>Lista 1</li>
                </Link>
                <Link href="/list/2">
                    <li>Lista 2</li>
                </Link>
                <Link href="/list/3">
                    <li>Lista 3</li>
                </Link>
            </ul>
        </div>
    )
}
*/

/*
//lista con datos locales y metodo getStaticProps

export async function getStaticProps() {

    return {
        props: {
            listOfItems: [
                {
                    id: '1',
                    label: 'Lista 1'
                },
                {
                    id: '2',
                    label: 'Lista 2'
                },
                {
                    id: '3',
                    label: 'Lista 3'
                }
            ]
        }
    };
}

//Mostrando lista estática con datos locales y getStaticProps
export default function List(props) {
    console.log(props);

    const { listOfItems } = props;    

    return (
        <div>
            <h1>Componente Lista</h1>
            <ul>                
                {
                    listOfItems && listOfItems.length > 0 ? listOfItems.map((item) => (
                        <Link key={item.id} href={`/list/${item.id}`}>                            
                            <li>{item.label}</li>
                        </Link>
                    )) : null
                }
            </ul>
        </div>
    );
}
*/

//Lista con datos externos (API) y getStaticProps

export async function getStaticProps() {

    // Llamado de API
    const apiResponse = await fetch('https://dummyjson.com/products');
    const jsonResponseFromApiResponse = await apiResponse.json();
    

    return {
        props: {
            listOfDataFromApi : jsonResponseFromApiResponse
        },
    };
}

//Mostrando lista de datos externos (API) con getStaticProps
export default function List(props) {    

    const { listOfDataFromApi } = props;
    const {products} = listOfDataFromApi

    return (
        <div>
            <h3>Datos desde la API</h3>

            <ul>
                {
                    products && products.length > 0 ? products.map((item) => (
                        <li key={item.id}>
                            <p>
                                <span>Título : </span>
                                <span>{item.title}</span>
                            </p>
                            <p>
                                <span>Descripción : </span>
                                <span>{item.description}</span>
                            </p>
                        </li>
                    )) : null
                }
            </ul>

        </div>
    );
}


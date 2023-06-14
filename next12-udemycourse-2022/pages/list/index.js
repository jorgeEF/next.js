import Link from "next/link"


// lista estática
// export default function List() {
//     
//     return (
//         <div>
//             <h1>Componente Lista</h1>
//             <ul>
//                 <Link href="/list/1">
//                     <li>Lista 1</li>
//                 </Link>
//                 <Link href="/list/2">
//                     <li>Lista 2</li>
//                 </Link>
//                 <Link href="/list/3">
//                     <li>Lista 3</li>
//                 </Link>
//             </ul>
//         </div>
//     )
// }

export default function List(props) {
    //console.log(props);

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

//getStaticProps method

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
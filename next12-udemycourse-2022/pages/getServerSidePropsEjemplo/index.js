

export default function GetServerSidePropsEjemplo(props) {
    console.log(props);

    const { getServerSideData } = props;

    return (
        <div>
            <h1>Ejemplo de getServerSideProps</h1>
            <ul>
                {
                    getServerSideData && getServerSideData.length > 0 ? getServerSideData.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    )) : null
                }
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await apiResponse.json();

    return {
        props: {
            getServerSideData: data
        }
    }
}
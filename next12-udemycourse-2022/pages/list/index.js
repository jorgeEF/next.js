import Link from "next/link"


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
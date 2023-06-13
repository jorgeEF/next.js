import Link from "next/link"


export default function HomePage() {

    return (
        <div>
            <h1>Pagina de inicio</h1>

            <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
                <Link href="/login">
                    <button style={{ padding: '20px', fontSize: '16px', borderRadius: '8px', cursor: 'pointer' }}>Iniciar Sesión</button>
                </Link>
                <Link href="/list">
                    <button style={{ padding: '20px', fontSize: '16px', borderRadius: '8px', cursor: 'pointer' }}>Lista</button>
                </Link>
            </div>
        </div>
    )
}
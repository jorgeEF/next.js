import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '../../../../controllers/userController.ts';

export async function GET(req: NextRequest) {
    try {
        // Obtener la URL de la solicitud
        const url = new URL(req.url);

        // Obtener el parámetro 'id' de la URL
        const id = url.pathname.split('/').pop();

        // Verificar si 'id' es un número
        if (!id || isNaN(parseInt(id))) {
            throw new Error("ID de usuario no válido");
        }

        // Obtener el usuario con el ID proporcionado
        const user = await getUser(parseInt(id));

        // Devolver el usuario como JSON
        return NextResponse.json(user);
    } catch (error: any) {
        // Manejar errores y devolver una respuesta con un mensaje de error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
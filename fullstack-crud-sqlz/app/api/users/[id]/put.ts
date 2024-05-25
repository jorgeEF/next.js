import { NextRequest, NextResponse } from 'next/server';
import { useRouter } from 'next/router';
import { updateUser } from '../../../../controllers/userController.ts';

export async function PUT(req: NextRequest) {
    try {
        // Obtener el router de Next.js
        const router = useRouter();

        // Obtener el parámetro 'id' de la URL
        const { id } = router.query;

        // Verificar si el ID es un número válido
        if (!id || isNaN(parseInt(id as string))) {
            throw new Error("ID de usuario no válido");
        }

        // Verificar si req.body es null
        if (!req.body) {
            throw new Error("El cuerpo de la solicitud está vacío");
        }

        // Obtener los datos del cuerpo de la solicitud
        const userData = req.body;

        // Actualizar el usuario con los datos proporcionados
        await updateUser(parseInt(id as string), userData);

        // Devolver una respuesta de éxito
        return NextResponse.json({ message: "Usuario editado correctamente" });
    } catch (error: any) {
        // Manejar errores y devolver una respuesta con un mensaje de error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

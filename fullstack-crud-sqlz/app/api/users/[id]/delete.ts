import { NextRequest, NextResponse } from 'next/server';
import { useRouter } from 'next/router';
import { deleteUser } from '../../../../controllers/userController.ts';

export async function DELETE(req: NextRequest) {
    try {
        // Obtener el router de Next.js
        const router = useRouter();
        
        // Obtener el parámetro 'id' de la URL y convertirlo en un número
        const id = router.query.id ? parseInt(router.query.id as string) : null;

        // Verificar si el ID es un número válido
        if (!id || isNaN(id)) {
            throw new Error("ID de usuario no válido");
        }

        // Eliminar el usuario con el ID proporcionado
        await deleteUser(id);

        // Devolver una respuesta de éxito
        return NextResponse.json({ message: "Usuario eliminado correctamente" });
    } catch (error: any) {
        // Manejar errores y devolver una respuesta con un mensaje de error
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

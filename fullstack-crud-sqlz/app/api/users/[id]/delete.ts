import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser } from '@/controllers/userController';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      // Asegúrate de que el id sea un número
      const userId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id as string, 10);

      if (isNaN(userId)) {
        return res.status(400).json({ message: 'ID de usuario inválido' });
      }

      await deleteUser(userId);
      return res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
};

export default handler;


"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null); // Guardamos el ID del usuario

  useEffect(() => {
    // Extraer el ID del usuario de la URL
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    setUserId(id);

    // Obtener los datos del usuario usando el ID
    if (id) {
      axios.get(`/api/users/${id}`)
        .then(response => setUser(response.data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>          
        </div>
      ) : (
        <p>No se encontró ningún usuario con el ID especificado</p>
      )}
    </div>
  );
}


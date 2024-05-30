"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import { useRouter } from 'next/navigation';

async function loadUser(id: string): Promise<User> {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
}

export default function CreateUserPage() {
  const [user, setUser] = useState<User>({    
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post(`/api/users/`, user);
      setSuccessMessage('Usuario creado correctamente');
      setTimeout(() => {
        router.push('/users');
      }, 2000); // Redirigir después de 2 segundos
    } catch (error) {
      console.error('Error creando el usuario:', error);
      // Mostrar mensaje de error
    }
  };

  const handleCancel = () => {
    router.push('/users');
  };

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center color-black">      
        <form onSubmit={handleSubmit}>          
          <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Lastname:
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
          </div>
          <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </label>
          </div>
          <div className="flex justify-center gap-4">
          <button type="submit">Crear Usuario</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
          </div>
          <div>
            {successMessage && (
            <div className="success-message">{successMessage}</div>
            )}
          </div>
        </form>
    </div>
  );
}
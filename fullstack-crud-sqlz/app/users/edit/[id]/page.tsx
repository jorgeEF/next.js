"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import { useParams, redirect, useRouter } from 'next/navigation';

async function loadUser(id: string): Promise<User> {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
}

export default function ShowUserPage() {
  const [user, setUser] = useState<User>();
  const { id } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const userData = await loadUser(id[0]);
      setUser(userData);
    }
    fetchUser();
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({
        ...user,
        [event.target.name]: event.target.value,
      });
    }
  };  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user) {
      try {
        await axios.put(`/api/users/${user.id}`, user);
        setSuccessMessage('Usuario actualizado correctamente');
        setTimeout(() => {
          router.push('/users');
        }, 2000); // Redirigir después de 2 segundos
      } catch (error) {
        console.error('Error updating user:', error);
        // Mostrar mensaje de error
      }
    }
  };

  const handleCancel = () => {
    router.push('/users');
  };

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-direction-column items-center justify-center">      
      {user ? (
        <form onSubmit={handleSubmit}>
          <p>User Id: {user.id}</p>
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
          <button type="submit">Actualizar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
          </div>
          <div>
            {successMessage && (
            <div className="success-message">{successMessage}</div>
            )}
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

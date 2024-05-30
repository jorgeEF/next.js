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
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center gap-3">
      {user ? (
        <form onSubmit={handleSubmit}>
          <table className="w-full">
            <tbody>
              <tr>
                <td>User Id:</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td><label>Username:</label></td>
                <td><input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  className="text-black"
                /></td>
              </tr>
              <tr>
                <td><label>Name:</label></td>
                <td><input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="text-black"
                /></td>
              </tr>
              <tr>
                <td><label>Lastname:</label></td>
                <td><input
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleInputChange}
                  className="text-black"
                /></td>
              </tr>
              <tr>
                <td><label>Email:</label></td>
                <td><input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="text-black"
                /></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  className="text-black"
                /></td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center mt-2">
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-300 text-black rounded p-1 mr-2">Actualizar</button>
            <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-400 text-black rounded p-1">Cancelar</button>
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

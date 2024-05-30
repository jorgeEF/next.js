import { User } from '@/utils/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useNavigate from 'next/navigation';

interface EditUserProps {
  id: string;
}

async function loadUser(id: string): Promise<User> {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
}

export default function EditUser({ id }: EditUserProps) {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate;

  useEffect(() => {
    async function fetchUser() {
      const userData = await loadUser(id);
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
      // Send a PUT request to update the user
    }
  };

  const handleCancel = () => {
    navigate.redirect('/users');
  };

  return (
    <div>
      <h1>Edit User {user?.id || ''}</h1>
      {user ? (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Actualizar</button>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
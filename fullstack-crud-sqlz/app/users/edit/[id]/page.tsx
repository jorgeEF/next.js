"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';

async function loadUser(): Promise<User> {
  const { data } = await axios.get('/api/users/1');
  return data;
}

export default function UsersPage() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUser() {
      const userData = await loadUser();
      setUser(userData);
    }
    fetchUser();
  }, []);

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">      
      { user ? "nombre: " + user.name : "no existe el usuario"}
    </div>
  );
}

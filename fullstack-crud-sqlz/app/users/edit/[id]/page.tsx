"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import { useParams } from 'next/navigation';

async function loadUser(id: string): Promise<User> {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
}

export default function UsersPage() {
  const [user, setUser] = useState<User>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const userData = await loadUser(id[0]);
      setUser(userData);
    }
    fetchUser();
  }, [id]);

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">      
      { user ? "nombre: " + user.name : "no existe el usuario"}
    </div>
  );
}

"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import { UserTable } from '@/components/UserTable';
import Link from 'next/link';

async function loadUser(): Promise<User[]> {
  const { data } = await axios.get('/api/users');
  return data;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersData = await loadUser();
      setUsers(usersData);
    }
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center gap-3">
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <Link href={`/users/create`}><button type="button" className="text-white bg-blue-700 hover:bg-blue-800">Nuevo Usuario</button></Link>
        </div>
        <div>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

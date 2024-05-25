"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserCard } from '@/components/UserCard';
import { User } from '@/utils/types';


async function loadUser(): Promise<User[]> {
  const { data } = await axios.get('/api/users');
  console.log(data);
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
    <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
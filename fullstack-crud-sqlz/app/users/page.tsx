/* "use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import {UserTable} from '@/components/UserTable';


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
    <div className="min-h-screen flex items-center justify-center">
      <UserTable users={users} />
    </div>
  );
} */
"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import { UserTable } from '@/components/UserTable';

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
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <UserTable users={users} />
    </div>
  );
}

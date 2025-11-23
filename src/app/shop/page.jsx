import { getServerSession } from 'next-auth';
import React from 'react';
import authOptions from '../api/auth/option';
import { redirect } from 'next/navigation';

export default async function Shop() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }
  return <div>Shop page</div>;
}

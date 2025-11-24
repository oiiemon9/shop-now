import { getServerSession } from 'next-auth';
import React from 'react';
import authOptions from '../api/auth/option';
import { redirect } from 'next/navigation';

export default async function Shop() {
  return <div>Shop page</div>;
}

'use client';
import React, { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="w-full mt-10">
      <div className=" flex items-center justify-center ">
        <Suspense fallback={<p>loading...</p>}>
          <LoginForm></LoginForm>
        </Suspense>
      </div>
    </div>
  );
}

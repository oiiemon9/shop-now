import axios from 'axios';
import React from 'react';

const instance = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://shop-now-server-virid.vercel.app',
});

export default function useAxios() {
  return instance;
}

'use client';

import {useState} from 'react';

const initialCache = new Map();

export default function Router() {
  const [cache, setCache] = useState(initialCache);
  const [location, setLocation] = useState({});

  return <div>Router</div>;
}

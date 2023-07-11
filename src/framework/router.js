'use client';

import {useState, createContext, use} from 'react';
import {
  createFromFetch,
  createFromReadableStream,
} from 'react-server-dom-webpack/client';

const RouterContext = createContext();
const initialCache = new Map();

export function Router() {
  const [cache, setCache] = useState(initialCache);
  const [location, setLocation] = useState({});

  const locationKey = JSON.stringify(location);
  let content = cache.get(locationKey);
  if (!content) {
    content = createFromFetch(
      fetch('/react?location=' + encodeURIComponent(locationKey))
    );
    cache.set(locationKey, content);
  }

  return (
    <RouterContext.Provider value={{location}}>
      {use(content)}
    </RouterContext.Provider>
  );
}

import React from 'react';


  const getSessionStorage = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }


export default getSessionStorage;

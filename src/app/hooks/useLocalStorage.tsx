'use client'
import { useEffect, useState } from "react";

export function useLocalStorage<T extends any[]>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let value = localStorage.getItem(item)
    if(value) setValue(JSON.parse(value))
  }, [item]);

  useEffect(() => {
    if(value.length === 0) {
      localStorage.setItem(item, JSON.stringify([{ id: 1, quantity: 2 }, { id: 2, quantity: 2 }]));
    }
  })

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item,JSON.stringify(newValue));
  }

  return {
    value,
    updateLocalStorage
  }
}

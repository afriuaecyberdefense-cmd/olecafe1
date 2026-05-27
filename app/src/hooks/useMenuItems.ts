import { useState, useCallback, useEffect } from 'react';
import type { MenuItem } from '../types/menu';
import { loadMenuItems, saveMenuItems } from '../data/menuData';

export function useMenuItems() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const data = loadMenuItems();
    setItems(data);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      saveMenuItems(items);
    }
  }, [items, loaded]);

  const addItem = useCallback((item: MenuItem) => {
    setItems(prev => [...prev, item]);
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const resetItems = useCallback((newItems: MenuItem[]) => {
    setItems(newItems);
  }, []);

  return { items, addItem, deleteItem, resetItems, loaded };
}

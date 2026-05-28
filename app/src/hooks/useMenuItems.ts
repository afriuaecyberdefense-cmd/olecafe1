import { useState, useCallback, useEffect } from 'react';
import type { MenuItem } from '../types/menu';
import { loadMenuItems } from '../data/menuData';


export function useMenuItems() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const data = loadMenuItems();
    // Avoid cascading renders by setting both state values together.
    setItems(() => data);
    setLoaded(true);
  }, []);



  useEffect(() => {
    // menu persistence disabled (static/shared)
    // saveMenuItems(items);
  }, [items, loaded]);


  const addItem = useCallback((item: MenuItem) => {
    setItems(prev => [...prev, item]);
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateItemImage = useCallback((id: string, imageUrl?: string) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id !== id) return item;
        const next: MenuItem = {
          ...item,
          ...(imageUrl ? { imageUrl } : { imageUrl: undefined }),
        };
        return next;
      })
    );
  }, []);


  const resetItems = useCallback((newItems: MenuItem[]) => {
    setItems(newItems);
  }, []);

  return { items, addItem, deleteItem, updateItemImage, resetItems, loaded };
}


import type { MenuItem, Category } from '../types/menu';

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  // Hot Drinks (kept as-is)
  { id: 'hd-1', name: 'Spanish Latte', description: 'Creamy espresso with condensed milk', price: 24, category: 'hot-drinks' },
  { id: 'hd-2', name: 'Pistachio Latte', description: 'Rich pistachio espresso latte', price: 29, category: 'hot-drinks' },
  { id: 'hd-3', name: 'Cappuccino', description: 'Classic cappuccino with velvety foam', price: 22, category: 'hot-drinks' },
  { id: 'hd-4', name: 'Flat White', description: 'Velvety espresso with steamed milk', price: 22, category: 'hot-drinks' },
  { id: 'hd-5', name: 'Spanish Piccolo', description: 'Small strong espresso with a touch of milk', price: 23, category: 'hot-drinks' },
  { id: 'hd-6', name: 'Piccolo', description: 'Espresso with a splash of steamed milk', price: 21, category: 'hot-drinks' },
  { id: 'hd-7', name: 'Restroreto', description: 'Bold concentrated espresso shot', price: 19, category: 'hot-drinks' },
  { id: 'hd-8', name: 'Espresso Double', description: 'Double shot of rich espresso', price: 15, category: 'hot-drinks' },
  { id: 'hd-9', name: 'Lungo', description: 'Long pulled espresso for a smooth finish', price: 19, category: 'hot-drinks' },
  { id: 'hd-10', name: 'Caramel Mocha', description: 'Chocolate espresso with caramel drizzle', price: 24, category: 'hot-drinks' },
  { id: 'hd-11', name: 'Coffee Late', description: 'Smooth espresso latte with steamed milk', price: 22, category: 'hot-drinks' },
  { id: 'hd-12', name: 'White Mocha', description: 'Creamy white chocolate espresso latte', price: 24, category: 'hot-drinks' },
  { id: 'hd-13', name: 'Americano', description: 'Espresso diluted with hot water', price: 16, category: 'hot-drinks' },
  { id: 'hd-14', name: 'Dark Mocha', description: 'Deep chocolate espresso with steamed milk', price: 24, category: 'hot-drinks' },
  { id: 'hd-15', name: 'Cortado', description: 'Balanced espresso with warm milk', price: 21, category: 'hot-drinks' },
  { id: 'hd-16', name: 'Turkish Coffee', description: 'Strong aromatic coffee with cardamom', price: 15, category: 'hot-drinks' },
  { id: 'hd-17', name: 'Hot Chocolate', description: 'Creamy hot chocolate with whipped milk', price: 28, category: 'hot-drinks' },
  { id: 'hd-18', name: 'V60 Colombia', description: 'Pour-over Colombian coffee', price: 25, category: 'hot-drinks' },
  { id: 'hd-19', name: 'V60 Ethiopia', description: 'Pour-over Ethiopian coffee', price: 24, category: 'hot-drinks' },

  // Acai (kept as-is)
  { id: 'ac-1', name: 'Acai Bowl', description: 'Fresh acai bowl with granola and berries', price: 35, category: 'acai' },
  { id: 'ac-2', name: 'Classic Acai Bowl', description: 'Classic acai bowl with banana, berries, and granola', price: 35, category: 'acai' },
  { id: 'ac-3', name: 'Smoothie Acai', description: 'Smoothie Acai with banana, berries, and granola blended with milk', price: 30, category: 'acai' },
  { id: 'ac-4', name: 'Blueberry Smoothie', description: 'A refreshing purple smoothie made from blended blueberries, milk, yogurt, and ice.', price: 30, category: 'acai' },
  { id: 'ac-5', name: 'strawberry Smoothie', description: 'A refreshing red smoothie made from blended strawberries, milk, yogurt, and ice.', price: 30, category: 'acai' },

  // Iced Coffee (updated/added from your list using rule: “cold” items -> iced-coffee)
  { id: 'ic-1', name: 'Iced Spanish Latte', description: 'Cold espresso with condensed milk', price: 25, category: 'iced-coffee' },
  { id: 'ic-2', name: 'Dark Mocha', description: 'Cold dark chocolate espresso', price: 23, category: 'iced-coffee' },
  { id: 'ic-3', name: 'Coffee Latte Cold', description: 'Cold latte with espresso', price: 22, category: 'iced-coffee' },
  { id: 'ic-4', name: 'Iced Americano', description: 'Double shot espresso over ice', price: 17, category: 'iced-coffee' },
  { id: 'ic-5', name: 'Caramel Mocha Cold', description: 'Cold caramel mocha espresso', price: 24, category: 'iced-coffee' },
  { id: 'ic-6', name: 'Pistachio Latte Cold', description: 'Cold pistachio espresso latte', price: 29, category: 'iced-coffee' },
  { id: 'ic-7', name: 'White Mocha Cold', description: 'Cold white chocolate mocha', price: 23, category: 'iced-coffee' },
  { id: 'ic-8', name: 'V60 Cold Colombia & Chmix', description: 'Cold pour-over Colombia with mix', price: 25, category: 'iced-coffee' },
  { id: 'ic-9', name: 'V60 Cold Ethiopia & Chmix', description: 'Cold pour-over Ethiopia with mix', price: 24, category: 'iced-coffee' },

  // Snacks & Cakes (updated)
  { id: 'sc-1', name: 'Molten Cake', description: 'Special molten cake', price: 28, category: 'snacks-cakes' },
  { id: 'sc-2', name: 'Special Brownie Cake', description: 'Special brownie cake', price: 28, category: 'snacks-cakes' },
  { id: 'sc-3', name: 'Aseeda Cake', description: 'Aseeda cake', price: 33, category: 'snacks-cakes' },
  { id: 'sc-4', name: 'Basbosa Cheese Cake', description: 'Basbosa cheese cake', price: 28, category: 'snacks-cakes' },
  { id: 'sc-5', name: 'London Cheese Cake', description: 'London cheese cake', price: 27, category: 'snacks-cakes' },
  { id: 'sc-6', name: 'San Sabustian Kinder Souce', description: 'San Sabustian kinder sauce', price: 28, category: 'snacks-cakes' },
  { id: 'sc-7', name: 'Banana Pudding', description: 'Banana pudding', price: 29, category: 'snacks-cakes' },
  { id: 'sc-8', name: 'Cookies', description: 'Cookies', price: 13, category: 'snacks-cakes' },
  { id: 'sc-9', name: 'Cheese Croissant', description: 'Cheese croissant', price: 15, category: 'snacks-cakes' },
  { id: 'sc-10', name: 'Zaatar Croissant', description: 'Zaatar croissant', price: 15, category: 'snacks-cakes' },
  { id: 'sc-11', name: 'Olain Croissant', description: 'Olain croissant', price: 13, category: 'snacks-cakes' },
  { id: 'sc-12', name: 'Halloumi Sour Dough', description: 'Halloumi sour dough', price: 23, category: 'snacks-cakes' },
  { id: 'sc-13', name: 'Chicken Spinach Wrap', description: 'Chicken spinach wrap', price: 26, category: 'snacks-cakes' },

  // Mojito (updated)
  { id: 'mj-1', name: 'Passion Fruit Mojito', description: 'Mojito', price: 22, category: 'mojito' },
  { id: 'mj-2', name: 'Blue Berry Mojito', description: 'Mojito', price: 20, category: 'mojito' },
  { id: 'mj-3', name: 'Peach Mojito', description: 'Mojito', price: 20, category: 'mojito' },
  { id: 'mj-4', name: 'Strawberry Mojito', description: 'Mojito', price: 20, category: 'mojito' },

  // Milkshake (updated)
  { id: 'ms-1', name: 'Kinder Milkshake', description: 'Kinder milkshake', price: 27, category: 'milkshake' },
  { id: 'ms-2', name: 'Pistachio Milksake', description: 'Pistachio milkshake', price: 29, category: 'milkshake' },
  { id: 'ms-3', name: 'Lotus Milksake', description: 'Lotus milkshake', price: 27, category: 'milkshake' },
  { id: 'ms-4', name: 'Oreo Milkshake', description: 'Oreo milkshake', price: 27, category: 'milkshake' },

  // Non-Coffee
  { id: 'nc-1', name: 'Orange Juice', description: 'Orange juice', price: 20, category: 'non-coffee' },

  // Matcha (updated)
  { id: 'ma-1', name: 'Matcha Spanish Matcha', description: 'Spanish matcha', price: 24, category: 'matcha' },
  { id: 'ma-2', name: 'Signature Cloudy Matcha', description: 'Cloudy matcha', price: 29, category: 'matcha' },
  { id: 'ma-3', name: 'Coconut Cloudy Matcha', description: 'Cloudy matcha', price: 27, category: 'matcha' },
  { id: 'ma-4', name: 'Strawberry Cloudy Matcha', description: 'Cloudy matcha', price: 26, category: 'matcha' },
  { id: 'ma-5', name: 'Peach Cloudy Matcha', description: 'Cloudy matcha', price: 26, category: 'matcha' },

  // Tea (replace with iced tea items)
  { id: 'te-1', name: 'Matcha Tea', description: 'Matcha tea', price: 22, category: 'tea' },
  { id: 'te-2', name: 'Iced Tea Signature Ice Tea', description: 'Signature iced tea', price: 29, category: 'tea' },
  { id: 'te-3', name: 'Iced Tea Strawberry', description: 'Strawberry iced tea', price: 22, category: 'tea' },
  { id: 'te-4', name: 'Peach Iced Tea', description: 'Peach iced tea', price: 22, category: 'tea' },
  { id: 'te-5', name: 'Passion Iced Tea', description: 'Passion iced tea', price: 22, category: 'tea' },
  { id: 'te-6', name: 'Hibiscus', description: 'Hibiscus tea', price: 22, category: 'tea' },

  // Extra (kept as-is)
  { id: 'ex-1', name: 'Oat Milk', description: 'Substitute with oat milk', price: 5, category: 'extra' },
  { id: 'ex-2', name: 'Almond Milk', description: 'Substitute with almond milk', price: 5, category: 'extra' },
  { id: 'ex-3', name: 'Extra Shot', description: 'Additional espresso shot', price: 4, category: 'extra' },
  { id: 'ex-4', name: 'Whipped Cream', description: 'Add whipped cream topping', price: 3, category: 'extra' },
  { id: 'ex-5', name: 'Caramel Drizzle', description: 'Add caramel sauce drizzle', price: 3, category: 'extra' },
  { id: 'ex-6', name: 'Chocolate Drizzle', description: 'Add chocolate sauce drizzle', price: 3, category: 'extra' },
  { id: 'ex-7', name: 'Extra Flavor', description: 'Add any syrup flavor', price: 4, category: 'extra' },
  { id: 'ex-8', name: 'Honey', description: 'Add organic honey', price: 3, category: 'extra' },
];

export const CATEGORY_CONFIG: { id: Category; label: string }[] = [
  { id: 'hot-drinks', label: 'Hot Drinks' },
  { id: 'acai', label: 'Acai' },
  { id: 'iced-coffee', label: 'Iced Coffee' },
  { id: 'snacks-cakes', label: 'Snacks & Cakes' },
  { id: 'mojito', label: 'Mojito' },
  { id: 'milkshake', label: 'Milkshake' },
  { id: 'matcha', label: 'Matcha' },
  { id: 'tea', label: 'Tea' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'extra', label: 'Extra' },
];

const STORAGE_KEY = 'olecafe_menu_items';
const STORAGE_VERSION_KEY = 'olecafe_menu_version';
const MENU_VERSION = '2026-05-24-v3';

export function loadMenuItems(): MenuItem[] {
  try {
    const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
    if (storedVersion !== MENU_VERSION) {
      saveMenuItems(DEFAULT_MENU_ITEMS);
      localStorage.setItem(STORAGE_VERSION_KEY, MENU_VERSION);
      return DEFAULT_MENU_ITEMS;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore parse errors
  }
  // Initialize with defaults
  saveMenuItems(DEFAULT_MENU_ITEMS);
  localStorage.setItem(STORAGE_VERSION_KEY, MENU_VERSION);
  return DEFAULT_MENU_ITEMS;
}

export function saveMenuItems(items: MenuItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  localStorage.setItem(STORAGE_VERSION_KEY, MENU_VERSION);
}

export function addMenuItem(item: MenuItem): void {
  const items = loadMenuItems();
  items.push(item);
  saveMenuItems(items);
}

export function deleteMenuItem(id: string): void {
  const items = loadMenuItems().filter(item => item.id !== id);
  saveMenuItems(items);
}

export function resetToDefaults(): void {
  saveMenuItems(DEFAULT_MENU_ITEMS);
}

import { useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import MenuSection from './sections/MenuSection';
import About from './sections/About';
import Location from './sections/Location';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AdminModal from './sections/AdminModal';
import { useMenuItems } from './hooks/useMenuItems';
import { useAdmin } from './hooks/useAdmin';

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const { items, addItem, deleteItem, updateItemImage, loaded } = useMenuItems();
  const { isAuthenticated, login, logout } = useAdmin();

  if (!loaded) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-burgundy flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="font-brand italic text-white text-2xl font-bold">Olé</span>
          </div>
          <p className="text-text-secondary text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-cream">
      {/* Navigation */}
      <Navigation onAdminClick={() => setAdminOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero />
        <MenuSection items={items} />
        <About />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Admin Modal */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        isAuthenticated={isAuthenticated}
        onLogin={login}
        onLogout={() => {
          logout();
          setAdminOpen(false);
        }}
        items={items}
        onAddItem={addItem}
        onDeleteItem={deleteItem}
        onUpdateItemImage={updateItemImage}
      />
    </div>
  );
}


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/app/Home';
import Products from './pages/app/Products';
import ProductDetail from './pages/app/ProductDetail';
// import Contact from './pages/app/Contact';
import './App.css';
import ProductForm from './pages/admin/ProductFormData';
import { AppLayout } from './layouts/AppLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { TableProducts } from './pages/admin/TableProducts';
import { EditProductForm } from './pages/admin/EditProductForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:categoria/:id" element={<ProductDetail />} />
          {/* <Route path="/contacto" element={<Contact />} /> */}
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="tablaProductos" element={<TableProducts />} />
          <Route path="createForm" element={<ProductForm />} />
          <Route path="editForm/:id" element={<EditProductForm />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

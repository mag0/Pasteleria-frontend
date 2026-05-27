import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/app/Home';
import Products from './pages/app/Products';
import ProductForm from './pages/admin/ProductFormData';
import { AppLayout } from './layouts/AppLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { TableProducts } from './pages/admin/TableProducts';
import { EditProductForm } from './pages/admin/EditProductForm';
import Menu from './pages/app/Menu';
import { Navigate } from "react-router-dom";
import { isAdmin } from "./helper/auth";
import Login from "./pages/admin/Login";
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/menu" element={<Menu />} />
        </Route>

        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin"
          element={
            isAdmin() ? (
              <AdminLayout />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }>
          <Route path="productTable" element={<TableProducts />} />
          <Route path="createForm" element={<ProductForm />} />
          <Route path="editForm/:id" element={<EditProductForm />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

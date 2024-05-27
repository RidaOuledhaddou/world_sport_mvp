import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import ProductDetails from "./Pages/productDetails/ProductPage";
import ProductsPage from "./Pages/products/ProductsPage";
import Add_product from "./Components/admin/Add_product";
import Update_product from "./Components/admin/Update_product";
import Delete_product from "./Components/admin/Delete_product";
import Profile from "./Components/admin/Profile";
import Login_Admin from "./Components/admin/Login_Admin";
import Update from "./Components/admin/Update";
import Login from "./Components/client/Login";
import Signin from "./Components/client/Signin";
import Add_categories from "./Components/admin/Add_categories";
import Add_flavors from "./Components/admin/Add_flavors";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />


        </Routes>
      </QueryClientProvider>
        <Routes>         
          <Route path="/login_admin" element={<Login_Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add" element={<Add_product />} />
          <Route path="/update_product" element={<Update_product />} />
          <Route path="/delete_product" element={<Delete_product />} />
          <Route path="/update-product/:id" element={<Update />} />
          <Route path="/add_categories" element={<Add_categories />} />
          <Route path="/add_flavors" element={<Add_flavors />} />

          <Route path="/login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
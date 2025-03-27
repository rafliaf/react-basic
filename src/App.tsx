import HeaderCustom from "./components/HeaderCustom";
import { Route, Routes } from "react-router";
import TermsPage from "./pages/TermsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import FormPage from "./pages/FormPage";
import ReactHookFormPage from "./pages/ReactHookFormPage";
import EmployeesPage from "./pages/EmployesPage";

function App() {
  return (
    <>
      <HeaderCustom />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />

        {/* dynamic route */}
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:productSlug" element={<ProductDetailPage />} />

        {/* form page */}
        <Route path="/form" element={<FormPage />} />
        <Route path="/react-hook-form" element={<ReactHookFormPage />} />

        {/* Employess Page */}
        <Route path="/employees-page" element={<EmployeesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

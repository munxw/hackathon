import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NotFounedPage from "./pages/NotFounedPage";
import ProductPage from "./pages/ProductPage";

const MainRouts = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "*", element: <NotFounedPage />, id: 5 },
    { link: "/products", element: <ProductPage />, id: 3 },
    // { link: "/products/:id", element: <ProductDetailsPage />, id: 4 },
    // { link: "/contactus", element: <ContactUsPage />, id: 6 },
    // { link: "/aboutus", element: <AboutUsPage />, id: 7 },
    // { link: "/cart", element: <CartPage />, id: 8 },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRouts;

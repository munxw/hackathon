import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPages from "./pages/ContactPages";
const MainRouts = () => {
  const PUBLIC_ROUTES = [
    // { link: "/", element: <HomePage />, id: 1 },
    // { link: "/auth", element: <AuthPage />, id: 2 },
    // { link: "*", element: <NotFounedPage />, id: 5 },
    // { link: "/products", element: <ProductPage />, id: 3 },
    // { link: "/products/:id", element: <ProductDetailsPage />, id: 4 },
    { link: "/contactus", element: <ContactPages />, id: 6 },
    { link: "/aboutus", element: <AboutPage />, id: 7 },
    // { link: "/cart", element: <CartPage />, id: 8 },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRouts;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ChakraProvider } from "@chakra-ui/react";
import { Restaurants } from "./pages/Restaurants";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { DeliveryProvider } from "./context/DeliveryContext";
import { RestaurantDishes } from "./pages/RestaurantDishes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CompletedOrder } from "./pages/CompletedOrder";

export function App() {
  return (
    <ChakraProvider>
      <DeliveryProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/restaurantes" element={<Restaurants />} />
              <Route path="/restaurantes/:id" element={<RestaurantDishes />} />
              <Route path="/pedido-finalizado" element={<CompletedOrder />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DeliveryProvider>
    </ChakraProvider>
  )
}
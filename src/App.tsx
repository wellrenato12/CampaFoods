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

export function App() {
  return (
    <DeliveryProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/restaurantes" element={<Restaurants />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </DeliveryProvider>
  )
}
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Checkout from './pages/Checkout';
import Terms from './pages/TermsConditions';
import OwnerPage from './pages/OwnerPage';
import UserPage from './pages/UserPage';

const queryClient = new QueryClient();

const paypalOptions = {
  "clientId": "AZkUBcsLe5QV998tLjKEF0_mfdTNCjg3cMn4Nvkmnaar2XswWDiZEIhh7MoprDcF7lxwgqSG83oISg04",
  currency: "USD",
  intent: "capture",
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PayPalScriptProvider options={paypalOptions}>
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>

        <Routes>
          {/* Authentication routes without Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Main app routes with Layout */}
          <Route
            path="/*"
            element={
              <Layout>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sponsors" element={<Sponsors />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/terms" element={<Terms />} />

                  <Route path="/user" element={<UserPage />} />
                  <Route path="/shop" element={<UserPage />} />
                  <Route path="/owner" element={<OwnerPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>

              </Layout>
            }
          />
        </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </PayPalScriptProvider>
  </QueryClientProvider>
);

export default App;

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usuariosAPI } from "@/services/api";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  role?: string;
  Usertype?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay token guardado al cargar la app
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      loadUserProfile();
    } else {
      setLoading(false);
    }
  }, []);

  const loadUserProfile = async () => {
    try {
      const response = await usuariosAPI.obtenerPerfil();
      setUser(response);
    } catch (error) {
      console.error("Error al cargar perfil:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await usuariosAPI.login({ email, password });
      const { token: newToken, usuario } = response;

      console.log("Login response:", response);
      console.log("Setting user:", usuario);

      setToken(newToken);
      setUser(usuario);
      localStorage.setItem("token", newToken);

      // Force a profile reload to ensure all user data is current
      await loadUserProfile();
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  const register = async (userData: any) => {
    try {
      const response = await usuariosAPI.registrar(userData);
      const { token: newToken, usuario } = response;

      setToken(newToken);
      setUser(usuario);
      localStorage.setItem("token", newToken);
    } catch (error) {
      console.error("Error en registro:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

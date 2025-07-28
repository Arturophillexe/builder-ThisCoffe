const API_BASE_URL = "http://localhost:5000/api";

// Configuración base para fetch
const apiConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Helper para obtener token del localStorage
const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Helper para requests autenticados
const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    ...apiConfig.headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Helper para manejar respuestas
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ error: "Error desconocido" }));
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// API de eventos
export const eventosAPI = {
  // Crear nuevo evento
  crear: async (eventoData: any) => {
    const response = await fetch(`${API_BASE_URL}/eventos`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(eventoData),
    });
    return handleResponse(response);
  },

  // Obtener todos los eventos
  obtenerTodos: async () => {
    const response = await fetch(`${API_BASE_URL}/eventos`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // Obtener evento por ID
  obtenerPorId: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/eventos/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  // Actualizar evento
  actualizar: async (id: string, eventoData: any) => {
    const response = await fetch(`${API_BASE_URL}/eventos/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(eventoData),
    });
    return handleResponse(response);
  },
};

// API de usuarios
export const usuariosAPI = {
  // Registrar usuario
  registrar: async (userData: any) => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: "POST",
      headers: apiConfig.headers,
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  // Login usuario
  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: apiConfig.headers,
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  // Obtener perfil
  obtenerPerfil: async () => {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// API de productos
export const productosAPI = {
  obtenerTodos: async (filters?: { category?: string; featured?: boolean }) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);
    if (filters?.featured) params.append("featured", "true");

    const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  obtenerMisProductos: async () => {
    const response = await fetch(`${API_BASE_URL}/products/seller/my-products`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  obtenerPorId: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  crear: async (productData: any) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });
    return handleResponse(response);
  },

  actualizar: async (id: string, productData: any) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });
    return handleResponse(response);
  },

  eliminar: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  buscar: async (query: string) => {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Test de conexión
export const testAPI = {
  ping: async () => {
    const response = await fetch(`${API_BASE_URL}/test`);
    return handleResponse(response);
  },
};

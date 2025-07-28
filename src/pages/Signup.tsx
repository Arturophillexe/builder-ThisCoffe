import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Coffee, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "",
    Usertype: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name === "role") {
      // Map role to Usertype
      const userType = value === "Vendedor" ? "seller" : "normal";
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        Usertype: userType,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Por favor acepta los términos y condiciones");
      return;
    }

    setIsLoading(true);

    try {
      await register(formData);
      toast.success("¡Registro exitoso! Bienvenido a thiscoffee");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  const roles = [
    "Vendedor",
    "Usuario"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-cream to-coffee-cream/80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Welcome */}
        <div className="text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F331a2aed35f74393af73925ea74d7cae%2Fccfc854a0a584e8ebbd7cca562075d64"
            alt="thiscoffee - Conectando pasiones, taza a taza"
            className="h-16 w-auto object-contain mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-coffee-dark">
            Únete a thiscoffee
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Crea tu cuenta y comienza tu viaje del café
          </p>
        </div>

        {/* Signup Form */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-coffee-dark">
              Crear Cuenta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Pérez"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Dirección de email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="juan@empresa.com"
                />
              </div>

              {/* Company and Role */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="company">Empresa (opcional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Rol</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("role", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona tu rol" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Password Fields */}
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Crea una contraseña"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <div className="mt-1 relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirma tu contraseña"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        agreeToTerms: checked as boolean,
                      }))
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-600 leading-5"
                  >
                    Acepto los{" "}
                    <Link
                      to="/terms"
                      className="text-coffee-green hover:text-coffee-brown"
                    >
                      Términos de Servicio
                    </Link>{" "}
                    y la{" "}
                    <Link
                      to="/privacy"
                      className="text-coffee-green hover:text-coffee-brown"
                    >
                      Política de Privacidad
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="subscribeNewsletter"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        subscribeNewsletter: checked as boolean,
                      }))
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="subscribeNewsletter"
                    className="text-sm text-gray-600 leading-5"
                  >
                    Suscríbete a nuestro boletín para consejos de café y
                    actualizaciones de eventos
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-coffee-green hover:bg-coffee-green/90 text-coffee-dark font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-4 w-4 animate-spin" />
                    <span>Creando cuenta...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Crear cuenta</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-6 p-4 bg-coffee-cream/50 rounded-lg">
              <h4 className="text-sm font-semibold text-coffee-dark mb-2">
                ¿Por qué unirse a thiscoffee?
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center space-x-2">
                  <Check className="h-3 w-3 text-coffee-green" />
                  <span>Acceso exclusivo a selecciones premium de café</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-3 w-3 text-coffee-green" />
                  <span>Reservas prioritarias para eventos corporativos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-3 w-3 text-coffee-green" />
                  <span>
                    Consejos de preparación de café y contenido exclusivo
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-3 w-3 text-coffee-green" />
                  <span>
                    Descuentos exclusivos para miembros y ofertas especiales
                  </span>
                </li>
              </ul>
            </div>

            {/* Sign in link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-coffee-green hover:text-coffee-brown transition-colors"
              >
                Inicia sesión en thiscoffee
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;

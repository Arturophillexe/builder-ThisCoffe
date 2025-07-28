import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import CoffeeIdeas from "@/components/CoffeeIdeas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { coffeeProducts } from "@/data/products";
import { blogPosts } from "@/data/blog";

const Terms = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto max-w-5xl p-6 sm:p-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Términos, Condiciones y Privacidad
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Última actualización: 26 de julio de 2025
            </p>
          </header>

          {/* Sección de Política de Privacidad */}
          <section id="politica-privacidad" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-3">
              Política de Privacidad — Thiscoffe
            </h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Recopilación de Información</h3>
                <p>
                  Thiscoffe recopila información personal como nombre, dirección, correo electrónico, número de teléfono, ubicación y detalles de pago al momento del registro o compra. También recolectamos datos de navegación, cookies y comportamiento de usuario en la plataforma.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Uso de la Información</h3>
                <p>Utilizamos tus datos para:</p>
                <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
                  <li>Procesar pedidos y pagos.</li>
                  <li>Coordinar entregas y accesos a eventos.</li>
                  <li>Enviar notificaciones y ofertas personalizadas.</li>
                  <li>Mejorar la experiencia del usuario en la plataforma.</li>
                  <li>Cumplir obligaciones legales.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Compartición de Información</h3>
                <p>
                  No compartimos tu información con terceros sin tu consentimiento, excepto con proveedores de pago (e.g., Stripe, PayPal), servicios logísticos, organizadores de eventos afiliados y autoridades regulatorias en cumplimiento de la ley.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Almacenamiento y Seguridad</h3>
                <p>
                  Implementamos medidas de seguridad físicas y digitales para proteger tu información. Tus datos se almacenan en servidores seguros y están cifrados cuando es necesario.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5. Derechos del Usuario</h3>
                <p>
                  Tienes derecho a acceder a tus datos personales, solicitar su rectificación o eliminación, retirar tu consentimiento de uso y solicitar la portabilidad de tus datos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">6. Cookies</h3>
                <p>
                  Usamos cookies para analizar tráfico, personalizar contenido y mejorar la navegación. Puedes desactivarlas desde tu navegador, aunque algunas funciones podrían verse afectadas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">7. Menores de Edad</h3>
                <p>
                  Thiscoffe no está dirigido a menores de 18 años. No recopilamos intencionalmente datos de menores sin consentimiento verificable de un tutor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">8. Cambios a la Política</h3>
                <p>
                  Nos reservamos el derecho a modificar esta Política en cualquier momento. Notificaremos cambios relevantes mediante correo o en la plataforma.
                </p>
              </div>
            </div>
          </section>

          {/* Sección de Términos y Condiciones */}
          <section id="terminos-condiciones">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-3">
              Términos y Condiciones de Uso — Thiscoffe
            </h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Aceptación de Términos</h3>
                <p>
                  Al utilizar Thiscoffe, aceptas estos Términos y Condiciones. Si no estás de acuerdo, por favor no utilices la plataforma.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Registro y Cuenta</h3>
                <p>
                  El usuario debe registrarse con información verídica. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Compras y Pagos</h3>
                <p>
                  Los precios están expresados en moneda local o internacional según la configuración regional. Todos los pagos deben ser completados antes del despacho de productos o emisión de entradas a eventos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Política de Devoluciones</h3>
                <p>
                  Los productos físicos podrán devolverse dentro de 7 días hábiles si están defectuosos o dañados. Las entradas a eventos no son reembolsables, salvo cancelación oficial del evento.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">5. Contenido del Usuario</h3>
                <p>
                  Al subir reseñas, fotos o comentarios, otorgas a Thiscoffe una licencia no exclusiva para utilizar dicho contenido con fines promocionales o de mejora del servicio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">6. Eventos y Actividades</h3>
                <p>
                  Thiscoffe actúa como intermediario entre organizadores y participantes. No se hace responsable por cambios de fecha, calidad del evento o cancelaciones ajenas a nuestra gestión directa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">7. Propiedad Intelectual</h3>
                <p>
                  Todo el contenido de la plataforma (logos, textos, imágenes, código) es propiedad de Thiscoffe o de sus licenciantes y está protegido por leyes de propiedad intelectual.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">8. Suspensión o Cancelación</h3>
                <p>
                  Thiscoffe puede suspender o cancelar cuentas si detecta actividades fraudulentas, incumplimiento de estos términos o comportamiento inadecuado hacia otros usuarios o proveedores.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">9. Limitación de Responsabilidad</h3>
                <p>
                  Thiscoffe no se responsabiliza por pérdidas indirectas o daños causados por mal uso de la plataforma, interrupciones de servicio o errores externos a nuestra voluntad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">10. Ley Aplicable</h3>
                <p>
                  Estos términos se rigen por las leyes de Panamá y cualquier disputa será resuelta por los tribunales competentes en dicha jurisdicción.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
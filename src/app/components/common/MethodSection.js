"use client";

import {
  Search,
  Lightbulb,
  BarChart3,
  RefreshCw,
  Target,
  LayoutGrid,
  BarChart4,
  TrendingUp,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const methods = [
  {
    icon: <Search className="w-7 h-7 text-black" />,
    title: "ANALISÍS",
    description:
      "Estudiamos la situación del proyecto, a través de un análisis FODA.",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-black" />,
    title: "PLANIFICACIÓN",
    description:
      "Pensamos en un plan de acción acorde a los objetivos y recursosdisponibles.",
  },
  {
    icon: <LayoutGrid className="w-7 h-7 text-black " />,
    title: "IMPLEMENTACIÓN",
    description:
      "Implementamos las estrategias planificadas de forma ordenada y controlada.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-black" />,
    title: "MEDICIÓN",
    description:
      "Medimos los resultados de cada acción/estrategia implementada.",
  },
  {
    icon: <RefreshCw className="w-7 h-7 text-black" />,
    title: "OPTIMIZACIÓN",
    description:
      "Optimizamos y mejoramos cada estrategia en base a los resultados obtenidos.",
  },
];

export default function MethodSection() {
  const MethodItem = ({ icon, title, description, index }) => (
    <div className="group cursor-default">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <span className="text-5xl font-bold text-primary opacity-20">
          #{index + 1}{" "}
        </span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 border-l-2 border-slate-200 pl-4">
        {description}
      </p>
    </div>
  );

  return (
    <div className="w-full font-sans">
      {/* MÉTODO ZAG Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-transparent rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionTitle>
              Metodo <span className="text-primary">ZAG</span>
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {methods.map((item, index) => (
              <MethodItem key={item.title} index={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ENFOQUE SMART Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-4 md:mb-10 lg:mb-16">
            Nuestro enfoque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Smart Approach 1 */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-black transform origin-bottom transition-all duration-300 group-hover:scale-y-110"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-primary">#01</div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                  OBJETIVOS ALCANZABLES
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed ml-16">
                Todo crecimiento requiere de tiempo, procesos y optimización
                constante. Por eso, desde Zag nos ponemos objetivos reales que
                podamos alcanzar con los recursos que dispone el proyecto.
              </p>
              <div className="mt-6 flex justify-end">
                <Target className="w-10 h-10 text-slate-200" />
              </div>
            </div>

            {/* Smart Approach 2 */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-black transform origin-bottom transition-all duration-300 group-hover:scale-y-110"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-primary">#02</div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                  ESTRATEGIAS INTEGRALES
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed ml-16">
                No solo importan las redes sociales. Las estrategias que se
                implementen deben ser integrales. Priorizando la omnicanalidad y
                los objetivos definidos tanto de forma online como offline.
              </p>
              <div className="mt-6 flex justify-end">
                <LayoutGrid className="w-10 h-10 text-slate-200" />
              </div>
            </div>

            {/* Smart Approach 3 */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-black transform origin-bottom transition-all duration-300 group-hover:scale-y-110"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-primary">#03</div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                  RESULTADOS REALES
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed ml-16">
                Nuestro equipo analiza y optimiza de forma periódica los
                resultados obtenidos en cada área digital, para asegurar que
                estén alineados a los objetivos comerciales que se planteen en
                el proyecto.
              </p>
              <div className="mt-6 flex justify-end">
                <BarChart4 className="w-10 h-10 text-slate-200" />
              </div>
            </div>

            {/* Smart Approach 4 */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-black transform origin-bottom transition-all duration-300 group-hover:scale-y-110"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-primary">#04</div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                  CRECIMIENTO SOSTENIBLE
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed ml-16">
                Todo crecimiento comercial requiere de una estructura sólida que
                lo sostenga y que le de aún mas impulso. Desde Zag acompañamos
                ese proceso a través de capacitaciones a los líderes y partners
                del proyecto.
              </p>
              <div className="mt-6 flex justify-end">
                <TrendingUp className="w-10 h-10 text-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

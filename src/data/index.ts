// Proyectos generados por `npm run proyectos` (no editar proyectos.json a mano: editar proyectos.yaml).
import data from "./proyectos.json";

export type Capa = "marca" | "presencia" | "procesos" | "gestion" | "datos" | "ia";

export type Proyecto = {
  slug: string;
  nombre: string;
  url: string | null;
  tagline: string;
  descripcion: string;
  rubro: string;
  tipo: string;
  capas: Capa[];
  desafio: string;
  solucion: string;
  funciones: string[];
  mejoras: string[];
  beneficios: { para: string; texto: string }[];
  stack: string[];
  colores: string[];
  logo: string | null;
  imagenes: { src: string; ancho: number; alto: number; vertical: boolean }[];
  orden: number;
  destacado: boolean;
};

export const PROYECTOS = data as Proyecto[];

export const CAPA_NOMBRE: Record<Capa, string> = {
  marca: "Marca",
  presencia: "Presencia online",
  procesos: "Procesos",
  gestion: "Gestión",
  datos: "Medición y datos",
  ia: "IA y automatización",
};

/** Rubros únicos, para mostrar con qué tipo de negocios ya trabajamos. */
export const RUBROS = [...new Set(PROYECTOS.map((p) => p.rubro.split(" · ")[0]).filter(Boolean))];

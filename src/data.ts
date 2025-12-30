import type { ImageMetadata } from 'astro';

import soldaduraIndustrialImage from '@/assets/services/soldadura-industrial-metal.jpg';
import mantenimientoMaquinariaIndustrialImage from '@/assets/services/mantenimiento-maquinaria-industrial.jpg';
import rectificacionPiezasImage from '@/assets/services/rectificacion-piezas-metal.jpg';
import fabricacionPiezasImage from '@/assets/services/fabricacion-piezas-metalicas.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: ImageMetadata;
}

export const services: ServiceItem[] = [
  {
    id: "soldadura-industrial",
    title: "Soldadura Industrial",
    description:
      "En Dynamic brindamos soluciones en soldadura industrial para diversos sectores, garantizando uniones firmes y resistentes.",
    cta: "Cotiza y asegura calidad",
    image: soldaduraIndustrialImage,
  },
  {
    id: "mantenimiento-correctivo",
    title: "Mantenimiento Correctivo",
    description:
      "Evita paradas inesperadas y mantén tu producción en marcha. Reparamos y optimizamos cada componente para maximizar el rendimiento.",
    cta: "Contáctanos",
    image: mantenimientoMaquinariaIndustrialImage,
  },
  {
    id: "rectificacion-piezas",
    title: "Rectificación de Piezas",
    description:
      "Devolvemos la precisión a tus componentes desgastados. Aumenta la vida útil y mejora el rendimiento.",
    cta: "Cotiza con nosotros",
    image: rectificacionPiezasImage,
  },
  {
    id: "fabricacion-piezas",
    title: "Fabricación de Piezas",
    description:
      "Fabricamos piezas que optimizan tu producción y mantienen tu operación en marcha. Donde otros ven metal, nosotros vemos soluciones.",
    cta: "Cotiza con expertos",
    image: fabricacionPiezasImage,
  },
]

export const company = {
  name: 'Dynamic MetalWorks',
  slogan: 'Tu socio confiable en metal mecánica',
  phone: '953 619 071',
  email: 'gjuarez@dynamic-ilo.com',
  location: 'Urb. Costa Azul Mz. A\' - Lt. 6, Ilo, Perú',
};

export const coverage = ["Ilo", "Moquegua", "Arequipa", "Tacna"]
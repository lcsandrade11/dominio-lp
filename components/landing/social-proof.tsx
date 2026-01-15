import { Logos3 } from "@/components/ui/logos3";

const clients = [
  { name: "COAD Educação", logo: "/clients/coad-educacao.webp" },
  { name: "Condor Travel", logo: "/clients/condortravel.webp" },
  { name: "Couto Baptista", logo: "/clients/couto-baptista.webp" },
  { name: "Diário Comercial", logo: "/clients/diario-comercial.webp" },
  { name: "EPE", logo: "/clients/epe.webp" },
  { name: "Galperti", logo: "/clients/galperti.webp" },
  { name: "GEM", logo: "/clients/gem.webp" },
  { name: "GGBE", logo: "/clients/ggbe.webp" },
  { name: "Luz Publicidade", logo: "/clients/luz-publicidade.webp" },
  {
    name: "Offshore Reparos Navais",
    logo: "/clients/offshore-reparos-navais.webp",
  },
  { name: "OSM Thome", logo: "/clients/osm-thome.webp" },
  { name: "Zmax Group", logo: "/clients/zmax-group.webp" },
];

export function SocialProof() {
  const logos = clients.map((client) => ({
    id: client.name,
    description: client.name,
    image: client.logo,
    className: "h-20 w-auto object-contain",
  }));

  return (
    <Logos3
      heading="Empresas que confiam na Domínio Soluções"
      logos={logos}
      className="relative py-16 border-y border-slate-100 bg-white overflow-hidden"
    />
  );
}

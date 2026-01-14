import Image from "next/image";

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
  return (
    <section className="relative py-16 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-base font-semibold text-slate-500 mb-10 uppercase tracking-wider">
          Empresas que confiam na Domínio Soluções
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-10">
            <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-slate-50 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-slate-50 to-transparent" />
          </div>
          <div className="flex animate-infinite-scroll">
            {/* First set of logos - wrapped for exact width matching */}
            <div className="flex shrink-0 gap-12 md:gap-24">
              {clients.map((client) => (
                <div
                  key={`${client.name}-1`}
                  className="shrink-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop - identical structure */}
            <div className="flex shrink-0 gap-12 ml-12 md:gap-24 md:ml-24">
              {clients.map((client) => (
                <div
                  key={`${client.name}-2`}
                  className="shrink-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

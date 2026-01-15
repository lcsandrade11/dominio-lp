export function Experience() {
  return (
    <section className="relative h-50 md:h-62.5 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/dominio_bg.webp')" }}
      />
      <div className="relative h-full container mx-auto max-w-7xl px-4 flex items-center justify-end">
        <p className="text-slate-700 text-lg md:text-xl lg:text-2xl max-w-xl text-right">
          Há mais de duas décadas a Domínio Soluções é referência de serviço,
          atendimento e soluções inovadoras, oferecendo respostas rápidas e
          eficientes para cada um dos nossos clientes.
        </p>
      </div>
    </section>
  );
}

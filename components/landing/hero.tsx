import { ContactFormDialog } from "./contact-form-dialog";

export function Hero() {
  return (
    <section className="relative w-full bg-linear-to-br from-slate-50 via-[#f0f6fc] to-slate-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-16 text-[#1a2b4b]">
              Sua empresa fatura bem, mas o{" "}
              <span className="text-[#335B9B]">lucro some</span> na burocracia?
            </h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Pare de pagar até 15% a mais de impostos. Com processos digitais e
              automação, você ganha mais segurança, economia e praticidade no
              dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <ContactFormDialog
                triggerText="Quero uma Proposta!"
                triggerClassName="bg-[#335B9B] hover:bg-[#2d4373] text-white font-bold h-14 px-8 text-sm md:text-base uppercase tracking-wide rounded-md shadow-lg shadow-blue-900/10 transition-all"
              />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative flex justify-center lg:justify-end items-end h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/50 rounded-full blur-3xl -z-10" />
            <img
              src="/dominio-e1758593003362-980x1024.webp"
              alt="Sócios Contabilidade Digital"
              className="w-full max-w-[500px] lg:max-w-[650px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

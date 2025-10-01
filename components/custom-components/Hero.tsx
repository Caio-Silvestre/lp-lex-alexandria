import BtnCta from "./BtnCta";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo do hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-[15%] md:px-[14%]">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/lex-by-alexandria.png"
              alt="Lex by Alexandria"
              width={300}
              height={120}
              className="mx-auto w-auto h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
              priority
            />
          </div>

          {/* Título principal */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-glory leading-tight">
              Ganhe renda extra levando
              <br />
              energia limpa para quem você
              <br />
              conhece.
            </h2>
          </div>

          {/* Descrição */}
          <div className="mb-8">
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-work-sans max-w-2xl mx-auto ">
              Como Consultor Lex, você transforma sua rede de contatos em
              oportunidades, ajuda pessoas a economizarem na conta de luz.
            </p>
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center">
            <BtnCta />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

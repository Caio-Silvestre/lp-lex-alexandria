import Image from "next/image";
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  GlobeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full px-[15%] md:px-[14%] h-80vh md:h-[70vh] lg:h-[60vh] bg-[url('/images/full-background.png')] bg-cover bg-center\">
      <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 animate-fade-left  mx-auto md:w-[70%] w-[86%] ">
        {/* Coluna Esquerda - Informações da Empresa */}
        <div className="space-y-6 col-span-2 md:col-span-1">
          {/* Logo e Tagline */}
          <div className="w-full flex flex-col items-center md:items-start justify-center">
            <Image
              src="/svgs/logoAlexandria.svg"
              alt="Alexandria"
              width={182}
              height={59}
              className="mb-2"
            />
          </div>

          {/* Missão */}
          <div className="max-w-full md:max-w-md text-center md:text-left">
            <p className="text-white text-sm leading-relaxed">
              O futuro da energia não será construído por quem vende contratos,
              mas por <span className="font-semibold">quem forma alianças</span>{" "}
              sólidas e inteligentes.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/alexandriaenergia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit  rounded-lg flex items-center justify-center"
            >
              <InstagramLogoIcon
                size={20}
                weight="fill"
                className="text-white hover:text-[#505050] transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/alexandriaenergia/?originalSubdomain=br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit  rounded-lg flex items-center justify-center"
            >
              <LinkedinLogoIcon
                size={20}
                weight="fill"
                className="text-white hover:text-[#505050] transition-colors"
              />
            </a>
            <a
              href="https://alexandriaenergia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-fit  rounded-lg flex items-center justify-center"
            >
              <GlobeSimpleIcon
                size={20}
                className="text-white hover:text-[#505050] transition-colors"
              />
            </a>
          </div>

          {/* Copyright */}
        </div>

        {/* Coluna Direita - Endereço e Links Legais */}
        <div className="space-y-6 col-span-1 md:col-span-1 flex flex-col items-center  md:items-end justify-center md:justify-start  text-center md:text-right ">
          {/* Ícones ODS */}
          {/* <div className="flex gap-4 justify-center md:justify-end">
            <img
              src="/images/seloObjetivos.png"
              alt="Selo Objetivos de Desenvolvimento Sustentável"
              className="w-12 h-12 rounded-full object-cover"
            />
            <img
              src="/images/seloObjetivos.png"
              alt="Selo Objetivos de Desenvolvimento Sustentável"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div> */}

          {/* Endereço */}
          <div className="text-center md:text-right">
            <h3 className="text-white text-sm font-medium mb-2">Endereço</h3>
            <p className="text-white/80 text-sm">
              R. Fernando Amaro, 60 - Alto da XV.
              <br />
              Curitiba - PR, 80045-080
            </p>
          </div>

          {/* Links Legais */}
        </div>
        <div className="col-span-2 pt-10 flex justify-between">
          <p className="text-white/70 text-xs">
            © 2025 Alexandria Energia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 justify-center md:justify-end">
            <a
              href="#"
              className="text-white/70 text-xs underline hover:text-white transition-colors"
            >
              Políticas de privacidade
            </a>
            <a
              href="#"
              className="text-white/70 text-xs underline hover:text-white transition-colors"
            >
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

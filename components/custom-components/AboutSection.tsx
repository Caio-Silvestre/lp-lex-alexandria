import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Card } from "../ui/card";

const AboutSection = () => {
  return (
    <section className="w-full py-12">
      <div className="w-full flex justify-start items-center">
        <SectionTitle>Sobre a Alexandria</SectionTitle>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna esquerda - Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-24px font-bold text-primary mb-4">
              Energia que move confiança
            </h2>
            <p className="text-14px text-primary ">
              A Alexandria é uma empresa que nasceu para transformar a energia
              em movimento coletivo. Estamos presentes em todo o Brasil, levando
              energia limpa, acessível e com propósito para milhares de famílias
              e empresas.
            </p>
            <div className="relative mt-[48px]">
              <Image
                src="/images/sobre-alexandria-2.jpg"
                alt="Sobre Alexandria 2"
                width={600}
                height={400}
                className="w-full max-h-[260px] rounded-[12px] object-cover"
              />
            </div>
          </div>

          {/* Coluna direita - Imagens */}
          <Card className="space-y-6">
            <div className="relative">
              <Image
                src="/images/sobre-alexandria-1.jpg"
                alt="Sobre Alexandria 1"
                width={600}
                height={400}
                className="w-full max-h-[260px] rounded-lg object-cover"
              />
              <p className="text-14px text-primary/80 mt-4 ">
                Com uma comunidade ativa de Consultores Lex, estamos
                democratizando o acesso à energia sustentável, gerando impacto
                positivo para o planeta e criando novas oportunidades de renda
                para pessoas como você.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

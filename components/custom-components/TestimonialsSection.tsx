import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "./SectionTitle";

type Testimonial = {
  quote: string;
  author: string;
  location: string;
  time: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Desde que entrei na Alexandria, minha vida começou a mudar de verdade. Os ganhos são reais e constantes, mesmo trabalhando no meu ritmo.",
    author: "Carlos R., Belo Horizonte",
    location: "Lex há 1 ano",
    time: "",
  },
  {
    quote:
      "Consigo atuar em tempo parcial e ainda gerar impacto positivo. O app facilita demais o processo e me dá chance de ajudar outras pessoas.",
    author: "Fernanda W., Curitiba",
    location: "Lex há 7 meses",
    time: "",
  },
  {
    quote:
      "Não estava nada esperando no mercado. Barreiras de entrada baixíssimas e um time que ajuda de verdade. Só tenho a agradecer!",
    author: "Vinícius Q., Manaus",
    location: "Lex há 6 meses",
    time: "",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-12">
      <div className="w-full flex justify-start items-center">
        <SectionTitle>Depoimentos</SectionTitle>
      </div>
      <div className="w-full mx-auto">
        {/* Mobile: Carrossel horizontal com cards verticais */}
        <div className="flex gap-6 overflow-x-auto md:hidden ">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="flex justify-left items-start min-w-[50vw]"
            >
              <CardContent className="px-0 flex flex-col">
                <div>
                  <Image
                    src="/svgs/degrade-quote.svg"
                    alt="quote"
                    width={32}
                    height={32}
                  />
                </div>
                <CardDescription className="text-primary mt-2 ">
                  &ldquo;{t.quote}&rdquo;
                </CardDescription>
                <div className="mt-4">
                  <CardTitle className="text-[12px] font-bold text-primary">
                    {t.author}
                  </CardTitle>
                  <p className="text-[12px] text-[#666666]">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Grid normal */}
        <div className="hidden md:flex gap-5">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex-1">
              <CardContent className="px-0">
                <div className="px-6">
                  <Image
                    src="/svgs/degrade-quote.svg"
                    alt="quote"
                    width={32}
                    height={32}
                  />
                </div>
                <CardDescription className="text-primary px-6 mt-2">
                  &ldquo;{t.quote}&rdquo;
                </CardDescription>
                <div className="px-6 mt-4">
                  <CardTitle className="text-[12px] font-bold text-primary">
                    {t.author}
                  </CardTitle>
                  <p className="text-[12px] text-[#666666]">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

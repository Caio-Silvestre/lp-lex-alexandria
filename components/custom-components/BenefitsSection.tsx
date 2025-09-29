"use client";

import Image from "next/image";
import BtnCta from "./BtnCta";

interface BenefitItem {
  id: number;
  icon: string;
  title: string;
  description?: string;
}

const benefits: BenefitItem[] = [
  {
    id: 1,
    icon: "/svgs/degrade-hand-coin.svg",
    title: "Comissões",
    description:
      "A cada cliente ativo, você ganha 40% do valor faturável da conta de energia, todos os meses.",
  },
  {
    id: 2,
    icon: "/svgs/degrade-potted-plant.svg",
    title: "Propósito sustentável",
    description:
      "Você leva energia limpa para as pessoas e ajuda o planeta a respirar melhor.",
  },
  {
    id: 3,
    icon: "/svgs/degrade-clock-user.svg",
    title: "Liberdade de tempo e espaço",
    description: "Trabalhe de onde quiser, no seu ritmo, com autonomia.",
  },
  {
    id: 4,
    icon: "/svgs/degrade-hand-shake.svg",
    title: "Comunidade que apoia",
    description:
      "Faça parte de uma rede de pessoas que acreditam no mesmo propósito e celebram conquistas juntas.",
  },
  {
    id: 5,
    icon: "/svgs/degrade-star-calendar.svg",
    title: "Viagens e benefícios exclusivos",
    description:
      "À medida que você evolui no plano de negócios, sua renda cresce, você conquista experiências exclusivas e vive momentos inesquecíveis ao redor do mundo.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-24px font-bold text-primary font-work-sans">
            Os benefícios de ser Consultor Lex
          </h2>
          <p className="text-14px text-primary/80 max-w-2xl mx-auto mt-2">
            Conheça as vantagens exclusivas de quem é um consultor Lex
          </p>
        </div>

        {/* {Mobile} */}
        <div className="block md:hidden flex flex-col divide-y-[1px] divide-details-grey bg-white rounded-xl">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`flex-col items-start gap-4 py-5 px-4 ${
                item.id === 1 && "border-t-[1px] border-details-grey"
              } ${item.id === 5 && "border-b-[1px] border-details-grey"}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] md:text-[16px] font-bold text-primary">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-14px text-primary/80 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* {Desktop} */}

        <div className="hidden md:flex flex-col divide-y-[1px] divide-details-grey bg-white rounded-xl">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-6 py-[24px] px-[12px] ${
                item.id === 1 && "border-t-[1px] border-details-grey"
              } ${item.id === 5 && "border-b-[1px] border-details-grey"}`}
            >
              <div className=" col-span-1 w-10 h-10 rounded-full bg-gray-ligth flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="  col-span-2">
                <h3 className=" text-[14px] md:text-[16px] font-bold text-primary flex justify-start items-center">
                  {item.title}
                </h3>
              </div>
              <div className="  col-span-3 ">
                <p className=" text-14px text-primary/80 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <BtnCta />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

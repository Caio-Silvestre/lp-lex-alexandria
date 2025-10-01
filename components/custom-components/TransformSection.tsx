"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UserIcon, RocketIcon, DeviceMobileIcon } from "@phosphor-icons/react";
import BtnCta from "./BtnCta";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  iconHovered: React.ReactNode;
  expandedDescription: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Indique para quem você conhece",
    description: "Compartilhe com alguém que queira economizar na conta de luz",
    image: "/images/card-1.jpg",
    icon: <UserIcon size={24} />,
    iconHovered: <UserIcon size={24} weight="fill" />,
    expandedDescription:
      "Compartilhe com alguém que queira economizar na conta de luz.",
  },
  {
    id: 2,
    title: "Venda em segundos",
    description: "Processo rápido e eficiente para suas indicações",
    image: "/images/card-2.jpg",
    icon: <RocketIcon size={24} />,
    iconHovered: <RocketIcon size={24} weight="fill" />,
    expandedDescription:
      "Nosso sistema permite que você faça vendas de forma rápida e eficiente. Em poucos segundos, você pode processar uma indicação e começar a ganhar.",
  },
  {
    id: 3,
    title: "Acompanhe no app",
    description: "Monitore suas vendas e ganhos em tempo real",
    image: "/images/card-3.png",
    icon: <DeviceMobileIcon size={24} />,
    iconHovered: <DeviceMobileIcon size={24} weight="fill" />,
    expandedDescription:
      "Tenha controle total sobre suas atividades através do nosso aplicativo. Acompanhe suas vendas, ganhos e métricas em tempo real.",
  },
];

const TransformSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number>(1);

  return (
    <div>
      <div className="w-full">
        {/* Título e descrição */}
        <div className="grid grid-cols-1 lg:grid-cols-2  mb-[57px]">
          <div className="pr-[57px] flex items-center justify-center">
            <h2 className="text-24px font-work-sans font-bold text-primary  leading-tight">
              Prepare-se para transformar sua vida e a de milhares de pessoas
            </h2>
          </div>
          <div className="hidden md:flex flex-col text-primary gap-[12px] ">
            <p className="text-14px ">
              Essa é a sua chance de{" "}
              <span className="font-bold">ganhar uma renda extra</span> só de
              indicar algo que todo mundo precisa:{" "}
              <span className="font-bold">energia elétrica.</span> E você ainda
              vai estar ajudando o meio ambiente!
            </p>
            <p className="text-14px ">
              E exatamente isso que você faz como Consultor Lex. Você constrói
              relacionamentos que viram negócios, fortalece uma comunidade que
              cresce junto, compartilha experiências e conquista liberdade no
              seu dia a dia.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex  md:justify-center gap-6 overflow-x-auto ">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out",
                "flex flex-col justify-end items-center gap-24px flex-shrink-0",
                "px-[24px] py-[32px] rounded-[12px]",
                hoveredCard === card.id
                  ? "w-[247px] h-[250px] md:w-[420px] md:h-[190px]"
                  : "w-[247px] h-[250px] md:w-[250px] md:h-[190px]"
              )}
              onMouseEnter={() => setHoveredCard(card.id)}
            >
              {/* Imagem de fundo */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Conteúdo do card */}
              <div
                className={`relative z-10 flex flex-col justify-end items-start gap-2 w-full`}
              >
                {/* Ícone */}
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  {hoveredCard === card.id ? card.iconHovered : card.icon}
                </div>

                {/* Título */}
                <h3 className="text-secondary text-[18px] font-bold  text-left ">
                  {card.title}
                </h3>

                {/* Descrição expandida - só no hover */}
                {hoveredCard === card.id && (
                  <div className="overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="text-[16px] text-secondary">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col text-primary gap-[12px] mt-6">
          <p className="text-14px ">
            Essa é a sua chance de{" "}
            <span className="font-bold">ganhar uma renda extra</span> só de
            indicar algo que todo mundo precisa:{" "}
            <span className="font-bold">energia elétrica.</span> E você ainda
            vai estar ajudando o meio ambiente!
          </p>
          <p className="text-14px ">
            E exatamente isso que você faz como Consultor Lex. Você constrói
            relacionamentos que viram negócios, fortalece uma comunidade que
            cresce junto, compartilha experiências e conquista liberdade no seu
            dia a dia.
          </p>
        </div>

        {/* Botão CTA */}
        <div className="text-center mt-12">
          <BtnCta />
        </div>
      </div>
    </div>
  );
};

export default TransformSection;

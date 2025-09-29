"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UserIcon, RocketIcon, DeviceMobileIcon } from "@phosphor-icons/react";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  expandedDescription: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Indique para quem você conhece",
    description: "Compartilhe com alguém que queira economizar na conta de luz",
    image: "/images/card-1.jpg",
    icon: <UserIcon size={24} />,
    expandedDescription:
      "Conecte-se com pessoas do seu círculo social que estão interessadas em economizar na conta de luz. Quanto mais pessoas você indicar, maior será sua renda extra.",
  },
  {
    id: 2,
    title: "Venda em segundos",
    description: "Processo rápido e eficiente para suas indicações",
    image: "/images/card-2.jpg",
    icon: <RocketIcon size={24} />,
    expandedDescription:
      "Nosso sistema permite que você faça vendas de forma rápida e eficiente. Em poucos segundos, você pode processar uma indicação e começar a ganhar.",
  },
  {
    id: 3,
    title: "Acompanhe no app",
    description: "Monitore suas vendas e ganhos em tempo real",
    image: "/images/card-3.png",
    icon: <DeviceMobileIcon size={24} />,
    expandedDescription:
      "Tenha controle total sobre suas atividades através do nosso aplicativo. Acompanhe suas vendas, ganhos e métricas em tempo real.",
  },
];

const TransformSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título e descrição */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-glory leading-tight mb-6">
              Prepare-se para transformar sua vida e a de milhares de pessoas
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 font-work-sans leading-relaxed mb-6">
              Essa é a sua chance de ganhar uma renda extra só de indicar algo
              que todo mundo precisa: energia elétrica. E você ainda vai estar
              ajudando o meio ambiente!
            </p>
            <p className="text-lg text-gray-600 font-work-sans leading-relaxed">
              E exatamente isso que você faz como Consultor Lex. Você constrói
              relacionamentos que viram negócios, fortalece uma comunidade que
              cresce junto, compartilha experiências e conquista liberdade no
              seu dia a dia.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out",
                "flex flex-col justify-end items-center gap-6 flex-shrink-0",
                "p-8", // 32px padding
                hoveredCard === card.id
                  ? "w-[390px] h-[190px]"
                  : "w-[247px] h-[190px]"
              )}
              style={{
                borderRadius: "12px",
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
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
              <div className="relative z-10 flex flex-col justify-end items-center gap-6 w-full">
                {/* Ícone */}
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                  {card.icon}
                </div>

                {/* Título */}
                <h3 className="text-white font-bold text-lg text-center font-glory">
                  {card.title}
                </h3>

                {/* Descrição - sempre visível */}
                {hoveredCard === card.id && (
                  <p className="text-white/90 text-sm text-center font-work-sans">
                    {card.description}
                  </p>
                )}

                {/* Descrição expandida - só no hover */}
                {hoveredCard === card.id && (
                  <div className="overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="text-white/80 text-sm font-work-sans leading-relaxed text-center">
                      {card.expandedDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Quero ser consultor →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformSection;

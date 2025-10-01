import Image from "next/image";
import BtnCta from "./BtnCta";

const timelineItems: { label: string; active?: boolean }[] = [
  { label: "Faça upload da fatura\n(ou foto)" },
  { label: "O sistema calcula\no desconto automaticamente" },
  { label: "Envie a proposta\npara assinatura digital" },
  { label: "Acompanhe o processo\naté a ativação", active: true },
];

const AppToolsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center md:items-start h-full">
      {/* Conteúdo - ocupa 3/4 */}
      <div className="md:col-span-3 text-white">
        <h3 className="font-work-sans font-bold text-24px mb-[0.75rem]">
          APP Lex: Suas ferramentas de vendas
        </h3>
        <p className="text-14px text-white/80 mt-2">
          Tudo sempre pelo celular. Com o APP Lex, você vende de forma rápida,
          simples e digital.
        </p>

        {/* Timeline horizontal (estilo Flowbite) */}
        <div className="mt-6 hidden md:block">
          <ol className="items-center flex">
            {timelineItems.map((item, index) => (
              <li key={index} className="relative mb-0 flex-1">
                <div className="flex items-center">
                  <div
                    className={`z-10  flex items-center justify-center w-3 h-3 rounded-full shrink-0 ${
                      index === timelineItems.length - 1 || item.active
                        ? "bg-[#FAA61A]"
                        : "bg-[var(--gray-ligth)]"
                    }`}
                  />
                  {index !== timelineItems.length - 1 && (
                    <div className="hidden md:flex w-full bg-[var(--details-grey)]/60 h-px" />
                  )}
                </div>
                <div className="mt-3 md:pe-8">
                  <p
                    className={`text-14px h-[50px] border-3 border-transparent whitespace-pre-line ${
                      index === timelineItems.length - 1 || item.active
                        ? "font-bold text-white"
                        : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Timeline vertical (mobile) - estilo Flowbite */}
        <div className="mt-6 md:hidden">
          <ol className="relative border-s border-[var(--details-grey)]/60 ms-4">
            {timelineItems.map((item, index) => (
              <li key={`m-${index}`} className="mb-8 ms-4 last:mb-0">
                <div
                  className={`absolute w-2.5 h-2.5 rounded-full -start-1.5 border border-transparent ${
                    index === timelineItems.length - 1 || item.active
                      ? "bg-[#FAA61A]"
                      : "bg-[var(--gray-ligth)]"
                  }`}
                />
                <p
                  className={`text-14px whitespace-pre-line ${
                    index === timelineItems.length - 1 || item.active
                      ? "font-bold text-white relative"
                      : "text-white/90"
                  }`}
                >
                  {item.label}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <BtnCta />
        </div>
      </div>

      {/* Espaço do mock do celular DESKTOP */}
      {/* <div className="hidden md:block md:col-span-1 flex justify-center items-center w-full h-full">
        <div className="absolute flex justify-start items-center w-[30vw] h-full min-h-[400px] md:min-h-[500px]  right-[8%] overlfow-visible">
          <div className="w-full h-full flex justify-center items-center ">
            <Image
              src="/images/mockup_app_lex.png"
              alt="App Tools Section"
              // fill
              height={2000}
              width={1000}
              className="object-cover w-full h-full overlfow-visible mb-[50%]"
              style={{ overflow: "visible" }}
            />
          </div>
        </div>
      </div> */}
      <div className="hidden md:block md:col-span-1 max-h-[10vh]">
        <div className="relative left-[-50px] top-[-50px] h-[70vh]">
          <Image
            src="/images/mockup_app_lex_3.png"
            alt="App Tools Section"
            // fill
            height={2000}
            width={1000}
            style={{ overflow: "visible" }}
            className="object-cover h-full"
          />
        </div>
      </div>

      {/* Espaço do mock do celular MOBILE */}
      <div className="md:hidden flex justify-center items-center w-full  h-[20vh] overflow-visible">
        <div className="relative top-20 left-[10%] w-[100vw] h-[50vh]  flex justify-center items-center">
          <Image
            src="/images/mockup_app_lex_3.png"
            alt="App Tools Section"
            // fill
            height={2000}
            width={1000}
            style={{ overflow: "visible" }}
            className="object-cover h-full"
          />
        </div>
        <div className="relative right-[5%] top-[35%] w-[196px] h-[104px] pointer-events-none rounded-[25px] bg-[linear-gradient(243deg,rgba(102,102,102,0.48)_-26.18%,rgba(204,204,204,0.00)_32.02%)] text-[14px] p-[31px] flex justify-end items-center">
          <p className="text-secondary">Simples, transparente e seguro.</p>
        </div>
      </div>
    </div>
  );
};

export default AppToolsSection;

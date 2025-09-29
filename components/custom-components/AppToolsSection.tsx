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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center h-full">
      {/* Conteúdo - ocupa 3/4 */}
      <div className="md:col-span-3 text-white">
        <h3 className="font-work-sans font-bold text-24px">
          APP Lex: Suas ferramentas de vendas
        </h3>
        <p className="text-14px text-white/80 mt-2">
          Tudo sempre pelo celular. Com o APP Lex, você vende de forma rápida,
          simples e digital.
        </p>

        {/* Timeline horizontal (única linha) */}
        <div className="mt-6 hidden md:block relative">
          {/* trilho */}
          <div className="absolute left-0 right-0 top-[6px] h-px bg-[var(--details-grey)]/60 md:w-[78%] lg:w-[77%]" />
          <div className="relative flex items-start justify-between gap-6 flex-nowrap overflow-x-auto">
            {timelineItems.map((label, index) => (
              <div
                key={index}
                className="min-w-[100px] flex flex-col items-start"
              >
                <span
                  className={`${
                    index === timelineItems.length - 1
                      ? "bg-[#FAA61A]"
                      : "bg-[var(--gray-ligth)]"
                  } w-2.5 h-2.5 rounded-full inline-block`}
                />
                <span
                  className={`mt-3 text-14px ${
                    index === timelineItems.length - 1
                      ? "font-bold text-white"
                      : "text-white/90"
                  }`}
                >
                  {label.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline vertical (mobile) */}
        <div className="mt-6 md:hidden">
          <div className="relative pl-6 flex flex-col items-center justify-center">
            <div className="absolute left-26 top-1 bottom-1 w-px bg-[var(--details-grey)]/60 h-[85%]" />
            <div className="flex flex-col gap-[37px]">
              {timelineItems.map((item, index) => (
                <div key={`m-${index}`} className="relative">
                  <span
                    className={`$${""}
                      ${
                        index === timelineItems.length - 1 || item.active
                          ? "bg-[#FAA61A]"
                          : "bg-[var(--gray-ligth)]"
                      }
                      w-2.5 h-2.5 rounded-full inline-block absolute left-[-20px] top-1`}
                  />
                  <p
                    className={`text-14px whitespace-pre-line ${
                      index === timelineItems.length - 1 || item.active
                        ? "font-bold text-white"
                        : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <BtnCta />
        </div>
      </div>

      {/* Espaço do mock do celular DESKTOP */}
      <div className="hidden md:block md:col-span-1 flex justify-center items-center w-full h-full">
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
      </div>

      {/* Espaço do mock do celular MOBILE */}
      <div className="md:hidden flex justify-center items-center w-full h-full pb-[15vh]">
        <div className="absolute flex justify-start items-center w-[90%] mt-[30vh] h-[50vh] left-[5%]  ">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/images/mockup_app_lex.png"
              alt="App Tools Section"
              // fill
              height={2000}
              width={1000}
              className="object-cover w-full h-full"
            />
            <div className="relative right-[25%] w-[196px] h-[104px] pointer-events-none rounded-[25px] bg-[linear-gradient(243deg,rgba(102,102,102,0.48)_-26.18%,rgba(204,204,204,0.00)_32.02%)] text-[14px] p-[31px] flex justify-end items-center">
              <p className="text-secondary">Simples, transparente e seguro.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppToolsSection;

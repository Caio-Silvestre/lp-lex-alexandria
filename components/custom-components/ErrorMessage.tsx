interface ErrorMessageProps {
  title?: string;
  message?: string;
  className?: string;
}

export function ErrorMessage({
  title = "Erro ao enviar as informações",
  message = "Não conseguimos enviar suas informações. Por favor, tente novamente em alguns instantes",
  className = "",
}: ErrorMessageProps) {
  return (
    <div
      className={`rounde-[8px] flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 ${className}`}
    >
      <img
        src="/svgs/TriangleWarningIcon.svg"
        alt="Aviso"
        className="w-5 h-5 flex-shrink-0 mt-0.5"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-semibold text-red-700 leading-tight">
          {title}
        </h4>
        <p className="text-sm text-red-600 leading-relaxed">
          {message ??
            "Não conseguimos enviar suas informações. Por favor, tente novamente em alguns instantes"}
        </p>
      </div>
    </div>
  );
}

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.59c.75 1.335-.213 2.986-1.742 2.986H3.48c-1.53 0-2.492-1.651-1.743-2.986L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-.25-6.75a.75.75 0 10-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
          clipRule="evenodd"
        />
      </svg>
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

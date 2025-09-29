"use client";

import * as React from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

export { Controller, FormProvider };

export function FormField({
  name,
  children,
  className,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) {
  const methods = useFormContext();
  const error = methods.formState.errors?.[name]?.message as string | undefined;
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {children}
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </div>
  );
}

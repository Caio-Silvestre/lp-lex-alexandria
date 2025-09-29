"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import ButtonPrimary from "./ButtonPrimary";
import { FormProvider, Controller, FormField } from "@/components/ui/form";
import { ErrorMessage } from "./ErrorMessage";
import { SuccessMessage } from "./SuccessMessage";
import { toast } from "sonner";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

const schema = z.object({
  fullName: z.string().min(3, "Informe pelo menos 3 caracteres"),
  phone: z
    .string()
    .regex(/\(\d{2}\)\s?\d{5}-\d{4}/, "Use o formato (00) 00000-0000"),
  email: z.string().email("E-mail inválido"),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
  address: z.string().min(1, "Campo obrigatório"),
  number: z.string().min(1, "Campo obrigatório"),
  state: z.string().length(2, "Selecione a UF"),
  city: z.string().min(1, "Campo obrigatório"),
});

type FormValues = z.infer<typeof schema>;

const states = [
  { nome: "Acre", uf: "AC" },
  { nome: "Alagoas", uf: "AL" },
  { nome: "Amapá", uf: "AP" },
  { nome: "Amazonas", uf: "AM" },
  { nome: "Bahia", uf: "BA" },
  { nome: "Ceará", uf: "CE" },
  { nome: "Distrito Federal", uf: "DF" },
  { nome: "Espírito Santo", uf: "ES" },
  { nome: "Goiás", uf: "GO" },
  { nome: "Maranhão", uf: "MA" },
  { nome: "Mato Grosso", uf: "MT" },
  { nome: "Mato Grosso do Sul", uf: "MS" },
  { nome: "Minas Gerais", uf: "MG" },
  { nome: "Pará", uf: "PA" },
  { nome: "Paraíba", uf: "PB" },
  { nome: "Paraná", uf: "PR" },
  { nome: "Pernambuco", uf: "PE" },
  { nome: "Piauí", uf: "PI" },
  { nome: "Rio de Janeiro", uf: "RJ" },
  { nome: "Rio Grande do Norte", uf: "RN" },
  { nome: "Rio Grande do Sul", uf: "RS" },
  { nome: "Rondônia", uf: "RO" },
  { nome: "Roraima", uf: "RR" },
  { nome: "Santa Catarina", uf: "SC" },
  { nome: "São Paulo", uf: "SP" },
  { nome: "Sergipe", uf: "SE" },
  { nome: "Tocantins", uf: "TO" },
];

export function LexFormModal({
  triggerClassName,
  triggerLabel = "Quero ser consultor",
}: {
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [cities, setCities] = React.useState<string[]>([]);
  const [loadingCities, setLoadingCities] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      cep: "",
      address: "",
      number: "",
      state: "",
      city: "",
    },
  });

  const stateValue = methods.watch("state");
  const cepValue = methods.watch("cep");

  // Watch all form values to check if form is valid
  const watchedValues = methods.watch();
  const [isFormValid, setIsFormValid] = React.useState(false);

  // Validar formulário em tempo real
  React.useEffect(() => {
    const validateForm = async () => {
      try {
        await schema.parseAsync(watchedValues);
        setIsFormValid(true);
      } catch {
        setIsFormValid(false);
      }
    };
    validateForm();
  }, [watchedValues]);

  // Buscar cidades quando estado muda
  React.useEffect(() => {
    async function fetchCities() {
      if (!stateValue) {
        setCities([]);
        return;
      }
      try {
        setLoadingCities(true);
        const res = await fetch(
          `https://brasilapi.com.br/api/ibge/municipios/v1/${stateValue}?providers=dados-abertos-br,gov,wikipedia`
        );
        const data = await res.json();
        const names = Array.isArray(data)
          ? data.map((c: { nome: string }) => c.nome)
          : [];
        setCities(names);
      } catch {
        setCities([]);
        toast.error("Falha ao carregar cidades para a UF selecionada.");
      } finally {
        setLoadingCities(false);
      }
    }
    fetchCities();
  }, [stateValue]);

  // Buscar endereço por CEP
  React.useEffect(() => {
    async function fetchAddressByCep() {
      if (!cepValue || cepValue.length < 8) return;

      try {
        const cleanCep = cepValue.replace(/\D/g, "");
        console.log("Buscando CEP:", cleanCep);

        const res = await fetch(
          `https://brasilapi.com.br/api/cep/v1/${cleanCep}`
        );

        if (!res.ok) {
          console.log("Erro na API:", res.status);
          return;
        }

        const data = await res.json();
        console.log("Dados retornados:", data);

        if (data.state && data.city && data.street) {
          console.log("Preenchendo campos:", {
            uf: data.state,
            city: data.city,
            street: data.street,
          });
          methods.setValue("state", data.state);
          methods.setValue("city", data.city.toUpperCase());
          methods.setValue("address", data.street);
        } else {
          console.log("Dados incompletos:", data);
        }
      } catch (error) {
        console.log("Erro ao buscar CEP:", error);
      }
    }
    fetchAddressByCep();
  }, [cepValue, methods]);

  async function onSubmit(values: FormValues) {
    try {
      setSubmitError(null);

      // Log dos valores para debug
      console.log("[lex:submit] payload", values);

      // Simular envio (substituir por API real)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sucesso: mostrar tela de sucesso
      setIsSuccess(true);
      methods.reset();
    } catch (e: unknown) {
      const errorMessage =
        e instanceof Error ? e.message : "Erro ao enviar. Verifique os campos.";
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    }
  }

  // Máscara de telefone (00) 00000-0000
  function handlePhoneMask(e: React.ChangeEvent<HTMLInputElement>) {
    let v = e.target.value.replace(/\D/g, "");
    v = v.slice(0, 11);
    if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    else v = v.replace(/(\d{0,2})/, "($1");
    e.target.value = v;
  }

  // Máscara de CEP 00000-000
  function handleCepMask(e: React.ChangeEvent<HTMLInputElement>) {
    let v = e.target.value.replace(/\D/g, "");
    v = v.slice(0, 8);
    if (v.length > 5) v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    e.target.value = v;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ButtonPrimary className={triggerClassName}>
          {triggerLabel} <ArrowRightIcon size={24} />
        </ButtonPrimary>
      </DialogTrigger>
      <DialogContent className="p-6 w-90 h-fit max-h-[90vh] my-5 overflow-y-auto z-100 bg-white/95 backdrop-blur-sm">
        {isSuccess ? (
          <SuccessMessage
            onClose={() => {
              setOpen(false);
              setIsSuccess(false);
            }}
          />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Quero ser consultor</DialogTitle>
            </DialogHeader>

            {submitError && (
              <ErrorMessage
                title="Erro ao enviar as informações"
                message={submitError}
                className="mb-4"
              />
            )}

            <FormProvider {...methods}>
              <form
                className="space-y-4"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Informações para contato
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <FormField name="fullName">
                    <Label htmlFor="fullName">Nome completo</Label>
                    <Input
                      id="fullName"
                      placeholder="Carlos Andreata"
                      {...methods.register("fullName")}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField name="phone">
                    <Label htmlFor="phone">Número de celular</Label>
                    <Input
                      id="phone"
                      placeholder="(00) 0000-0000"
                      inputMode="numeric"
                      {...methods.register("phone", {
                        onChange: handlePhoneMask,
                      })}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                  <FormField name="email">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemplo@exemplo.com"
                      {...methods.register("email")}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Informações complementares
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <FormField name="cep">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      placeholder="00000-000"
                      inputMode="numeric"
                      {...methods.register("cep", {
                        onChange: handleCepMask,
                      })}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField name="state">
                    <Label htmlFor="state">Estado</Label>
                    <Controller
                      name="state"
                      control={methods.control}
                      render={({ field }) => (
                        <Select value={field.value} onChange={field.onChange}>
                          <option disabled value="">
                            UF
                          </option>
                          {states.map((s) => (
                            <option key={s.uf} value={s.uf}>
                              {s.uf}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>

                  <FormField name="city">
                    <Label htmlFor="city">Cidade</Label>
                    <Controller
                      name="city"
                      control={methods.control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onChange={field.onChange}
                          disabled={
                            !stateValue || loadingCities || cities.length === 0
                          }
                        >
                          <option value="">Cidade de residência</option>
                          {cities.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField name="address">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      placeholder="Rua, Avenida, etc."
                      {...methods.register("address")}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                  <FormField name="number">
                    <Label htmlFor="number">Número</Label>
                    <Input
                      id="number"
                      placeholder="123"
                      inputMode="numeric"
                      {...methods.register("number")}
                    />
                    <p className="text-xs text-[#666666] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                  <div></div>
                </div>

                <div className="pt-2">
                  <ButtonPrimary
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full`}
                  >
                    Ser consultor <ArrowRightIcon className="ml-2" size={16} />
                  </ButtonPrimary>
                </div>
              </form>
            </FormProvider>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

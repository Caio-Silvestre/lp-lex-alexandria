"use client";
import { ArrowRightIcon } from "@phosphor-icons/react";
import ButtonPrimary from "./ButtonPrimary";
import { LexFormModal } from "./LexFormModal";

type BtnCtaProps = {
  disabled?: boolean;
  onClick?: () => void;
};

const BtnCta = ({ disabled, onClick }: BtnCtaProps) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <LexFormModal triggerClassName="w-full" />
      </div>

      {/* Mobile - Fixed bottom */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 p-3">
        <div className="mx-auto max-w-7xl px-4 flex justify-center">
          <LexFormModal triggerClassName="w-full" />
        </div>
      </div>
    </>
  );
};

export default BtnCta;

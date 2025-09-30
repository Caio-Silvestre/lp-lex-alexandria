"use client";
import { LexFormModal } from "./LexFormModal";

type BtnCtaProps = Record<string, never>;

const BtnCta = ({}: BtnCtaProps) => {
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

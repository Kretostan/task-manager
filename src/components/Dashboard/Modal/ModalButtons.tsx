import type {RefObject} from "react";

import PrimaryButton from "@/components/UI/PrimaryButton";
import OutlineButton from "@/components/UI/OutlineButton";

type ModalButtonsProps = {
  ref: RefObject<HTMLDialogElement | null>;
  closeModal: (ref: HTMLDialogElement) => void;
};

const ModalButtons = ({ ref, closeModal }: ModalButtonsProps) => {
  return <div className="flex flex-col md:flex-row-reverse gap-4 mt-8 px-8 pt-8 w-full border-t-1 border-primary/20">
    <PrimaryButton path="#" className="md:px-7 py-2 md:py-3 md:text-lg font-semibold">Create Task</PrimaryButton>
    <OutlineButton path="#" className="md:px-7 py-2 md:py-3 md:text-lg font-semibold" onClick={() => ref.current && closeModal(ref.current)}>Cancel</OutlineButton>
  </div>
}

export default ModalButtons;

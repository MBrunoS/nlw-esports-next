import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

interface CreateAdBannerProps {
  onOpen: () => void;
}

const CreateAdBanner: React.FC<CreateAdBannerProps> = ({ onOpen }) => {
  return (
    <div className="mt-8 pt-1 bg-nlw-gradient rounded-lg self-stretch overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 rounded-lg flex flex-col md:flex-row text-center md:text-left justify-between items-center">
        <div className="mb-4 md:mb-0">
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger
          className="px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
          onClick={onOpen}
        >
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default CreateAdBanner;

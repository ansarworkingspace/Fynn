import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight, PencilIcon, PenIcon } from "lucide-react";
import React from "react";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center mon-w-0">
          <p className="text-[#9B9CA0] truncate">
            This is the automation title
          </p>
          <span
            className="cursor-pointer hover:opacity-75 duration-100
        transition flex-shrink-0"
          >
            <PencilIcon size={14} />
          </span>
        </span>
      </div>

      <div className="flex items-center gap-x-5 ml-auto">
        <p
          className="hidden md:block text-text-secondary/60
        text-sm truncate min-w-0
        "
        >
          All states are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
          <p className="text-text-secondary text-sm truncate min-w-0">
            Undo | Redo
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutomationBreadCrumb;

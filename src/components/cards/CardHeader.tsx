import { CardHeaderProps } from "@/types";
import { NextPage } from "next";

const CardHeader: NextPage<CardHeaderProps> = ({
  title,
  listLength,
  clearAllFn,
}) => {
  return (
    <div className="flex flex-row items-center justify-between p-3 border-b border-slate-200">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-base font-medium tracking-wide text-gray-900 mr-2">
          {title}
        </h1>
        <span className="h-5 w-5 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full text-xs">
          {listLength}
        </span>
      </div>
      <button
        className="text-sm font-medium text-gray-600 underline"
        type="button"
        onClick={clearAllFn}
      >
        Clear all
      </button>
    </div>
  );
};

export default CardHeader;

import { CardProps } from "@/types";
import { NextPage } from "next";

const List: NextPage<CardProps> = ({ children }) => {
  return <div className="overflow-y-auto h-72">{children}</div>;
};

export default List;

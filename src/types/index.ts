import { GroceryList } from "@prisma/client";
import React from "react";

export interface CardProps {
  children: React.ReactNode;
}

export interface CardHeaderProps {
  title: string;
  listLength: number;
  clearAllFn?: () => void;
}

export interface ListItemProps {
  item: GroceryList;
  onUpdate?: (item: GroceryList) => void;
}

export interface CardFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
}

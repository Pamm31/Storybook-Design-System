import React from "react";

type Props = {
  label: string;
};
export function Button({ label }: Props) {
  return <button>{label}</button>;
}
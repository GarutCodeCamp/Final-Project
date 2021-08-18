import { MouseEventHandler } from "react";

export interface Props {
  search: string;
  setSearch: (query: string) => void;
  handleSearch: MouseEventHandler<HTMLElement>;
}

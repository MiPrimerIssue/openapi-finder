"use client";

import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar APIs por nombre...",
}: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="api-search" className="sr-only">
        Buscar APIs por nombre
      </label>

      <input
        id="api-search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-zinc-500 focus:ring-4 focus:ring-zinc-200"
      />
    </div>
  );
}
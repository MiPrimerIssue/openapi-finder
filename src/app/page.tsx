"use client";

import { ChangeEvent, useState } from "react";
import { SearchBar } from "@/components/search-bar";

const apis = [
  {
    id: 1,
    name: "OpenWeather",
    description: "Datos del tiempo en tiempo real",
  },
  {
    id: 2,
    name: "PokeAPI",
    description: "Información sobre Pokemon",
  },
  {
    id: 3,
    name: "REST Countries",
    description: "Datos de países y regiones",
  },
  {
    id: 4,
    name: "The Cat API",
    description: "Imágenes e información de gatos",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredApis = apis.filter((api) =>
    api.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10 text-zinc-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            OpenAPI Finder
          </p>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight">
              Encuentra APIs publicas rapidamente
            </h1>
            <p className="max-w-2xl text-base text-zinc-600">
              Usa la barra de busqueda para filtrar APIs por nombre desde la
              pagina principal.
            </p>
          </div>
        </header>

        <SearchBar
          value={search}
          onChange={handleSearchChange}
          placeholder="Buscar APIs por nombre..."
        />

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Resultados
          </h2>

          {filteredApis.length > 0 ? (
            <ul className="grid gap-3">
              {filteredApis.map((api) => (
                <li
                  key={api.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{api.name}</h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    {api.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-500">
              No se han encontrado APIs con ese nombre.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
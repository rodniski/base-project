"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbContextType {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
}

// Inicializa o contexto com valores padrão
const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(
  undefined
);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: "Carregando...", href: "#" },
  ]);

  useEffect(() => {
    console.log("Breadcrumbs atualizados no contexto:", breadcrumbs);
  }, [breadcrumbs]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}


export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);

  // Log para verificar se o contexto está sendo usado corretamente
  console.log("useBreadcrumb chamado. Contexto:", context);

  if (!context) {
    throw new Error("useBreadcrumb deve ser usado dentro de um BreadcrumbProvider");
  }
  return context;
}

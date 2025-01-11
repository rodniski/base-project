"use client";
import { useBreadcrumb } from "hooks";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    console.log("Definindo breadcrumbs para a página inicial.");
    setBreadcrumbs([{ label: "Início", href: "/" }]);
  }, [setBreadcrumbs]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 gap-16 sm:p-20 font-sans bg-background text-foreground">
      {/* Logo Section */}
      <Image
        src="/SystemWiser.png"
        alt="SystemWiser Logo"
        width={150}
        height={150}
        priority
        style={{ height: "auto", width: "auto" }}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..." // Gerar versão otimizada
      />

      {/* Description */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          <span className="sr-only">Página Inicial</span> Bem-vindo ao
          SystemWiser
        </h1>
        <p className="text-lg text-muted-foreground">
          Este é o modelo oficial de NextJS + Shadcn/UI da System Wiser.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/dashboard"
          className="rounded-full border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          aria-label="Ir para o Dashboard"
        >
          Acessar Dashboard
        </a>
        <a
          href="/docs"
          className="rounded-full border border-muted text-muted-foreground hover:bg-muted/20 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          aria-label="Ler a documentação"
        >
          Documentação
        </a>
      </div>
    </div>
  );
}

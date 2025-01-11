"use client";
import { useBreadcrumb } from "hooks";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { setBreadcrumbs } = useBreadcrumb();

  // Configura o breadcrumb para esta página
  useEffect(() => {
    setBreadcrumbs([{ label: "Início", href: "/" }]);
  }, [setBreadcrumbs]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 gap-16 sm:p-20 font-sans bg-background text-foreground">
      {/* Logo Section */}
      <Image
        src="/SystemWiser.png" // Certifique-se de que o logo esteja na pasta `public`
        alt="SystemWiser Logo"
        width={150}
        height={150}
        priority
      />

      {/* Description */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao SystemWiser</h1>
        <p className="text-lg text-muted-foreground">
          Uma solução inteligente para gestão eficiente de processos e
          acompanhamento em tempo real. O futuro da eficiência começa aqui.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/dashboard"
          className="rounded-full border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
        >
          Acessar Dashboard
        </a>
        <a
          href="/docs"
          className="rounded-full border border-muted text-muted-foreground hover:bg-muted/20 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
        >
          Documentação
        </a>
      </div>
    </div>
  );
}

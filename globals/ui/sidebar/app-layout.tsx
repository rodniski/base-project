import {
  AppSidebar,
  NavActions,
  Breadcrumb,
  BreadcrumbItem as BreadcrumbUIItem,
  BreadcrumbList,
  BreadcrumbPage,
  SidebarProvider,
  SidebarTrigger,
  Separator,
} from "ui";
import { useBreadcrumb } from "hooks";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>

        <div className="flex h-screen w-screen">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content */}
          <div className="flex flex-1 flex-col">
            {/* Header */}
            <Header />

            {/* Main Content Area */}
            <main
              className="flex-1 overflow-y-auto p-4"
              role="main"
              aria-label="Conteúdo principal"
            >
              {children}
            </main>
          </div>
        </div>

    </SidebarProvider>
  );
}

function Header() {
  const { breadcrumbs } = useBreadcrumb(); // Consumindo breadcrumbs do contexto

  return (
    <header
      className="flex h-12 shrink-0 items-center gap-2 bg-background border-b border-muted"
      role="banner"
    >
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger aria-label="Abrir navegação lateral" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb aria-label="Caminho de navegação">
          <BreadcrumbList>
            {breadcrumbs.length > 0 ? (
              breadcrumbs.map((item, index) => (
                <BreadcrumbUIItem key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="line-clamp-1"
                      aria-label={`Ir para ${item.label}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <BreadcrumbPage
                      className="line-clamp-1"
                      aria-current="page"
                    >
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbUIItem>
              ))
            ) : (
              <span className="line-clamp-1">Carregando...</span>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3">
        <NavActions />
      </div>
    </header>
  );
}

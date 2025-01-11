import {
  AppSidebar,
  NavActions,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Separator,
} from "ui";

type BreadcrumbItem = {
  label: string; // Texto do item
  href?: string; // Link opcional
};

interface AppLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[]; // Breadcrumbs dinâmicos
}

export default function AppLayout({
  children,
  breadcrumbs = [],
}: AppLayoutProps) {
  return (
    <SidebarProvider>
      {/* Wrapper para ocupar toda a altura da página */}
      <div className="flex h-screen w-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="flex h-10 shrink-0 items-center gap-2 bg-background border-b border-muted">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((item, index) => (
                    <BreadcrumbItem key={index}>
                      {item.href ? (
                        <a href={item.href} className="line-clamp-1">
                          {item.label}
                        </a>
                      ) : (
                        <BreadcrumbPage className="line-clamp-1">
                          {item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="ml-auto px-3">
              <NavActions />
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

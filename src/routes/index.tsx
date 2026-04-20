import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Instagram, Music2, Facebook } from "lucide-react";
import hydr4Logo from "@/assets/hydr4-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hydr4 Lab — Links" },
      {
        name: "description",
        content:
          "Hydr4 Lab — Conhecimento que se adapta ao seu dia a dia. Dicas, receitas e conteúdo para mudar sua vida hoje.",
      },
      { property: "og:title", content: "Hydr4 Lab — Links" },
      {
        property: "og:description",
        content: "Dicas práticas, receitas e conteúdo diário da Hydr4 Lab.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const links: LinkItem[] = [
  {
    title: "Método Oculto",
    description: "Emagrecimento Natural Sem Usar Canetinhas Milagrosas.",
    href: "https://pay.cakto.com.br/8azou3d_525892",
    icon: <BookOpen className="h-5 w-5" strokeWidth={2} />,
  },
  {
    title: "104 Receitas Para Emagrecer (Sem Deixar o Doce de Lado)",
    description: "Perfeito para quem quer perder peso sem abrir mão do sabor!",
    href: "https://pay.cakto.com.br/ss4t24p_520762",
    icon: <BookOpen className="h-5 w-5" strokeWidth={2} />,
  },
  {
    title: "Instagram",
    description: "Siga para conteúdo diário.",
    href: "https://www.instagram.com/hydr4.lab/",
    icon: <Instagram className="h-5 w-5" strokeWidth={2} />,
  },
  {
    title: "TikTok",
    description: "Siga para conteúdo diário.",
    href: "#",
    icon: <Music2 className="h-5 w-5" strokeWidth={2} />,
  },
  {
    title: "Facebook",
    description: "Siga para conteúdo diário.",
    href: "https://www.facebook.com/profile.php?id=61570746263366",
    icon: <Facebook className="h-5 w-5" strokeWidth={2} />,
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-5 py-6 font-sans text-foreground">
      <div className="mx-auto w-full max-w-[480px] flex-col border-0 flex items-center justify-start">
        {/* Logo */}
        <img
          src={hydr4Logo}
          alt="Hydr4 Lab"
          className="mx-auto h-[180px] w-[180px] rounded-full bg-transparent object-contain"
        />

        {/* Subtitle */}
        <div className="mt-4 space-y-1.5 text-center text-[15px] leading-relaxed text-brand-muted">
          <p>🌿 Sempre em busca da sua melhor versão.</p>
          <p>🎯 Dicas práticas e soluções que funcionam.</p>
          <p>🔥 Comece a mudar sua vida hoje!</p>
        </div>

        {/* Links list */}
        <nav className="mt-7 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 rounded-2xl border border-brand-deep bg-brand-surface px-4 py-3.5 transition-all duration-200 hover:bg-brand-surface-hover hover:shadow-md hover:-translate-y-[1px] active:translate-y-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-deep text-foreground">
                {link.icon}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-[15px] font-semibold leading-snug text-foreground">
                  {link.title}
                </span>
                <span className="mt-0.5 text-[12.5px] leading-snug text-brand-muted">
                  {link.description}
                </span>
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="mt-7 mb-2 text-center text-xs text-brand-muted">
          © 2025 — Criado por Hydr4 Lab. ❤️
        </footer>
      </div>
    </main>
  );
}

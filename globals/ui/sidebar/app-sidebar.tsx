"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import {
  NavFavorites,
  NavMain,
  NavSecondary,
  NavWorkspaces,
  TeamSwitcher,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "ui";

const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        {/* Team Switcher */}
        <TeamSwitcher teams={data.teams} aria-label="Selecionar equipe" />

        {/* Main Navigation */}
        <NavMain
          items={data.navMain.map((item) => ({
            ...item,
            title: item.title,
            ariaLabel: `Navegar para ${item.title}`,
          }))}
        />
      </SidebarHeader>
      <SidebarContent>
        {/* Favorites */}
        <NavFavorites
          favorites={data.favorites.map((favorite) => ({
            ...favorite,
            ariaLabel: `Abrir ${favorite.name}`,
          }))}
        />

        {/* Workspaces */}
        <NavWorkspaces
          workspaces={data.workspaces.map((workspace) => ({
            ...workspace,
            pages: workspace.pages.map((page) => ({
              ...page,
              ariaLabel: `Abrir ${page.name}`,
            })),
          }))}
        />

        {/* Secondary Navigation */}
        <NavSecondary
          items={data.navSecondary.map((item) => ({
            ...item,
            ariaLabel: `Navegar para ${item.title}`,
          }))}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

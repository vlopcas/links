"use client";

import { useEffect, useRef, useState } from "react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallCard() {
  const promptRef = useRef<InstallPromptEvent | null>(null);
  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/card-sw.js", { scope: "/card/" }).catch(() => undefined);
    }
    function capturePrompt(event: Event) {
      event.preventDefault();
      promptRef.current = event as InstallPromptEvent;
    }
    function installed() {
      promptRef.current = null;
      setInstruction("");
    }
    window.addEventListener("beforeinstallprompt", capturePrompt);
    window.addEventListener("appinstalled", installed);
    return () => {
      window.removeEventListener("beforeinstallprompt", capturePrompt);
      window.removeEventListener("appinstalled", installed);
    };
  }, []);

  async function install() {
    const prompt = promptRef.current;
    if (prompt) {
      await prompt.prompt();
      await prompt.userChoice;
      promptRef.current = null;
      return;
    }

    const isAppleMobile = /iphone|ipad|ipod/i.test(navigator.userAgent);
    setInstruction(isAppleMobile
      ? "No Safari, toque em Compartilhar e depois em Adicionar à Tela de Início."
      : "Abra o menu do navegador e escolha Instalar aplicativo ou Adicionar à tela inicial.");
  }

  return (
    <div className="install-card">
      <button type="button" onClick={install}>
        <span aria-hidden="true">＋</span>
        Instalar cartão
      </button>
      {instruction && <p role="status">{instruction}</p>}
    </div>
  );
}

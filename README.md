# links.vlopcas.dev

Hub de identidade e navegação para o portfólio, projetos, currículo e canais de contato de Victor Castro.

## Desenvolvimento

```bash
npm install
npm run dev
```

O site usa exportação estática do Next.js e é publicado no GitHub Pages pelo workflow incluído. A indexação começa desativada; para habilitá-la, defina `NEXT_PUBLIC_ALLOW_INDEXING=true` no build.

## Cartão presencial

`/card` é uma tela otimizada para abrir no celular e mostrar pessoalmente. O QR exibido aponta para `qr.vlopcas.dev/card`, que redireciona quem escanear para a experiência `/connect`.

A tela oferece instalação como PWA. Em navegadores compatíveis, abre o prompt nativo; nos demais, apresenta a orientação para adicionar à tela inicial. Quando instalada, abre diretamente em `/card` e oculta a ação de instalação.

`/connect` é a versão entregue a quem escaneia o cartão. Nela, o currículo é substituído pela opção de importar `victor-castro.vcf` para os contatos.

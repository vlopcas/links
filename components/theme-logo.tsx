import Image from "next/image";

export function ThemeLogo() {
  return (
    <span className="theme-logo" aria-hidden="true">
      <Image className="logo-dark" src="/logo.png" alt="" width={58} height={58} />
      <Image className="logo-light" src="/logo-preta.png" alt="" width={58} height={58} />
    </span>
  );
}

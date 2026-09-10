import type { ReactNode } from "react";

type IconProps = { className?: string };
const Svg = ({ children, className }: IconProps & { children: ReactNode }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;

export const ArrowIcon = (props: IconProps) => <Svg {...props}><path d="m8.5 6.5 5.5 5.5-5.5 5.5" /></Svg>;
export const SiteIcon = (props: IconProps) => <Svg {...props}><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5" /></Svg>;
export const ProjectsIcon = (props: IconProps) => <Svg {...props}><path d="M4 7.5h16v11H4zM7 4h10v3.5" /><path d="m9 11 2 1.8L9 15m4.5 0H16" /></Svg>;
export const FileIcon = (props: IconProps) => <Svg {...props}><path d="M6 3.5h8l4 4V21H6zM14 3.5V8h4M9 12h6M9 16h6" /></Svg>;
export const ContactIcon = (props: IconProps) => <Svg {...props}><circle cx="10" cy="8" r="3" /><path d="M4.5 19a5.5 5.5 0 0 1 11 0M19 11v6M16 14h6" /></Svg>;
export const GithubIcon = (props: IconProps) => <Svg {...props}><path d="M9 19c-4.5 1.4-4.5-2.3-6.3-2.8M15.3 21v-3.5c0-1 .1-1.4-.5-2 3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19.6 5c.1-.3.6-1.7-.1-3.5 0 0-1.1-.4-3.8 1.4a13 13 0 0 0-6.8 0C6.2 1.1 5 1.5 5 1.5 4.3 3.3 4.8 4.7 4.9 5a5.2 5.2 0 0 0-1.4 3.7c0 5.2 3.2 6.4 6.2 6.7-.4.4-.7 1-.7 2V21" /></Svg>;
export const LinkedinIcon = (props: IconProps) => <Svg {...props}><path d="M6.5 9.5V19M6.5 5.5v.1M11 19v-5.4a4 4 0 0 1 8 0V19M11 9.5V19" /></Svg>;
export const MessageIcon = (props: IconProps) => <Svg {...props}><path d="M20 11.5a8 8 0 0 1-11.8 7L4 19.5l1.1-4A8 8 0 1 1 20 11.5Z" /><path d="M8.8 8.3c.5 3.2 2.1 4.8 5.2 5.4l1.1-1.3" /></Svg>;
export const WhatsAppIcon = (props: IconProps) => <svg className={props.className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2.05 22l5.2-1.53A9.95 9.95 0 1 0 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.91.92-3-.2-.31a8.08 8.08 0 1 1 6.79 3.71Zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2a7.29 7.29 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.31-.75-1.8-.2-.47-.4-.41-.55-.42h-.46c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" /></svg>;

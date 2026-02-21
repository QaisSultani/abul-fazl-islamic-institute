interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`inline-block px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-gold bg-gold-pale rounded-full ${className}`}
    >
      {children}
    </div>
  );
}

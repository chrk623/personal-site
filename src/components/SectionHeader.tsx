interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader = ({ number, title }: SectionHeaderProps) => (
  <div className="mb-8 flex items-center">
    <span className="mr-2 font-mono text-xl text-primary">{number}.</span>
    <h3 className="text-2xl text-foreground">{title}</h3>
  </div>
);

interface SectionHeaderProps {
  text: string;
}
const SectionHeader = ({ text }: SectionHeaderProps) => {
  return <h2 className="text-4xl font-bold">{text}</h2>;
};

export default SectionHeader;

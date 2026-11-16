type Props = { brand: string; language: string };

export default function Landing({ brand, language }: Props) {
  return (
    <div className="cnh-lp-marca1" data-brand={brand} data-lang={language}>
      <h1>Landing Page Marca 1</h1>
    </div>
  );
}
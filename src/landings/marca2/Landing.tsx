type Props = { brand: string; language: string };

export default function Landing({ brand, language }: Props) {
  return (
    <div className="cnh-lp-marca2" data-brand={brand} data-lang={language}>
      <h1>Landing Page Marca 2</h1>
    </div>
  );
}
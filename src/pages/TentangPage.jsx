import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Experience from "../components/Experience";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-surface-primary">
      <PageHeader 
        title="Tentang Kami" 
        subtitle="Mengenal lebih dekat ruang kreatif dan nilai eksklusif yang kami hadirkan untuk Anda."
        bgImage="/conten_centro/tempat.webp"
      />
      <About hideHeader={true} />
      <Experience />
    </div>
  );
}

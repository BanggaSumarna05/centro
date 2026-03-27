import PageHeader from "../components/PageHeader";
import Menu from "../components/Menu";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-surface-primary">
      <PageHeader 
        title="Menu Lengkap" 
        subtitle="Eksplorasi seluruh sajian istimewa kami, mulai dari signature coffee hingga pendamping lezat."
        bgImage="/conten_centro/tempat.webp"
      />
      <Menu hideHeader={true} />
    </div>
  );
}

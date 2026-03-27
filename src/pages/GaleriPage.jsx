import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-surface-primary">
      <PageHeader 
        title="Galeri Ruang" 
        subtitle="Potret suasana, sudut estetis, dan momen-momen istimewa di Centro Roast Space."
        bgImage="/conten_centro/tempat.webp"
      />
      <Gallery hideHeader={true} />
    </div>
  );
}

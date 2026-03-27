import PageHeader from "../components/PageHeader";
import Events from "../components/Events";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-surface-primary">
      <PageHeader 
        title="Event Berkala" 
        subtitle="Bergabunglah dalam diskusi, workshop, dan live music yang menghidupkan suasana."
        bgImage="/conten_centro/tempat.webp"
      />
      <Events hideHeader={true} />
    </div>
  );
}

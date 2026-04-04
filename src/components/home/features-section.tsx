import { FeatureCard, featureCards } from ".";

export function FeaturesSection() {
  return (
    <section>
      <div className="max-w-360 mx-auto grid grid-cols-2 gap-5 p-5 bg-white">
        {featureCards.map((card) => (
          <FeatureCard
            key={card.highlight}
            highlight={card.highlight}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}

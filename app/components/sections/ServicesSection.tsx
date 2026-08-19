import { services } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

const serviceCopy = [
  "Cross-platform mobile applications for Android and iOS, from production UI through API and Firebase integration.",
  "Responsive web platforms using React.js and Next.js for product experiences and companion dashboards.",
  "Live location tracking, chat, push notifications, and event-driven updates with Firebase and WebSocket / Socket.io.",
  "REST API integration, authentication, CRUD workflows, databases, and service integrations.",
  "n8n automation workflows and API integrations to reduce repetitive business processes.",
  "Strapi-based content workflows and API-driven content management for web applications.",
];

export function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHeading
          tag="// What I Do"
          title="What I build"
          copy="Mobile, web, real-time, and automation work grounded in the technologies and responsibilities shown in my experience."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card reveal reveal-delay-${index % 3}`} key={service}>
              <span className="service-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
              <p>{serviceCopy[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

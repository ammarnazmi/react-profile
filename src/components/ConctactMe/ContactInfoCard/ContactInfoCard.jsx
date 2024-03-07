import "./ContactInfoCard.css";

export default function ContactInfoCard({ icon, text }) {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <p>{text}</p>
    </div>
  );
}

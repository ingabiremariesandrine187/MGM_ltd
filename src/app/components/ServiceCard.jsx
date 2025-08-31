export default function ServiceCard({ title, description, className }) {
  return (
    <div className={className}>
      <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
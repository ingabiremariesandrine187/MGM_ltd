function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default ProjectCard
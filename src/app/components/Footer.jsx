function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">
          © 2025 <span className="text-blue-400 font-semibold">MGM Multipurpose Ltd</span> | Kigali, Rwanda | Serving East Africa
        </p>
        <p className="mb-4">
          📞 +250 788 595 731 | ✉️ mgmgasoreltd@gmail.com
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition">🌐</a>
          <a href="#" className="hover:text-blue-400 transition">🔗</a>
          <a href="#" className="hover:text-blue-400 transition">📧</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

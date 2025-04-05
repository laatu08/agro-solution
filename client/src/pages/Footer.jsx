import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Logo & Description */}
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-green-600 via-lime-500 to-green-400 text-transparent bg-clip-text"
          >
            AGRO
          </Link>
          <p className="mt-2 text-gray-500 max-w-sm">
            Empowering farmers with smart insights, weather predictions, and
            better crop decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-semibold mb-1 text-gray-800">Quick Links</h3>
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/summarize" className="hover:text-green-600 transition">Solution</Link>
          <Link to="/view" className="hover:text-green-600 transition">View</Link>
          <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-semibold mb-1 text-gray-800">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-green-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-green-600 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-green-600 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t py-4">
        © {new Date().getFullYear()} AGRO. All rights reserved.
      </div>
    </footer>
  );
}

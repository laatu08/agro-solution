import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solution", label: "Solution" },
    { href: "/view", label: "View" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-green-600 via-lime-500 to-green-400 text-transparent bg-clip-text tracking-wide"
        >
          AGRO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Button className="bg-green-600 hover:bg-green-700 text-white transition duration-200">
                <Link to="/register">Register</Link>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white transition duration-200">
                <Link to="/login">Login</Link>
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white transition duration-200"
            >
              Logout
            </Button>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-white">
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-gray-800 hover:text-green-600"
                  >
                    {link.label}
                  </Link>
                ))}

                {!isLoggedIn ? (
                  <>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/register">Register</Link>
                    </Button>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

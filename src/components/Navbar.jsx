import { useContext, useState } from "react";
import { LogOut, Menu, SunIcon, X } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { motion } from "motion/react";
import { UserContext } from "../context/AuthContext";

export default function Navbar({ user }) {
  const { logout } = useContext(UserContext);
  // State to control mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle logout
  const handleLogout = () => {
    logout();
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="border-b"
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="flex text-xl font-bold">
            <span className="flex text-primary">
              <SunIcon />
              Sun
            </span>
            Store
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-12">
          <div className="flex gap-8">
            <a
              href="/"
              className="text-sm font-medium transition hover:text-primary"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-sm font-medium transition hover:text-primary"
            >
              Products
            </a>
            <a
              href="/services"
              className="text-sm font-medium transition hover:text-primary"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm font-medium transition hover:text-primary"
            >
              Contact
            </a>
          </div>

          {/* Authentication Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="User"
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <p className="w-full">Balance</p>{" "}
                    <span className="text-sm font-medium text-primary">
                      ${user.balance}
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a href="/login" className="w-full">
                <Button>Login</Button>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative mr-2 h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <p className="w-full">Balance</p>{" "}
                  <span className="text-sm font-medium text-primary">
                    ${user.balance}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a href="/login" className="w-full">
              <Button variant="ghost" size="sm" className="mr-2">
                Login
              </Button>
            </a>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-screen-xl flex-col space-y-4 px-4 py-4">
            <a
              href="/"
              className="text-sm font-medium transition hover:text-primary"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-medium transition hover:text-primary"
            >
              About
            </a>
            <a
              href="/services"
              className="text-sm font-medium transition hover:text-primary"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm font-medium transition hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

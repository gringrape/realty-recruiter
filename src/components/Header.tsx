import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold">부동산 중매 서비스</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#brokerage"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                중매소개서
              </a>
              <a
                href="#subscriptions"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                청약정보
              </a>
              <a
                href="#about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                회사소개
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                문의하기
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-primary-hover"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary-hover">
              <a
                href="#brokerage"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-hover transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                중매소개서
              </a>
              <a
                href="#subscriptions"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-hover transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                청약정보
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-hover transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                회사소개
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-hover transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
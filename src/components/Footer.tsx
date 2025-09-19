import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-real-estate-blue text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">사업자 정보</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>사업자등록번호: 123-45-67890</p>
              <p>대표자: 이정호</p>
              <p>통신판매업신고: 2024-서울강남-1234</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">연락처</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@realestate.co.kr</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>서울시 강남구 테헤란로 123, 456호</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">운영시간</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <div>
                  <p>평일: 09:00 - 18:00</p>
                  <p>토요일: 09:00 - 15:00</p>
                  <p>일요일/공휴일: 휴무</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              <p>&copy; 2025 부동산 중매 서비스. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                고객센터
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

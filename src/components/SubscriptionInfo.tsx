import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays, MapPin, Users, Home, Clock } from "lucide-react";

interface SubscriptionData {
  id: number;
  title: string;
  location: string;
  totalUnits: number;
  availableUnits: number;
  applicationStart: string;
  applicationEnd: string;
  moveInDate: string;
  priceRange: string;
  type: string;
  status: "접수예정" | "접수중" | "마감임박" | "접수완료";
}

const subscriptionData: SubscriptionData[] = [
  {
    id: 1,
    title: "레미안 OO",
    location: "서울특별시 강남구",
    totalUnits: 1050,
    availableUnits: 700,
    applicationStart: "2025-10-3",
    applicationEnd: "2025-10-4",
    moveInDate: "2025-12-01",
    priceRange: "7.2억~9.1억",
    type: "민간분양",
    status: "접수예정"
  },
  {
    id: 2,
    title: "신혼 희망 타운",
    location: "경기도 과천시",
    totalUnits: 850,
    availableUnits: 500,
    applicationStart: "2025-10-7",
    applicationEnd: "2025-10-8",
    moveInDate: "",
    priceRange: "4.2억~5.3억(추정)",
    type: "공공분양",
    status: "접수중"
  },
  {
    id: 3,
    title: "행복주택 OO역",
    location: "인천 연수구",
    totalUnits: 420,
    availableUnits: 0,
    applicationStart: "2025-10-15",
    applicationEnd: "2025-10-16",
    moveInDate: "2025-10-31",
    priceRange: "4억~7억",
    type: "행복주택",
    status: "접수예정"
  },
  {
    id: 4,
    title: "국민임대 OO",
    location: "부산 해운대구",
    totalUnits: 600,
    availableUnits: 0,
    applicationStart: "2025-9-28",
    applicationEnd: "2025-9-30",
    moveInDate: "2025-10-15",
    priceRange: "4억~6억",
    type: "공공임대",
    status: "접수중"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "접수예정":
      return "bg-success text-white";
    case "마감임박":
      return "bg-warning text-white";
    case "접수완료":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const SubscriptionInfo = () => {
  return (
    <section id="subscriptions" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            청약정보
          </h2>
          <p className="text-muted-foreground text-lg">
            최신 청약 모집 정보를 확인하세요
          </p>
        </div>

        {/* Subscription Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subscriptionData.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 border-real-estate-blue/20">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-bold text-real-estate-blue line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Home className="w-4 h-4" />
                    <span>{item.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>총 {item.totalUnits}세대</span>
                    <span>{item.availableUnits === 0 ? "" : `/ 일반 ${item.availableUnits}세대`}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <span>접수기간: {item.applicationStart} ~ {item.applicationEnd}</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm font-semibold text-real-estate-blue">
                    분양가: {item.priceRange}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover"
                      disabled={item.status === "접수완료"}
                    >
                      {item.status === "접수완료" ? "접수완료" : "상세정보"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-real-estate-blue">
                        {item.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-real-estate-blue">기본정보</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span>위치: {item.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Home className="w-4 h-4 text-muted-foreground" />
                              <span>주택유형: {item.type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span>총 세대수: {item.totalUnits}세대</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span>모집세대: {item.availableUnits}세대</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-real-estate-blue">일정정보</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="w-4 h-4 text-muted-foreground" />
                              <span>청약시작: {item.applicationStart}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="w-4 h-4 text-muted-foreground" />
                              <span>청약마감: {item.applicationEnd}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>입주예정: {item.moveInDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-4 h-4 text-center">💰</span>
                              <span>분양가격: {item.priceRange}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-real-estate-blue mb-3">추가정보</h4>
                        <p className="text-sm text-muted-foreground">
                          자세한 청약 조건과 서류 준비사항은 청약홈 또는 사업주체에 문의하시기 바랍니다.
                          청약자격, 대출조건, 입주시기 등은 변경될 수 있습니다.
                        </p>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1 bg-primary hover:bg-primary-hover">
                          청약하기
                        </Button>
                        <Button variant="outline" className="flex-1">
                          관심등록
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionInfo;

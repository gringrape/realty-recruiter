import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Train } from "lucide-react";

const BrokerageIntroduction = () => {
  return (
    <section id="brokerage" className="py-12 bg-real-estate-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            금주의 중매소개서
          </h2>
          <Button variant="outline" className="text-sm">
            전체보기
          </Button>
        </div>

        {/* Main Content Card */}
        <Card className="border-2 border-real-estate-blue/20 shadow-lg">
          <CardContent className="p-6">
            {/* Promotional Header */}
            <div className="text-center mb-6 p-4 bg-real-estate-light/30 rounded-lg border-2 border-real-estate-blue/20">
              <h3 className="text-lg sm:text-xl font-bold text-real-estate-blue mb-2">
                월세 70만원! 나는 멋진한 놈 있나?
              </h3>
              <p className="text-sm text-muted-foreground">
                잔소리 듣기 싫으면 찾아하라 잘말로
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Property Details */}
              <div className="lg:col-span-2 space-y-4">
                {/* Rating and Title */}
                <div className="bg-real-estate-blue text-primary-foreground p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">종합평점:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-real-estate-accent text-real-estate-accent" />
                      ))}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold">힘스테이트 강남 아파트</h4>
                </div>

                {/* Property Info Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Card className="border-2 border-real-estate-blue/30">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-real-estate-blue">월세 70만원</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-real-estate-blue/30">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold">200세대 모집</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-real-estate-blue/30">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold">12평/방 2개</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-real-estate-blue text-primary-foreground hover:bg-real-estate-dark">
                    <MapPin className="w-3 h-3 mr-1" />
                    저렴함
                  </Badge>
                  <Badge className="bg-real-estate-blue text-primary-foreground hover:bg-real-estate-dark">
                    <Clock className="w-3 h-3 mr-1" />
                    최장 10년
                  </Badge>
                  <Badge className="bg-real-estate-blue text-primary-foreground hover:bg-real-estate-dark">
                    <Train className="w-3 h-3 mr-1" />
                    지하철5분
                  </Badge>
                </div>
              </div>

              {/* Right Column - Floor Plan */}
              <div className="lg:col-span-1">
                <Card className="h-full min-h-[200px] border-2 border-real-estate-blue/30">
                  <CardContent className="p-6 flex items-center justify-center h-full">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 mx-auto mb-3 bg-real-estate-light rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <p className="font-medium">아파트</p>
                      <p className="text-sm">조감도</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Promotional Section */}
            <div className="mt-6 p-4 bg-real-estate-light/50 rounded-lg border border-real-estate-blue/20">
              <div className="text-center">
                <h5 className="font-bold text-real-estate-blue mb-2">
                  ♣중계내밭민트♣
                </h5>
                <p className="text-sm mb-2">
                  강남 롯데리 10분! 걸까갔항, 아제마 기출한신인싸인어! 젝당혜!
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ</p>
                  <p>□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ□ㄴㅇㅎ</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6 text-center">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-2">
                상세 보기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrokerageIntroduction;
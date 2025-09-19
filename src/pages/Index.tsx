import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrokerageIntroduction from "@/components/BrokerageIntroduction";
import SubscriptionInfo from "@/components/SubscriptionInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BrokerageIntroduction />
        <SubscriptionInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

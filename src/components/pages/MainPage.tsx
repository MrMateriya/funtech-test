import PageLayout from "@/components/layouts/PageLayout";
import IntroSection from "@/components/IntroSection";
import TopNftSection from "@/components/TopNftSection";
import BannerSection from "@/components/BannerSection";

export default function MainPage() {
  return (
    <PageLayout className="main-page">
      <IntroSection />
      <TopNftSection />
      <BannerSection />
    </PageLayout>
  );
}

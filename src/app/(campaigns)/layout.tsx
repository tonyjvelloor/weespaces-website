import CampaignHeader from '@/components/CampaignHeader';
import CampaignFooter from '@/components/CampaignFooter';

export default function CampaignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CampaignHeader />
      <main className="flex-grow">
        {children}
      </main>
      <CampaignFooter />
    </>
  );
}

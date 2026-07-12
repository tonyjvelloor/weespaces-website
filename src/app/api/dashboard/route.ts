import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data representing the 4 KPI sections: Acquisition, Engagement, Sales, Business
  const dashboardData = {
    acquisition: {
      organicSessions: 14250,
      organicGrowth: '+12%',
      paidSessions: 8400,
      paidGrowth: '-2%',
      cpc: '₹145',
      ctr: '4.8%',
      costPerLead: '₹1,250'
    },
    engagement: {
      calculatorCompletions: 342,
      calculatorGrowth: '+45%',
      finderCompletions: 215,
      gstCheckerCompletions: 512,
      avgSessionTime: '3m 14s'
    },
    sales: {
      virtualOfficeLeads: 420,
      voLeadGrowth: '+18%',
      enterpriseLeads: 45,
      enterpriseGrowth: '+8%',
      toursBooked: 112,
      toursCompleted: 89,
      closeRate: '22%'
    },
    business: {
      seatsSold: 4500,
      occupancy: '86%',
      revenueMonthly: '₹3.4 Cr',
      revenueGrowth: '+5%',
      revenueByLocation: [
        { city: 'Kochi', revenue: '₹1.2 Cr', occupancy: '92%' },
        { city: 'Coimbatore', revenue: '₹95 L', occupancy: '84%' },
        { city: 'Trivandrum', revenue: '₹85 L', occupancy: '88%' },
        { city: 'Calicut', revenue: '₹40 L', occupancy: '75%' }
      ],
      revenueByService: [
        { service: 'Enterprise Office', percentage: 55 },
        { service: 'Coworking', percentage: 25 },
        { service: 'Virtual Office', percentage: 15 },
        { service: 'Meeting Rooms', percentage: 5 }
      ]
    }
  };

  return NextResponse.json(dashboardData);
}

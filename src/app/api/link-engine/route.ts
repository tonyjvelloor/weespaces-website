import { NextResponse } from 'next/server';

export async function GET() {
  const engineData = {
    overview: {
      totalInternalUrls: 542,
      totalInternalLinks: 60970,
      totalCanonicalUrls: 321,
      uncrawledExternal: 2895,
      averageAuthorityScore: 78
    },
    tier1: [
      {
        url: "/virtual-office",
        type: "Tier 1 - Commercial",
        internalLinks: 310,
        semanticRelevance: 95,
        commercialValue: 98,
        organicTraffic: 85,
        aiCitationPotential: 92,
        authorityScore: 92,
        recommendation: "Optimal link equity. Monitor for decay."
      },
      {
        url: "/private-office/kochi/mg-road",
        type: "Tier 1 - Location",
        internalLinks: 320,
        semanticRelevance: 88,
        commercialValue: 95,
        organicTraffic: 72,
        aiCitationPotential: 75,
        authorityScore: 85,
        recommendation: "Over-linked. Prune 20-30 non-contextual links."
      },
      {
        url: "/managed-office/coimbatore/saravanampatti",
        type: "Tier 1 - Location",
        internalLinks: 12,
        semanticRelevance: 90,
        commercialValue: 94,
        organicTraffic: 40,
        aiCitationPotential: 80,
        authorityScore: 63,
        recommendation: "Severely under-linked. Add 45 contextual links from Knowledge Hub."
      }
    ],
    tier2: [
      {
        url: "/compare/virtual-office-vs-physical-office",
        type: "Tier 2 - Comparison",
        internalLinks: 42,
        semanticRelevance: 96,
        commercialValue: 80,
        organicTraffic: 65,
        aiCitationPotential: 95,
        authorityScore: 75,
        recommendation: "Add 15 internal links from City Pages."
      },
      {
        url: "/knowledge/workspace-economics",
        type: "Tier 2 - Knowledge",
        internalLinks: 18,
        semanticRelevance: 98,
        commercialValue: 60,
        organicTraffic: 85,
        aiCitationPotential: 98,
        authorityScore: 71,
        recommendation: "Link this page from 12 research articles."
      }
    ],
    tier3: [
      {
        url: "/blog/cost-of-setting-up-office-in-kochi",
        type: "Tier 3 - Blog",
        internalLinks: 2,
        semanticRelevance: 92,
        commercialValue: 40,
        organicTraffic: 30,
        aiCitationPotential: 85,
        authorityScore: 49,
        recommendation: "Add 8 more links from Virtual Office pages."
      },
      {
        url: "/blog/workspace-cost-index-2026",
        type: "Tier 3 - Research",
        internalLinks: 5,
        semanticRelevance: 99,
        commercialValue: 50,
        organicTraffic: 50,
        aiCitationPotential: 99,
        authorityScore: 60,
        recommendation: "Add 10 links from Enterprise Commercial pages."
      }
    ]
  };

  return NextResponse.json(engineData);
}

export interface CityCosts {
  slug: string;
  name: string;
  pricePerSqftStandard: number;
  pricePerSqftPremium: number;
  electricityPerSqft: number;
  internetMonthly: number;
  maintenancePerSqft: number;
  adminStaffMonthly: number;
  depositMonths: number;
}

export const calculatorConfig = {
  virtualOfficeYearlyCost: 15000,
  sqftPerPerson: 50,
  cities: [
    {
      slug: 'kochi',
      name: 'Kochi',
      pricePerSqftStandard: 50,
      pricePerSqftPremium: 80,
      electricityPerSqft: 10,
      internetMonthly: 2000,
      maintenancePerSqft: 5,
      adminStaffMonthly: 15000,
      depositMonths: 6,
    },
    {
      slug: 'coimbatore',
      name: 'Coimbatore',
      pricePerSqftStandard: 45,
      pricePerSqftPremium: 75,
      electricityPerSqft: 9,
      internetMonthly: 1800,
      maintenancePerSqft: 4,
      adminStaffMonthly: 12000,
      depositMonths: 6,
    },
    {
      slug: 'trivandrum',
      name: 'Trivandrum',
      pricePerSqftStandard: 55,
      pricePerSqftPremium: 85,
      electricityPerSqft: 11,
      internetMonthly: 2200,
      maintenancePerSqft: 6,
      adminStaffMonthly: 16000,
      depositMonths: 6,
    },
    {
      slug: 'calicut',
      name: 'Calicut',
      pricePerSqftStandard: 40,
      pricePerSqftPremium: 65,
      electricityPerSqft: 8,
      internetMonthly: 1500,
      maintenancePerSqft: 4,
      adminStaffMonthly: 12000,
      depositMonths: 6,
    }
  ] as CityCosts[]
};

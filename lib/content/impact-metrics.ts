export type ImpactMetric = {
  value: string;
  label: string;
};

/** Métricas derivadas apenas de dados atestados no perfil (LinkedIn / Profile.pdf). */
export function buildImpactMetrics(yearsOfExperience: number): ImpactMetric[] {
  return [
    {
      value: `${yearsOfExperience}+`,
      label: "Anos de experiência (desde 2021)",
    },
  ];
}

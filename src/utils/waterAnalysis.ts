
interface WaterData {
  // Primary Parameters
  totalDissolvedSolids: number;
  conductivity: number;
  ph: number;
  chloride: number;
  sodium: number;
  sulphate: number;
  heavyMetals: number;
  bacterialContamination: number;
  
  // Secondary Parameters
  dissolvedOxygen: number;
  biochemicalOxygenDemand: number;
  nitrates: number;
  phosphates: number;
  pesticides: number;
  industrialChemicals: number;
  turbidity: number;
  
  sourceType: string;
}

export const calculateSalinity = (formData: WaterData): number => {
  // Enhanced salinity calculation taking into account multiple factors
  // More weight given to chloride and sodium which are primary salinity indicators
  const weightedSum = (0.3 * formData.chloride / 100) + 
                      (0.3 * formData.sodium / 100) + 
                      (0.2 * formData.sulphate / 100) + 
                      (0.2 * formData.conductivity / 500);
  return Math.round((weightedSum * 3.5) * 10) / 10; // Scale to approximate ppt range
};

export const determineContaminationType = (formData: WaterData): string => {
  // Determine most likely contamination type based on parameters
  if (formData.heavyMetals > 1) {
    return 'Heavy Metal';
  } else if (formData.bacterialContamination > 50) {
    return 'Bacterial';
  } else if (formData.chloride > 300 && formData.sodium > 250) {
    return 'Salt Water Intrusion';
  } else if (formData.pesticides > 1 || formData.industrialChemicals > 0.5) {
    return 'Chemical';
  } else if (formData.nitrates > 15 || formData.phosphates > 2) {
    return 'Agricultural Runoff';
  } else if (formData.sourceType === 'tap' && 
           formData.heavyMetals < 0.5 && 
           formData.bacterialContamination < 10) {
    return 'Minimal';
  }
  
  return 'Mixed';
};

export const calculateSafetyScore = (formData: WaterData): number => {
  let score = 100;
  
  // Primary parameters penalties
  if (formData.ph < 6.5 || formData.ph > 8.5) {
    score -= 15;
  }
  
  if (formData.totalDissolvedSolids > 500) {
    score -= Math.min(Math.floor((formData.totalDissolvedSolids - 500) / 100) * 5, 20);
  }
  
  if (formData.conductivity > 800) {
    score -= Math.min(Math.floor((formData.conductivity - 800) / 100) * 5, 20);
  }
  
  if (formData.heavyMetals > 0.5) {
    score -= Math.min(formData.heavyMetals * 30, 40);
  }
  
  if (formData.bacterialContamination > 10) {
    score -= Math.min(Math.floor(formData.bacterialContamination / 10) * 10, 30);
  }
  
  // Secondary parameters penalties
  if (formData.dissolvedOxygen < 6) {
    score -= (6 - formData.dissolvedOxygen) * 5;
  }
  
  if (formData.biochemicalOxygenDemand > 6) {
    score -= (formData.biochemicalOxygenDemand - 6) * 3;
  }
  
  if (formData.nitrates > 10) {
    score -= Math.min((formData.nitrates - 10) * 2, 15);
  }
  
  if (formData.phosphates > 1) {
    score -= Math.min(formData.phosphates * 5, 15);
  }
  
  if (formData.pesticides > 0.5) {
    score -= Math.min(formData.pesticides * 20, 30);
  }
  
  if (formData.industrialChemicals > 0.2) {
    score -= Math.min(formData.industrialChemicals * 25, 35);
  }
  
  if (formData.turbidity > 5) {
    score -= Math.min(formData.turbidity, 15);
  }
  
  // Source type adjustment
  if (formData.sourceType === 'river') {
    score -= 5;
  } else if (formData.sourceType === 'well') {
    score -= 2;
  }
  
  return Math.max(0, Math.min(100, Math.round(score)));
};

export const determineQualityCategory = (formData: WaterData): string => {
  const score = calculateSafetyScore(formData);
  
  if (score >= 90) return 'Excellent';
  if (score >= 75) return 'Good';
  if (score >= 60) return 'Fair';
  if (score >= 45) return 'Poor';
  return 'Very Poor';
};

export const generateRecommendations = (formData: WaterData): string[] => {
  const recommendations: string[] = [];
  
  // Primary parameters recommendations
  if (formData.ph < 6.5) {
    recommendations.push('Consider pH adjustment treatment to increase alkalinity.');
  } else if (formData.ph > 8.5) {
    recommendations.push('Consider pH adjustment treatment to reduce alkalinity.');
  }
  
  if (formData.totalDissolvedSolids > 500) {
    recommendations.push('Consider reverse osmosis or distillation to reduce total dissolved solids.');
  }
  
  if (formData.conductivity > 800) {
    recommendations.push('High electrical conductivity indicates elevated mineral content. Consider ion exchange treatment.');
  }
  
  if (formData.heavyMetals > 0.5) {
    recommendations.push('Activated carbon filtration recommended to reduce heavy metal content.');
  }
  
  if (formData.bacterialContamination > 10) {
    recommendations.push('Disinfection treatment (chlorination, UV, or ozonation) recommended to address bacterial contamination.');
  }
  
  // Secondary parameters recommendations
  if (formData.dissolvedOxygen < 6) {
    recommendations.push('Aeration may improve dissolved oxygen levels.');
  }
  
  if (formData.biochemicalOxygenDemand > 6) {
    recommendations.push('High BOD indicates organic pollution. Consider biological treatment.');
  }
  
  if (formData.nitrates > 10 || formData.phosphates > 1) {
    recommendations.push('Consider ion exchange or reverse osmosis to reduce nutrient levels.');
  }
  
  if (formData.pesticides > 0.5 || formData.industrialChemicals > 0.2) {
    recommendations.push('Advanced activated carbon filtration recommended for chemical contaminant removal.');
  }
  
  if (formData.turbidity > 5) {
    recommendations.push('Filtration recommended to reduce turbidity levels.');
  }
  
  // Add general recommendations if list is short
  if (recommendations.length < 2) {
    recommendations.push('Regular testing recommended to maintain water quality.');
  }
  
  return recommendations;
};

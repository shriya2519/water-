
// Simple utility functions for water quality prediction

/**
 * Calculates the approximate salinity level based on conductivity and TDS
 * @param conductivity Electrical conductivity in μS/cm
 * @param tds Total dissolved solids in mg/L
 * @returns Approximate salinity in parts per thousand (ppt)
 */
export const calculateSalinity = (conductivity: number, tds: number): number => {
  // Simple approximation based on the relationship between TDS and salinity
  // Salinity (ppt) ≈ 0.4665 * TDS (mg/L) / 1000
  return Math.round((0.4665 * tds / 1000) * 10) / 10;
};

/**
 * Calculates an overall water safety score based on various parameters
 * @param params Object containing water quality parameters
 * @returns Safety score from 0-100
 */
export const calculateSafetyScore = (params: {
  ph: number;
  turbidity: number;
  dissolvedOxygen: number;
  conductivity: number;
  sourceType: string;
}): number => {
  const { ph, turbidity, dissolvedOxygen, conductivity, sourceType } = params;
  let score = 100;
  
  // pH penalty (optimal range is 6.5-8.5)
  if (ph < 6.5 || ph > 8.5) {
    score -= 15;
  }
  
  // Turbidity penalty
  if (turbidity > 5) {
    score -= Math.min(turbidity, 20);
  }
  
  // Dissolved oxygen penalty
  if (dissolvedOxygen < 6) {
    score -= (6 - dissolvedOxygen) * 10;
  }
  
  // Conductivity penalty
  if (conductivity > 800) {
    score -= Math.min(Math.floor((conductivity - 800) / 100) * 5, 20);
  }
  
  // Source type adjustment
  if (sourceType === 'river') {
    score -= 10; // Natural water bodies often have more contaminants
  } else if (sourceType === 'well') {
    score -= 5; // Well water can have mineral contamination
  }
  
  return Math.max(0, Math.min(100, Math.round(score)));
};

/**
 * Determines a qualitative water quality category based on safety score
 * @param safetyScore Safety score from 0-100
 * @returns Qualitative water quality category
 */
export const determineQualityCategory = (safetyScore: number): string => {
  if (safetyScore >= 90) return 'Excellent';
  if (safetyScore >= 75) return 'Good';
  if (safetyScore >= 60) return 'Fair';
  if (safetyScore >= 45) return 'Poor';
  return 'Very Poor';
};

/**
 * Predicts the most likely contamination type based on water parameters
 * @param params Object containing water quality parameters
 * @returns Predicted contamination type
 */
export const predictContaminationType = (params: {
  sourceType: string;
  ph: number;
  turbidity: number;
  conductivity: number;
}): string => {
  const { sourceType, ph, turbidity, conductivity } = params;
  
  // Simple rule-based prediction
  if (sourceType === 'river' && turbidity > 15) {
    return 'Sediment';
  } else if (sourceType === 'river') {
    return 'Bacterial';
  } else if (sourceType === 'well' && conductivity > 1000) {
    return 'Mineral';
  } else if (ph < 5) {
    return 'Acidic';
  } else if (ph > 9) {
    return 'Alkaline';
  } else if (conductivity > 1200) {
    return 'Chemical';
  } else if (sourceType === 'tap' && conductivity < 700 && turbidity < 5) {
    return 'Minimal';
  }
  
  return 'Unknown';
};

/**
 * Generates water quality recommendations based on parameters
 * @param params Object containing water quality parameters
 * @returns Array of recommendation strings
 */
export const generateRecommendations = (params: {
  ph: number;
  turbidity: number;
  dissolvedOxygen: number;
  conductivity: number;
  sourceType: string;
}): string[] => {
  const { ph, turbidity, dissolvedOxygen, conductivity, sourceType } = params;
  const recommendations: string[] = [];
  
  // pH recommendations
  if (ph < 6.5) {
    recommendations.push('Consider pH adjustment treatment to increase alkalinity.');
  } else if (ph > 8.5) {
    recommendations.push('Consider pH adjustment treatment to reduce alkalinity.');
  }
  
  // Turbidity recommendations
  if (turbidity > 5) {
    recommendations.push('Filtration recommended to reduce turbidity levels.');
  }
  
  // Dissolved oxygen recommendations
  if (dissolvedOxygen < 6) {
    recommendations.push('Aeration may improve dissolved oxygen levels.');
  }
  
  // Conductivity recommendations
  if (conductivity > 800) {
    recommendations.push('Consider testing for specific ion content due to elevated conductivity.');
  }
  
  // Source-specific recommendations
  if (sourceType === 'river') {
    recommendations.push('Test for bacterial contamination typical in surface water sources.');
    recommendations.push('Consider multi-stage filtration for river water sources.');
  } else if (sourceType === 'well') {
    recommendations.push('Regular monitoring for mineral content is recommended for well water.');
  }
  
  // Add general recommendations if list is short
  if (recommendations.length < 2) {
    recommendations.push('Regular testing recommended to maintain water quality.');
  }
  
  return recommendations;
};


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Droplet, AlertTriangle, Check, 
  Info, ThermometerSun, TestTube, Scale
} from 'lucide-react';
import { motion } from 'framer-motion';

interface WaterResultCardProps {
  result: {
    contaminationType: string;
    salinityLevel: number;
    safetyScore: number;
    qualityCategory: string;
    recommendations: string[];
    details: {
      icon: string;
      label: string;
      value: string;
      status: 'normal' | 'warning' | 'critical';
    }[];
  };
}

export const WaterResultCard: React.FC<WaterResultCardProps> = ({ result }) => {
  const getSafetyColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getQualityBadge = (category: string) => {
    switch (category.toLowerCase()) {
      case 'excellent':
        return <Badge className="bg-green-500">Excellent</Badge>;
      case 'good':
        return <Badge className="bg-emerald-500">Good</Badge>;
      case 'fair':
        return <Badge className="bg-yellow-500">Fair</Badge>;
      case 'poor':
        return <Badge className="bg-orange-500">Poor</Badge>;
      case 'very poor':
        return <Badge className="bg-red-500">Very Poor</Badge>;
      default:
        return <Badge>{category}</Badge>;
    }
  };

  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case 'droplet':
        return <Droplet className="h-4 w-4" />;
      case 'flask':
      case 'test-tube':
        return <TestTube className="h-4 w-4" />;
      case 'thermometer':
        return <ThermometerSun className="h-4 w-4" />;
      case 'scale':
        return <Scale className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getStatusIcon = (status: 'normal' | 'warning' | 'critical') => {
    switch (status) {
      case 'normal':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="glass overflow-hidden h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center mb-1">
            <CardTitle className="text-lg">Water Analysis Results</CardTitle>
            {getQualityBadge(result.qualityCategory)}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium">Safety Score</p>
              <span className="text-sm font-bold">{result.safetyScore}%</span>
            </div>
            <Progress value={result.safetyScore} className={getSafetyColor(result.safetyScore)} />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="glass rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Contamination Type</p>
              <p className="font-semibold text-sm flex items-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aqua-100 mr-2">
                  <Droplet className="h-3 w-3 text-aqua-600" />
                </span>
                {result.contaminationType}
              </p>
            </div>
            <div className="glass rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Salinity Level</p>
              <p className="font-semibold text-sm flex items-center">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aqua-100 mr-2">
                  <Scale className="h-3 w-3 text-aqua-600" />
                </span>
                {result.salinityLevel} ppt
              </p>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Parameter Details</p>
            <div className="space-y-2">
              {result.details.map((detail, index) => (
                <div key={index} className="flex items-center justify-between py-1 border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-aqua-100 mr-2">
                      {getIconByName(detail.icon)}
                    </span>
                    <span className="text-sm">{detail.label}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">{detail.value}</span>
                    {getStatusIcon(detail.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Recommendations</p>
            <ul className="space-y-1">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="text-xs flex space-x-2">
                  <Check className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

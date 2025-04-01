
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Droplet, TestTube, Scale, AlertTriangle, Zap } from 'lucide-react';

interface ParameterDetailPaneProps {
  formData: {
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
  };
}

export const ParameterDetailPane: React.FC<ParameterDetailPaneProps> = ({ formData }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'normal':
        return <Check className="h-4 w-4 text-green-500" />;
      default:
        return <Check className="h-4 w-4 text-green-500" />;
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'droplet':
        return <Droplet className="h-4 w-4 text-aqua-600" />;
      case 'scale':
        return <Scale className="h-4 w-4 text-aqua-600" />;
      case 'test-tube':
        return <TestTube className="h-4 w-4 text-aqua-600" />;
      case 'zap':
        return <Zap className="h-4 w-4 text-aqua-600" />;
      default:
        return <Droplet className="h-4 w-4 text-aqua-600" />;
    }
  };

  // Parameter details for display in the right panel
  const parameterDetails = {
    primary: [
      {
        icon: 'droplet',
        label: 'pH Level',
        value: formData.ph.toString(),
        status: formData.ph < 6.5 || formData.ph > 8.5 ? 'warning' : 'normal',
        description: 'Measures acidity or alkalinity (optimal: 6.5-8.5)'
      },
      {
        icon: 'scale',
        label: 'Total Dissolved Solids',
        value: `${formData.totalDissolvedSolids} mg/L`,
        status: formData.totalDissolvedSolids > 500 ? 'warning' : 'normal',
        description: 'Total amount of dissolved substances (optimal: <500 mg/L)'
      },
      {
        icon: 'zap',
        label: 'Electrical Conductivity',
        value: `${formData.conductivity} μS/cm`,
        status: formData.conductivity > 1000 ? 'warning' : 'normal',
        description: 'Ability to conduct electric current (optimal: <1000 μS/cm)'
      },
      {
        icon: 'droplet',
        label: 'Chloride',
        value: `${formData.chloride} mg/L`,
        status: formData.chloride > 300 ? 'warning' : 'normal',
        description: 'Salt component that affects taste (optimal: <250 mg/L)'
      },
      {
        icon: 'droplet',
        label: 'Sodium',
        value: `${formData.sodium} mg/L`,
        status: formData.sodium > 250 ? 'warning' : 'normal',
        description: 'Key salinity component (optimal: <200 mg/L)'
      },
      {
        icon: 'droplet',
        label: 'Sulphate',
        value: `${formData.sulphate} mg/L`,
        status: formData.sulphate > 300 ? 'warning' : 'normal',
        description: 'May cause taste issues at high levels (optimal: <250 mg/L)'
      },
      {
        icon: 'test-tube',
        label: 'Heavy Metals',
        value: `${formData.heavyMetals} mg/L`,
        status: formData.heavyMetals > 1 ? 'critical' : formData.heavyMetals > 0.5 ? 'warning' : 'normal',
        description: 'Toxic metals like lead, arsenic, mercury (optimal: <0.5 mg/L)'
      },
      {
        icon: 'droplet',
        label: 'Bacterial Contamination',
        value: `${formData.bacterialContamination} CFU/mL`,
        status: formData.bacterialContamination > 50 ? 'critical' : formData.bacterialContamination > 10 ? 'warning' : 'normal',
        description: 'Presence of harmful bacteria (optimal: <10 CFU/mL)'
      }
    ],
    secondary: [
      {
        icon: 'droplet',
        label: 'Dissolved Oxygen',
        value: `${formData.dissolvedOxygen} mg/L`,
        status: formData.dissolvedOxygen < 6 ? 'warning' : 'normal',
        description: 'Oxygen available for aquatic life (optimal: >6 mg/L)'
      },
      {
        icon: 'test-tube',
        label: 'Biochemical Oxygen Demand',
        value: `${formData.biochemicalOxygenDemand} mg/L`,
        status: formData.biochemicalOxygenDemand > 6 ? 'warning' : 'normal',
        description: 'Measures organic pollution (optimal: <6 mg/L)'
      },
      {
        icon: 'droplet',
        label: 'Nitrates',
        value: `${formData.nitrates} mg/L`,
        status: formData.nitrates > 15 ? 'warning' : 'normal',
        description: 'Nutrient from fertilizers & waste (optimal: <10 mg/L)'
      },
      {
        icon: 'droplet',
        label: 'Phosphates',
        value: `${formData.phosphates} mg/L`,
        status: formData.phosphates > 2 ? 'warning' : 'normal',
        description: 'Nutrient that can cause algae blooms (optimal: <1 mg/L)'
      },
      {
        icon: 'test-tube',
        label: 'Pesticides',
        value: `${formData.pesticides} μg/L`,
        status: formData.pesticides > 1 ? 'warning' : 'normal',
        description: 'Agricultural chemicals (optimal: <0.5 μg/L)'
      },
      {
        icon: 'test-tube',
        label: 'Industrial Chemicals',
        value: `${formData.industrialChemicals} mg/L`,
        status: formData.industrialChemicals > 0.5 ? 'warning' : 'normal',
        description: 'Manufacturing byproducts (optimal: <0.2 mg/L)'
      },
      {
        icon: 'droplet',
        label: 'Turbidity',
        value: `${formData.turbidity} NTU`,
        status: formData.turbidity > 10 ? 'warning' : 'normal',
        description: 'Water cloudiness from particles (optimal: <5 NTU)'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TestTube className="mr-2 h-5 w-5 text-aqua-600" />
            Parameter Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="primary" className="flex-1">Primary</TabsTrigger>
              <TabsTrigger value="secondary" className="flex-1">Secondary</TabsTrigger>
            </TabsList>
            <TabsContent value="primary" className="mt-4">
              <div className="space-y-3">
                {parameterDetails.primary.map((param, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                    <div className="flex items-center space-x-2">
                      {getIconComponent(param.icon)}
                      <div>
                        <p className="text-sm font-medium">{param.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{param.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{param.value}</span>
                      {getStatusIcon(param.status)}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="secondary" className="mt-4">
              <div className="space-y-3">
                {parameterDetails.secondary.map((param, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                    <div className="flex items-center space-x-2">
                      {getIconComponent(param.icon)}
                      <div>
                        <p className="text-sm font-medium">{param.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{param.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{param.value}</span>
                      {getStatusIcon(param.status)}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="glass h-full flex flex-col justify-center items-center p-8 text-center">
        <Droplet className="h-16 w-16 text-aqua-200 mb-6" />
        <h3 className="text-xl font-medium mb-2">No Results Yet</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Fill in the water parameters and click "Analyze Sample" to get predictions
        </p>
        <div className="p-3 bg-aqua-50 dark:bg-aqua-900/20 rounded-lg max-w-xs">
          <ul className="text-sm text-left space-y-2">
            <li className="flex items-start">
              <Check className="h-4 w-4 text-aqua-600 mr-2 mt-1" />
              <span>Learn about contamination types</span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-aqua-600 mr-2 mt-1" />
              <span>Discover salinity levels</span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-aqua-600 mr-2 mt-1" />
              <span>Get personalized recommendations</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

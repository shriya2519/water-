
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { MoveRight } from 'lucide-react';

interface SecondaryParametersFormProps {
  formData: {
    dissolvedOxygen: number;
    biochemicalOxygenDemand: number;
    nitrates: number;
    phosphates: number;
    pesticides: number;
    industrialChemicals: number;
    turbidity: number;
  };
  handleInputChange: (field: string, value: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const SecondaryParametersForm: React.FC<SecondaryParametersFormProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  isLoading
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dissolvedOxygen">Dissolved Oxygen (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="dissolvedOxygen"
                min={0} 
                max={15} 
                step={0.5}
                value={[formData.dissolvedOxygen]}
                onValueChange={(values) => handleInputChange('dissolvedOxygen', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.dissolvedOxygen}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="biochemicalOxygenDemand">Biochemical Oxygen Demand (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="biochemicalOxygenDemand"
                min={0} 
                max={20} 
                step={0.5}
                value={[formData.biochemicalOxygenDemand]}
                onValueChange={(values) => handleInputChange('biochemicalOxygenDemand', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.biochemicalOxygenDemand}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nitrates">Nitrates (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="nitrates"
                min={0} 
                max={50} 
                step={1}
                value={[formData.nitrates]}
                onValueChange={(values) => handleInputChange('nitrates', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.nitrates}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phosphates">Phosphates (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="phosphates"
                min={0} 
                max={10} 
                step={0.1}
                value={[formData.phosphates]}
                onValueChange={(values) => handleInputChange('phosphates', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.phosphates}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pesticides">Pesticides (μg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="pesticides"
                min={0} 
                max={5} 
                step={0.1}
                value={[formData.pesticides]}
                onValueChange={(values) => handleInputChange('pesticides', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.pesticides}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industrialChemicals">Industrial Chemicals (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="industrialChemicals"
                min={0} 
                max={2} 
                step={0.1}
                value={[formData.industrialChemicals]}
                onValueChange={(values) => handleInputChange('industrialChemicals', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.industrialChemicals}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="turbidity">Turbidity (NTU)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="turbidity"
                min={0} 
                max={30} 
                step={1}
                value={[formData.turbidity]}
                onValueChange={(values) => handleInputChange('turbidity', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.turbidity}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button 
          type="submit" 
          className="w-full bg-aqua-600 hover:bg-aqua-700"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center">
              Analyze Sample <MoveRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

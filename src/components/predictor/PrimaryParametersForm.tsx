
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { MoveRight } from 'lucide-react';

interface PrimaryParametersFormProps {
  formData: {
    totalDissolvedSolids: number;
    conductivity: number;
    ph: number;
    chloride: number;
    sodium: number;
    sulphate: number;
    heavyMetals: number;
    bacterialContamination: number;
    sourceType: string;
  };
  handleInputChange: (field: string, value: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const PrimaryParametersForm: React.FC<PrimaryParametersFormProps> = ({
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
            <Label htmlFor="sourceType">Water Source</Label>
            <Select 
              value={formData.sourceType}
              onValueChange={(value) => handleInputChange('sourceType', value)}
            >
              <SelectTrigger id="sourceType">
                <SelectValue placeholder="Select water source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tap">Tap Water</SelectItem>
                <SelectItem value="well">Well Water</SelectItem>
                <SelectItem value="river">River/Lake Water</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ph">pH Level</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="ph"
                min={0} 
                max={14} 
                step={0.1}
                value={[formData.ph]}
                onValueChange={(values) => handleInputChange('ph', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.ph}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalDissolvedSolids">Total Dissolved Solids (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="totalDissolvedSolids"
                min={0} 
                max={1500} 
                step={50}
                value={[formData.totalDissolvedSolids]}
                onValueChange={(values) => handleInputChange('totalDissolvedSolids', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-16 text-right">{formData.totalDissolvedSolids}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="conductivity">Electrical Conductivity (μS/cm)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="conductivity"
                min={0} 
                max={2000} 
                step={50}
                value={[formData.conductivity]}
                onValueChange={(values) => handleInputChange('conductivity', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-16 text-right">{formData.conductivity}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Salinity Components</Label>
            <div className="space-y-3">
              <div>
                <Label htmlFor="chloride" className="text-xs">Chloride (mg/L)</Label>
                <div className="flex items-center space-x-4">
                  <Slider 
                    id="chloride"
                    min={0} 
                    max={500} 
                    step={10}
                    value={[formData.chloride]}
                    onValueChange={(values) => handleInputChange('chloride', values[0])}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12 text-right">{formData.chloride}</span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="sodium" className="text-xs">Sodium (mg/L)</Label>
                <div className="flex items-center space-x-4">
                  <Slider 
                    id="sodium"
                    min={0} 
                    max={400} 
                    step={10}
                    value={[formData.sodium]}
                    onValueChange={(values) => handleInputChange('sodium', values[0])}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12 text-right">{formData.sodium}</span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="sulphate" className="text-xs">Sulphate (mg/L)</Label>
                <div className="flex items-center space-x-4">
                  <Slider 
                    id="sulphate"
                    min={0} 
                    max={500} 
                    step={10}
                    value={[formData.sulphate]}
                    onValueChange={(values) => handleInputChange('sulphate', values[0])}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12 text-right">{formData.sulphate}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="heavyMetals">Heavy Metals (mg/L)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="heavyMetals"
                min={0} 
                max={5} 
                step={0.1}
                value={[formData.heavyMetals]}
                onValueChange={(values) => handleInputChange('heavyMetals', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-10 text-right">{formData.heavyMetals}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bacterialContamination">Bacterial Contamination (CFU/mL)</Label>
            <div className="flex items-center space-x-4">
              <Slider 
                id="bacterialContamination"
                min={0} 
                max={200} 
                step={5}
                value={[formData.bacterialContamination]}
                onValueChange={(values) => handleInputChange('bacterialContamination', values[0])}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">{formData.bacterialContamination}</span>
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

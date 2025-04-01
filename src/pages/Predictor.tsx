
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { TestTube, MoveRight, FileQuestion } from 'lucide-react';
import { WaterResultCard } from '@/components/WaterResultCard';
import { ParameterDetailPane } from '@/components/predictor/ParameterDetailPane';
import { PrimaryParametersForm } from '@/components/predictor/PrimaryParametersForm';
import { SecondaryParametersForm } from '@/components/predictor/SecondaryParametersForm';
import { DataUploadPanel } from '@/components/predictor/DataUploadPanel';
import { calculateSalinity, determineContaminationType, calculateSafetyScore, determineQualityCategory, generateRecommendations } from '@/utils/waterAnalysis';

const Predictor = () => {
  const [activeTab, setActiveTab] = useState('primary');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    // Primary Parameters
    totalDissolvedSolids: 300,
    conductivity: 500,
    ph: 7.0,
    chloride: 250,
    sodium: 200,
    sulphate: 250,
    heavyMetals: 0.5,
    bacterialContamination: 10,
    
    // Secondary Parameters
    dissolvedOxygen: 8,
    biochemicalOxygenDemand: 5,
    nitrates: 10,
    phosphates: 1,
    pesticides: 0.5,
    industrialChemicals: 0.2,
    turbidity: 5,
    
    sourceType: 'tap'
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const mockPrediction = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = {
        contaminationType: determineContaminationType(formData),
        salinityLevel: calculateSalinity(formData),
        safetyScore: calculateSafetyScore(formData),
        qualityCategory: determineQualityCategory(formData),
        recommendations: generateRecommendations(formData),
        details: [
          {
            icon: 'droplet',
            label: 'pH Level',
            value: formData.ph.toString(),
            status: formData.ph < 6.5 || formData.ph > 8.5 ? 'warning' : 'normal'
          },
          {
            icon: 'scale',
            label: 'TDS',
            value: `${formData.totalDissolvedSolids} mg/L`,
            status: formData.totalDissolvedSolids > 500 ? 'warning' : 'normal'
          },
          {
            icon: 'scale',
            label: 'Conductivity',
            value: `${formData.conductivity} μS/cm`,
            status: formData.conductivity > 1000 ? 'warning' : 'normal'
          },
          {
            icon: 'droplet',
            label: 'Bacterial Count',
            value: `${formData.bacterialContamination} CFU/mL`,
            status: formData.bacterialContamination > 50 ? 'critical' : 
                   formData.bacterialContamination > 10 ? 'warning' : 'normal'
          },
          {
            icon: 'test-tube',
            label: 'Heavy Metals',
            value: `${formData.heavyMetals} mg/L`,
            status: formData.heavyMetals > 1 ? 'critical' : 
                   formData.heavyMetals > 0.5 ? 'warning' : 'normal'
          }
        ]
      };
      
      setResults(results);
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mockPrediction();
  };

  return (
    <Layout>
      <div className="container max-w-6xl">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight mb-4">Water Quality Predictor</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analyze water samples to predict contamination types and salinity levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="glass mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TestTube className="mr-2 h-5 w-5 text-aqua-600" />
                  Sample Input
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex border-b mb-6">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'primary' ? 'border-b-2 border-aqua-600 text-aqua-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('primary')}
                  >
                    Primary Parameters
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'secondary' ? 'border-b-2 border-aqua-600 text-aqua-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('secondary')}
                  >
                    Secondary Parameters
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${activeTab === 'upload' ? 'border-b-2 border-aqua-600 text-aqua-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('upload')}
                  >
                    Upload Data
                  </button>
                </div>

                {activeTab === 'primary' && (
                  <PrimaryParametersForm 
                    formData={formData} 
                    handleInputChange={handleInputChange} 
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                  />
                )}

                {activeTab === 'secondary' && (
                  <SecondaryParametersForm 
                    formData={formData} 
                    handleInputChange={handleInputChange} 
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                  />
                )}

                {activeTab === 'upload' && (
                  <DataUploadPanel />
                )}
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileQuestion className="mr-2 h-5 w-5 text-aqua-600" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-aqua-700 font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Enter Water Parameters</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Input key water quality measurements including pH, salinity components, heavy metals, and bacterial contamination.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-aqua-700 font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Advanced Analysis</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Our algorithm analyzes these parameters using machine learning models trained on thousands of water samples.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-aqua-700 font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Get Detailed Results</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Receive predictions about contamination types, salinity levels, and personalized recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            {results ? (
              <WaterResultCard result={results} />
            ) : (
              <ParameterDetailPane formData={formData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Predictor;

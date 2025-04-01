
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Droplet, ThermometerSun, TestTube, Microscope,
  Info, AlertTriangle, Shield, Activity
} from 'lucide-react';

const Guide = () => {
  const contaminants = [
    {
      id: 'bacteria',
      name: 'Bacterial Contamination',
      icon: <Microscope className="h-8 w-8 text-red-500" />,
      description: 'Bacteria such as E. coli, Salmonella, and Legionella can contaminate water sources and cause serious health issues.',
      effects: ['Gastrointestinal illness', 'Respiratory infections', 'Urinary tract infections'],
      sources: ['Sewage leaks', 'Animal waste', 'Inadequate water treatment']
    },
    {
      id: 'chemical',
      name: 'Chemical Contaminants',
      icon: <TestTube className="h-8 w-8 text-purple-500" />,
      description: 'Various chemicals can contaminate water, including pesticides, industrial chemicals, and heavy metals.',
      effects: ['Nervous system damage', 'Kidney problems', 'Increased cancer risk'],
      sources: ['Industrial discharges', 'Agricultural runoff', 'Improper waste disposal']
    },
    {
      id: 'mineral',
      name: 'Mineral Contamination',
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      description: 'Excessive minerals like lead, arsenic, and mercury can contaminate water sources and pose health risks.',
      effects: ['Neurological damage', 'Kidney disease', 'Developmental issues in children'],
      sources: ['Natural deposits', 'Mining operations', 'Old plumbing systems']
    },
    {
      id: 'physical',
      name: 'Physical Contaminants',
      icon: <ThermometerSun className="h-8 w-8 text-amber-500" />,
      description: 'Physical contaminants include sediment, organic material, and other visible matter in water.',
      effects: ['Reduced water clarity', 'Damage to water equipment', 'Aesthetic issues'],
      sources: ['Soil erosion', 'Urban runoff', 'Construction activities']
    }
  ];
  
  const salinityLevels = [
    {
      level: 'Fresh water',
      range: '0-0.5 ppt',
      description: 'Most lakes, rivers, and groundwater sources',
      uses: ['Drinking water', 'Agriculture', 'Most industrial processes']
    },
    {
      level: 'Slightly brackish',
      range: '0.5-3 ppt',
      description: 'Some estuaries and brackish wetlands',
      uses: ['Limited agricultural use', 'Some industrial cooling', 'Some aquaculture']
    },
    {
      level: 'Moderately brackish',
      range: '3-10 ppt',
      description: 'Brackish estuaries and some inland seas',
      uses: ['Salt-tolerant agriculture', 'Some industrial processes', 'Specific aquaculture']
    },
    {
      level: 'Highly brackish',
      range: '10-30 ppt',
      description: 'Highly saline lakes and lower parts of estuaries',
      uses: ['Limited industrial use', 'Specialized aquaculture', 'Not suitable for most purposes']
    },
    {
      level: 'Saline',
      range: '30-50 ppt',
      description: 'Seawater and very saline lakes',
      uses: ['Seawater applications', 'Desalination source', 'Marine aquaculture']
    }
  ];

  const healthInfo = [
    {
      icon: <Info className="h-6 w-6 text-blue-500" />,
      title: 'Understanding Water Quality',
      description: 'Water quality refers to the chemical, physical, and biological characteristics of water in relation to its suitability for a specific use.'
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
      title: 'Health Impacts',
      description: 'Contaminated water can cause various health issues ranging from gastrointestinal illnesses to long-term conditions like cancer or developmental problems.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Prevention Measures',
      description: 'Regular testing, proper filtration, and understanding your water source are key steps in preventing water-related health issues.'
    },
    {
      icon: <Activity className="h-6 w-6 text-red-500" />,
      title: 'Risk Assessment',
      description: 'Different contaminants pose different levels of risk based on their concentration, exposure time, and individual vulnerability factors.'
    }
  ];

  return (
    <Layout>
      <div className="container max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight mb-4">Water Quality Guide</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn about different types of water contamination, salinity levels, and their potential effects on health and usability.
          </p>
        </motion.div>

        {/* Contaminant Types Section */}
        <section className="mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-2">Types of Contamination</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Water can be contaminated by various substances, each with different sources and health implications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contaminants.map((contaminant, index) => (
              <motion.div
                key={contaminant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full glass">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-white/10 p-2 rounded-lg">
                      {contaminant.icon}
                    </div>
                    <CardTitle>{contaminant.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{contaminant.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-1">Health Effects</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {contaminant.effects.map((effect, i) => (
                            <li key={i}>{effect}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-1">Common Sources</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {contaminant.sources.map((source, i) => (
                            <li key={i}>{source}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Salinity Levels Section */}
        <section className="mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2">Salinity Levels</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The concentration of dissolved salts in water determines its salinity level, which affects its usability.
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-4 py-3 text-left">Level</th>
                  <th className="px-4 py-3 text-left">Range</th>
                  <th className="px-4 py-3 text-left">Typical Sources</th>
                  <th className="px-4 py-3 text-left">Common Uses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {salinityLevels.map((level, index) => (
                  <motion.tr 
                    key={index}
                    className="bg-white dark:bg-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-4 py-3 font-medium">{level.level}</td>
                    <td className="px-4 py-3">{level.range}</td>
                    <td className="px-4 py-3">{level.description}</td>
                    <td className="px-4 py-3">
                      <ul className="list-disc list-inside">
                        {level.uses.map((use, i) => (
                          <li key={i} className="text-sm">{use}</li>
                        ))}
                      </ul>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Health Information Section */}
        <section className="mb-16">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2">Health & Safety Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Understanding the relationship between water quality and health is essential for making informed decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {healthInfo.map((info, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Resources Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <p className="mb-6">
              For more information about water quality, testing methods, and safety standards, 
              check out these reliable resources:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">World Health Organization (WHO) Water Quality Guidelines</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive guidelines for drinking water quality and safety standards.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Environmental Protection Agency (EPA) Water Resources</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Information about water quality regulations, testing methods, and contamination prevention.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-aqua-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Centers for Disease Control and Prevention (CDC) Water Safety</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Health-related information and recommendations for safe water consumption.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Guide;

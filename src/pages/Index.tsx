
import React from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { BarChart2, BookOpen, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { WaterDropIcon } from '@/components/WaterDropIcon';

const Index = () => {
  const features = [
    {
      icon: <WaterDropIcon size={48} className="text-aqua-600" />,
      title: 'Water Analysis',
      description: 'Accurately predict water contamination types and salinity levels using advanced algorithms.'
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-aqua-600" />,
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports to visualize water quality metrics and trends.'
    },
    {
      icon: <BookOpen className="h-12 w-12 text-aqua-600" />,
      title: 'Resource Guide',
      description: 'Comprehensive information about water contaminants, their sources, and potential health impacts.'
    },
    {
      icon: <Zap className="h-12 w-12 text-aqua-600" />,
      title: 'Fast Results',
      description: 'Get instant predictions and analysis to make timely decisions about water quality.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40 z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-aqua-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-aqua-200 rounded-full blur-3xl opacity-20 animate-pulse-slow animate-delay-500"></div>
        
        <motion.div 
          className="container relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 inline-block"
          >
            <span className="inline-flex items-center rounded-full bg-aqua-100 px-3 py-1 text-sm font-medium text-aqua-800">
              <WaterDropIcon className="mr-1 h-3 w-3" /> Advanced Water Prediction
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block">Predict Water Quality</span>
            <span className="block text-aqua-600">With Precision</span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Water Quality Predictor uses advanced algorithms to analyze water samples and predict contamination types and salinity levels, 
            helping you make informed decisions about water quality.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button asChild size="lg" className="bg-aqua-600 hover:bg-aqua-700 text-white">
              <Link to="/predictor">Try Predictor</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-aqua-200 text-aqua-700 hover:bg-aqua-50">
              <Link to="/guide">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover how Water Quality Predictor helps you monitor and analyze water quality efficiently.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="glass max-w-4xl mx-auto rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to analyze your water sample?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Start using our water prediction tool today and get instant insights about water quality.
                </p>
                <Button asChild size="lg" className="bg-aqua-600 hover:bg-aqua-700 text-white">
                  <Link to="/predictor">Get Started</Link>
                </Button>
              </div>
              <div className="flex-1">
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ rotate: -2, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 moving-water">
                      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm"></div>
                    </div>
                    
                    <div className="earth-in-water-container relative z-10">
                      <img 
                        src="/lovable-uploads/3d7c62ad-732b-4e28-9f04-73f322aa9cfe.png" 
                        alt="Earth in water" 
                        className="w-full h-auto max-w-[220px] animate-float" 
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

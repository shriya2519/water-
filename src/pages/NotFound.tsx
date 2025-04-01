
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { WaterDropIcon } from "@/components/WaterDropIcon";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <motion.div 
          className="glass rounded-2xl p-12 text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <WaterDropIcon size={80} className="text-aqua-600 animate-bounce animate-duration-2000" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Oops! The page you're looking for seems to have evaporated.
          </p>
          <Button asChild size="lg" className="bg-aqua-600 hover:bg-aqua-700">
            <a href="/">Return to Home</a>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;

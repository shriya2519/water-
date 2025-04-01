
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, BarChart, PieChart, Pie, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Droplet, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  // Sample data for water quality metrics
  const waterQualityData = [
    { name: 'Jan', ph: 7.2, turbidity: 2.3, chlorine: 1.1 },
    { name: 'Feb', ph: 7.1, turbidity: 2.1, chlorine: 1.2 },
    { name: 'Mar', ph: 7.3, turbidity: 2.5, chlorine: 1.0 },
    { name: 'Apr', ph: 7.0, turbidity: 2.6, chlorine: 1.3 },
    { name: 'May', ph: 7.4, turbidity: 2.2, chlorine: 1.1 },
    { name: 'Jun', ph: 7.5, turbidity: 2.0, chlorine: 1.2 },
  ];

  // Sample data for contamination types
  const contaminationData = [
    { name: 'Bacterial', value: 45, color: '#36A2EB' },
    { name: 'Chemical', value: 25, color: '#FF6384' },
    { name: 'Metal', value: 15, color: '#FFCE56' },
    { name: 'Organic', value: 15, color: '#4BC0C0' },
  ];

  // Sample data for salinity levels
  const salinityData = [
    { name: 'Fresh', value: 55, color: '#67e8f9' },
    { name: 'Brackish', value: 25, color: '#06b6d4' },
    { name: 'Saline', value: 15, color: '#0891b2' },
    { name: 'Brine', value: 5, color: '#0e7490' },
  ];

  // Sample data for monthly predictions
  const predictionsData = [
    { month: 'Jan', safe: 85, marginal: 10, unsafe: 5 },
    { month: 'Feb', safe: 80, marginal: 15, unsafe: 5 },
    { month: 'Mar', safe: 75, marginal: 20, unsafe: 5 },
    { month: 'Apr', safe: 70, marginal: 20, unsafe: 10 },
    { month: 'May', safe: 65, marginal: 25, unsafe: 10 },
    { month: 'Jun', safe: 60, marginal: 30, unsafe: 10 },
  ];

  // Sample data for trend analysis
  const trendData = [
    { name: 'Week 1', bacteria: 4000, chemicals: 2400, metals: 2400 },
    { name: 'Week 2', bacteria: 3000, chemicals: 1398, metals: 2210 },
    { name: 'Week 3', bacteria: 2000, chemicals: 9800, metals: 2290 },
    { name: 'Week 4', bacteria: 2780, chemicals: 3908, metals: 2000 },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Water Quality Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Droplet className="mr-2 h-5 w-5 text-blue-500" />
                Total Samples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,248</div>
              <p className="text-sm text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Droplet className="mr-2 h-5 w-5 text-green-500" />
                Safe Water Ratio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">76.3%</div>
              <p className="text-sm text-muted-foreground">-2.5% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                Contamination Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-sm text-muted-foreground">+8 from last month</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="w-full mb-8">
          <TabsList className="grid w-full md:w-auto grid-cols-4 h-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contamination">Contamination</TabsTrigger>
            <TabsTrigger value="salinity">Salinity</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Water Quality Metrics</CardTitle>
                  <CardDescription>Monthly measurements of key indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <AreaChart
                      width={500}
                      height={300}
                      data={waterQualityData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorPh" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorTurbidity" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorChlorine" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="ph" 
                        stroke="#8884d8" 
                        fillOpacity={1} 
                        fill="url(#colorPh)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="turbidity" 
                        stroke="#82ca9d" 
                        fillOpacity={1} 
                        fill="url(#colorTurbidity)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="chlorine" 
                        stroke="#ffc658" 
                        fillOpacity={1} 
                        fill="url(#colorChlorine)" 
                      />
                    </AreaChart>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Predictions</CardTitle>
                  <CardDescription>Water safety levels over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <BarChart
                      width={500}
                      height={300}
                      data={predictionsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="safe" stackId="a" fill="#4ade80" />
                      <Bar dataKey="marginal" stackId="a" fill="#facc15" />
                      <Bar dataKey="unsafe" stackId="a" fill="#f87171" />
                    </BarChart>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="contamination" className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contamination Trend Analysis</CardTitle>
                  <CardDescription>Weekly detection patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <AreaChart
                      width={500}
                      height={300}
                      data={trendData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="bacteria" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.7}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="chemicals" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                        fillOpacity={0.7}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="metals" 
                        stroke="#ffc658" 
                        fill="#ffc658" 
                        fillOpacity={0.7}
                      />
                    </AreaChart>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contamination Distribution</CardTitle>
                  <CardDescription>Types of contaminants detected</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex justify-center">
                    <PieChart width={400} height={300}>
                      <Pie
                        data={contaminationData}
                        cx={200}
                        cy={150}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {contaminationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Pie
                        data={contaminationData}
                        cx={200}
                        cy={150}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={85}
                        outerRadius={95}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {contaminationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="salinity" className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Salinity Distribution</CardTitle>
                  <CardDescription>Breakdown of salinity levels in samples</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex justify-center">
                    <PieChart width={400} height={300}>
                      <Pie
                        data={salinityData}
                        cx={200}
                        cy={150}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {salinityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Salinity Levels</CardTitle>
                  <CardDescription>Detailed breakdown of water samples</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {salinityData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm font-medium">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full" 
                          style={{ width: `${item.value}%`, backgroundColor: item.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="trends" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical Trends</CardTitle>
                <CardDescription>Long-term water quality patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <BarChart
                    width={1000}
                    height={400}
                    data={predictionsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="safe" fill="#4ade80" name="Safe Water" />
                    <Bar dataKey="marginal" fill="#facc15" name="Marginal Quality" />
                    <Bar dataKey="unsafe" fill="#f87171" name="Unsafe Water" />
                  </BarChart>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;

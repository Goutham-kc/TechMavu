import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  Star, 
  Zap, 
  Shield, 
  Thermometer, 
  Timer, 
  Wifi, 
  Award,
  Monitor,
  Smartphone,
  RefreshCw,
  Scale,
  Target,
  Battery,
  Cpu,
  Download,
  Play,
  CheckCircle
} from 'lucide-react';

function Homepage() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentSpec, setCurrentSpec] = useState(0);
  
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Autopilot Cooking System",
      subtitle: "AI-Driven Precision",
      description: "Machine learning algorithms analyze ingredients and preferences, dynamically adjusting pressure, temperature, and duration for perfect results.",
      details: ["Sensor fusion technology", "Adaptive learning", "Real-time optimization"]
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Tesla Home Chef Energy Efficiency Core",
      subtitle: "TEEC Technology",
      description: "Proprietary induction heating with multi-layer vacuum insulation reduces energy consumption by 40% while delivering faster cooking.",
      details: ["Optimized induction heating", "Advanced insulation", "Smart power management"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Intuitive Touchscreen",
      subtitle: "10-inch HD Display",
      description: "Vibrant, responsive interface that adapts contextually to cooking stages with voice control integration.",
      details: ["Full-color HD display", "Contextual UI", "Voice control ready"]
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Over-the-Air Updates",
      subtitle: "Future-Proof Design",
      description: "Continuous improvement through regular software updates delivering new recipes, modes, and optimizations.",
      details: ["New recipes monthly", "Performance upgrades", "Security enhancements"]
    }
  ];

  const specs = [
    {
      category: "Capacity & Power",
      items: [
        { label: "Capacity Options", value: "6-Litre / 8-Litre" },
        { label: "Power Output", value: "1200W - 1500W Variable" },
        { label: "Pressure Range", value: "10-80 kPa Custom" },
        { label: "Temperature Range", value: "30°C - 200°C" }
      ]
    },
    {
      category: "Smart Features",
      items: [
        { label: "Connectivity", value: "Wi-Fi 802.11ac, Bluetooth 5.0" },
        { label: "Display", value: "10-inch Full-Color HD Touchscreen" },
        { label: "Sensors", value: "15+ Precision Monitoring Points" },
        { label: "Updates", value: "OTA Software Updates" }
      ]
    },
    {
      category: "Construction",
      items: [
        { label: "Cooking Pot", value: "316L Stainless Steel" },
        { label: "Coating", value: "Ceramic Non-Stick" },
        { label: "Safety Systems", value: "15+ Multi-Point Protection" },
        { label: "Warranty", value: "8-Year Comprehensive" }
      ]
    }
  ];

  const safetyFeatures = [
    "Automatic pressure release",
    "Lid lock detection",
    "Anti-block shield",
    "Temperature limit control",
    "Pressure regulation",
    "Emergency shutoff"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/logo.jpg" alt="Tesla Home Chef Logo" className="h-10 w-10 rounded-full" />
            <div className="text-2xl font-bold tracking-wide">Tesla</div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
              <a href="#specs" className="hover:text-red-500 transition-colors">Specifications</a>
              <a href="#app" className="hover:text-red-500 transition-colors">Tesla Home Chef App</a>
              <a href="/order" className="hover:text-red-500 transition-colors">Order</a>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
            Configure & Order
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <span className="text-red-500 text-sm font-medium tracking-wider uppercase">Tesla Home Chef</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-sans mb-6 tracking-tight">
            Chef
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            The Future of Culinary Excellence.
          </p>
          <p className="text-2xl md:text-3xl text-red-400 mb-12 font-light">
            Unleashed.
          </p>
          
          {/* Product Showcase */}
          <div className="relative mb-16 group">
            <div className="w-96 h-96 md:w-[500px] md:h-[500px] mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-sm border border-gray-700/50"></div>
              <img 
                src="cooker.jpg" 
                alt="Tesla Home Chef Home Chef"
                className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent rounded-3xl"></div>
              
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                <div className="text-sm">
                  <div className="text-gray-400">Cooking Time</div>
                  <div className="text-lg font-semibold">12:34</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25">
              Configure Your Chef
            </button>
            <button className="border border-gray-600 hover:border-white px-10 py-4 rounded-lg text-lg transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="w-5 h-5 text-red-500" />
              <span>Innovation Award</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Timer className="w-5 h-5 text-green-500" />
              <span>70% Faster</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Battery className="w-5 h-5 text-blue-500" />
              <span>40% Less Energy</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Revolutionary Technology</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the perfect fusion of AI, energy efficiency, and intuitive design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-red-500/10 border-red-500/50 shadow-lg shadow-red-500/10' 
                      : 'bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activeFeature === index ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400'
                    } transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-red-400 text-sm mb-3">{feature.subtitle}</p>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      {activeFeature === index && (
                        <div className="space-y-2 animate-fadeIn">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                <div className="aspect-square bg-black rounded-2xl border border-gray-600 relative overflow-hidden">
                  <img 
                    src="cooker.jpg" 
                    alt="Feature Visualization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Dynamic Feature Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/90 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-red-500 rounded-lg">
                          {features[activeFeature].icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{features[activeFeature].title}</h4>
                          <p className="text-sm text-red-400">{features[activeFeature].subtitle}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {features[activeFeature].details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Technical Excellence</h2>
            <p className="text-xl text-gray-400">Precision engineering meets cutting-edge technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specs.map((category, index) => (
              <div 
                key={index}
                className="bg-black border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
              >
                <h3 className="text-xl font-semibold mb-6 text-red-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-medium text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light mb-6">Multi-Point Safety System</h2>
              <p className="text-xl text-gray-400 mb-8">
                15+ advanced safety mechanisms ensure peace of mind with every meal
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold">8-Year Comprehensive Warranty</h3>
                </div>
                <p className="text-gray-400">
                  Industry-leading warranty coverage with 24/7 support and guaranteed software updates
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50">
                <img 
                  src="safety.png" 
                  alt="Safety Systems"
                  className="w-full  object-cover rounded-2xl"
                />
                <div className="mt-6 p-4 bg-black/50 rounded-xl border border-gray-600/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Safety Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-500">All Systems Operational</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pressure Monitoring</span>
                      <span className="text-green-500">✓ Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Temperature Control</span>
                      <span className="text-green-500">✓ Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lid Lock Detection</span>
                      <span className="text-green-500">✓ Secure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tesla Home Chef App Integration */}
      <section id="app" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Tesla Home Chef App</h2>
            <p className="text-xl text-gray-400">Control, monitor, and optimize from anywhere</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="flex items-center space-x-4 mb-4">
                  <Smartphone className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-semibold">Remote Control & Monitoring</h3>
                </div>
                <p className="text-gray-400">
                  Start, stop, and monitor cooking progress from anywhere. Real-time notifications keep you informed of every milestone.
                </p>
              </div>

              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="flex items-center space-x-4 mb-4">
                  <Target className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
                </div>
                <p className="text-gray-400">
                  AI-powered recipe suggestions based on your cooking habits, dietary preferences, and available ingredients.
                </p>
              </div>

              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                <div className="flex items-center space-x-4 mb-4">
                  <RefreshCw className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-semibold">Recipe Management</h3>
                </div>
                <p className="text-gray-400">
                  Browse thousands of recipes, save favorites, and send cooking instructions directly to your Home Chef.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50">
                <div className="bg-black rounded-2xl p-6 aspect-[9/16] max-w-xs mx-auto border border-gray-600">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Tesla Home Chef</h4>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src="stew.avif" 
                          alt="Current Recipe"
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <h5 className="font-medium text-sm">Beef Stew</h5>
                          <p className="text-xs text-gray-400">12 min remaining</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-red-600 py-3 rounded-xl text-sm font-medium">
                        View Recipe Details
                      </button>
                      <button className="w-full border border-gray-600 py-3 rounded-xl text-sm">
                        Remote Control
                      </button>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-4">
                      <h5 className="font-medium text-sm mb-3">Quick Actions</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-gray-700 p-3 rounded-lg text-xs">Keep Warm</button>
                        <button className="bg-gray-700 p-3 rounded-lg text-xs">Add Time</button>
                        <button className="bg-gray-700 p-3 rounded-lg text-xs">Pressure</button>
                        <button className="bg-gray-700 p-3 rounded-lg text-xs">Temperature</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="order" className="py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-light mb-8">Configure Your Tesla Home Chef</h2>
          <p className="text-xl text-gray-400 mb-12">
            Choose your capacity and join the future of culinary excellence
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-2">6-Litre Model</h3>
              <p className="text-gray-400 mb-6">Perfect for couples and small families</p>
              <div className="text-3xl font-light mb-6">₹8,299</div>
              <button onClick={() => navigate('/order')} className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105">
                Order 6-Litre
              </button>
            </div>

            <div className="bg-gray-900 border border-red-500 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">8-Litre Model</h3>
              <p className="text-gray-400 mb-6">Ideal for larger families and entertaining</p>
              <div className="text-3xl font-light mb-6">₹10,499</div>
              <button onClick={() => navigate('/order')} className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105">
                Order 8-Litre
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="border border-gray-600 hover:border-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5">
              Learn More
            </button>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>Starting at ₹1,299 • 8-Year Warranty • Free Software Updates</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.jpg" alt="Tesla Home Chef Logo" className="w-32 h-32 object-contain rounded-full" />
              <div className="text-2xl font-bold mb-4">Tesla Home Chef</div>
              <p className="text-gray-400 text-sm">
                Accelerating the world's transition to sustainable cooking
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Home Chef</div>
                <div>Accessories</div>
                <div>Warranty</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Customer Service</div>
                <div>Troubleshooting</div>
                <div>Software Updates</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Tesla Home Chef</div>
                <div>Careers</div>
                <div>Press</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Tesla Home Chef, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
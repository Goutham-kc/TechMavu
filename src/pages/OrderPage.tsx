import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  Star, 
  Shield, 
  Truck, 
  CreditCard,
  Lock,
  Plus,
  Minus,
  ChevronRight,
  Award,
  Zap,
  Wifi
} from 'lucide-react';

interface OrderPageProps {
  onBack: () => void;
}

export default function OrderPage({ onBack }: OrderPageProps) {
type ColorIdKeys = 'stainless' | 'white' | 'black';

const imageMap: Record<ColorIdKeys, string> = {
  stainless: 'cooker.png',
  white: 'cooker.png',
  black: 'cooker.png',
};
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState('8-litres');
  const [selectedColor, setSelectedColor] = useState<ColorIdKeys>("stainless");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const models = [
    {
      id: '6-litres',
      name: '6-Litres Model',
      subtitle: 'Perfect for couples and small families',
      price: 8299,
      capacity: '6 Litres',
      power: '1200W',
      features: ['Autopilot Cooking', 'Tesla App Integration', '8-Year Warranty']
    },
    {
      id: '8-litres',
      name: '8-Litres Model',
      subtitle: 'Ideal for larger families and entertaining',
      price: 10499,
      capacity: '8 Litres',
      power: '1500W',
      features: ['Autopilot Cooking', 'Tesla App Integration', '8-Year Warranty', 'Premium Finish'],
      popular: true
    }
  ];

  const colors = [
    { id: 'stainless', name: 'Stainless Steel', price: 0, hex: '#C0C0C0' },
    { id: 'black', name: 'Midnight Black', price: 200, hex: '#1a1a1a' },
    { id: 'white', name: 'Pearl White', price: 100, hex: '#f8f8f8' }
  ];

  const availableAccessories = [
    {
      id: 'steamer',
      name: 'Premium Steamer Basket',
      price: 89,
      description: 'Multi-tier stainless steel steamer for vegetables and seafood'
    },
    {
      id: 'probe',
      name: 'Wireless Temperature Probe',
      price: 149,
      description: 'Precision wireless probe for perfect meat cooking'
    },
    {
      id: 'cookbook',
      name: 'Tesla Chef Recipe Collection',
      price: 49,
      description: 'Curated collection of 200+ premium recipes'
    },
    {
      id: 'stand',
      name: 'Premium Kitchen Stand',
      price: 299,
      description: 'Adjustable height stand with integrated storage'
    }
  ];

  const selectedModelData = models.find(m => m.id === selectedModel)!;
  const selectedColorData = colors.find(c => c.id === selectedColor)!;
  const selectedAccessoriesData = availableAccessories.filter(a => accessories.includes(a.id));

  const basePrice = selectedModelData.price;
  const colorPrice = selectedColorData.price;
  const accessoriesPrice = selectedAccessoriesData.reduce((sum, acc) => sum + acc.price, 0);
  const subtotal = basePrice + colorPrice + accessoriesPrice;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  const toggleAccessory = (accessoryId: string) => {
    setAccessories(prev => 
      prev.includes(accessoryId) 
        ? prev.filter(id => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  const steps = [
    { id: 1, name: 'Configure', description: 'Choose your model and options' },
    { id: 2, name: 'Payment', description: 'Enter payment information' },
    { id: 3, name: 'Delivery', description: 'Schedule delivery' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-medium">{step.name}</div>
                    <div className="text-xs text-gray-400">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-600 ml-4" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-400">Total</div>
              <div className="text-2xl font-semibold">₹{total.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-12">
            {/* Model Selection */}
            <div>
              <h2 className="text-3xl font-light mb-8">Choose Your Tesla Home Chef</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      selectedModel === model.id
                        ? 'border-red-500 bg-red-500/5 shadow-lg shadow-red-500/10'
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    {model.popular && (
                      <div className="absolute -top-3 left-6 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{model.name}</h3>
                      <div className="text-2xl font-light">₹{model.price.toLocaleString()}</div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{model.subtitle}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Capacity</span>
                        <span>{model.capacity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Power</span>
                        <span>{model.power}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {selectedModel === model.id && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-2xl font-light mb-6">Choose Color</h3>
              <div className="grid grid-cols-3 gap-4">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedColor === color.id
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedColor(color.id as ColorIdKeys)}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-gray-600"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <div>
                        <div className="font-medium">{color.name}</div>
                        {color.price > 0 && (
                          <div className="text-sm text-gray-400">+ ₹{color.price}</div>
                        )}
                      </div>
                    </div>
                    {selectedColor === color.id && (
                      <div className="flex justify-end">
                        <Check className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div>
              <h3 className="text-2xl font-light mb-6">Enhance Your Experience</h3>
              <div className="space-y-4">
                {availableAccessories.map((accessory) => (
                  <div
                    key={accessory.id}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      accessories.includes(accessory.id)
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-gray-700 bg-gray-900/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium">{accessory.name}</h4>
                          <span className="text-lg font-light">₹{accessory.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{accessory.description}</p>
                      </div>
                      <button
                        onClick={() => toggleAccessory(accessory.id)}
                        className={`ml-4 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          accessories.includes(accessory.id)
                            ? 'border-red-500 bg-red-500 text-white'
                            : 'border-gray-600 text-gray-400 hover:border-gray-500'
                        }`}
                      >
                        {accessories.includes(accessory.id) ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                
                {/* Product Image */}
                <div className="mb-6">
                  <img 
                    src="cooker.jpg"
                    alt="Tesla Home Chef"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                {/* Selected Configuration */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Model</span>
                    <span>{selectedModelData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Color</span>
                    <span>{selectedColorData.name}</span>
                  </div>
                  {selectedAccessoriesData.length > 0 && (
                    <div>
                      <div className="text-gray-400 mb-2">Accessories</div>
                      {selectedAccessoriesData.map((acc) => (
                        <div key={acc.id} className="flex justify-between text-sm ml-4">
                          <span className="text-gray-300">{acc.name}</span>
                          <span>₹{acc.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-gray-700 pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Base Price</span>
                    <span>₹{basePrice.toLocaleString()}</span>
                  </div>
                  {colorPrice > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Color Upgrade</span>
                      <span>₹{colorPrice}</span>
                    </div>
                  )}
                  {accessoriesPrice > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Accessories</span>
                      <span>₹{accessoriesPrice}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-400">Estimated Tax</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3 flex justify-between text-xl font-semibold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-medium text-lg mt-6 transition-all duration-300 transform hover:scale-105">
                  Continue to Payment
                </button>

                {/* Features Reminder */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>8-Year Comprehensive Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Truck className="w-4 h-4" />
                    <span>Free White Glove Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Wifi className="w-4 h-4" />
                    <span>Lifetime Software Updates</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Award className="w-4 h-4" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
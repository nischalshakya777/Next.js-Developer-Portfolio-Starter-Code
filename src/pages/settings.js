// src/pages/settings.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/ScrollAnimations';
import {
  User, Bell, Shield, Palette, Globe,
  Moon, Sun, Save, Eye, EyeOff
} from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: true,
    language: 'en',
    showPassword: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'language', label: 'Language', icon: Globe }
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Settings</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-300 leading-relaxed">
              Customize your experience and manage your account preferences
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Settings Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Navigation */}
            <FadeInLeft>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-fit">
                <h3 className="text-white font-semibold mb-6">Settings Menu</h3>
                <nav className="space-y-2">
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon size={20} />
                        <span>{tab.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </FadeInLeft>

            {/* Content */}
            <div className="lg:col-span-3">
              <FadeInRight>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  {activeTab === 'profile' && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Profile Settings</h2>
                      {/* Example fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">First Name</label>
                          <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" defaultValue="John" />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                          <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="mt-6">
                        <label className="block text-white text-sm font-medium mb-2">Email</label>
                        <input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" defaultValue="john.doe@example.com" />
                      </div>
                    </div>
                  )}

                  {activeTab === 'notifications' && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>
                      {['notifications', 'emailUpdates'].map((key, i) => (
                        <div key={key} className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-white font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                            <p className="text-gray-400 text-sm">Manage {key}</p>
                          </div>
                          <motion.button
                            onClick={() => handleSettingChange(key, !settings[key])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              settings[key] ? 'bg-blue-500' : 'bg-gray-600'
                            }`}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.span
                              className="inline-block h-4 w-4 transform rounded-full bg-white"
                              animate={{ x: settings[key] ? 24 : 4 }}
                            />
                          </motion.button>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'security' && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                          <input
                            type={settings.showPassword ? 'text' : 'password'}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                            defaultValue="password123"
                          />
                          <button
                            type="button"
                            onClick={() => handleSettingChange('showPassword', !settings.showPassword)}
                            className="absolute right-3 top-3 text-gray-300"
                          >
                            {settings.showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'appearance' && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Appearance</h2>
                      <div className="flex items-center space-x-4">
                        <motion.button
                          onClick={() => handleSettingChange('darkMode', true)}
                          className={`p-3 rounded-lg ${settings.darkMode ? 'bg-blue-500' : 'bg-white/10'}`}
                        >
                          <Moon className="text-white" size={20} />
                        </motion.button>
                        <motion.button
                          onClick={() => handleSettingChange('darkMode', false)}
                          className={`p-3 rounded-lg ${!settings.darkMode ? 'bg-yellow-500' : 'bg-white/10'}`}
                        >
                          <Sun className="text-white" size={20} />
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'language' && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Language</h2>
                      <select
                        value={settings.language}
                        onChange={e => handleSettingChange('language', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  )}
                </motion.div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

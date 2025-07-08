import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiType, FiCopy, FiRefreshCw, FiSettings, FiCheck } = FiIcons;

const TitleGenerator = () => {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('general');
  const [tone, setTone] = useState('engaging');
  const [titles, setTitles] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'tech', label: 'Technology' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'music', label: 'Music' },
    { value: 'fitness', label: 'Fitness' }
  ];

  const tones = [
    { value: 'engaging', label: 'Engaging' },
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'exciting', label: 'Exciting' },
    { value: 'informative', label: 'Informative' },
    { value: 'funny', label: 'Funny' }
  ];

  const generateTitles = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleTitles = [
      `The Ultimate Guide to ${topic} (2024)`,
      `5 Amazing ${topic} Tips That Actually Work`,
      `Why ${topic} is Changing Everything`,
      `${topic}: What Nobody Tells You`,
      `I Tried ${topic} for 30 Days - Here's What Happened`,
      `The Secret to Mastering ${topic}`,
      `${topic} Mistakes Everyone Makes (And How to Avoid Them)`,
      `This ${topic} Trick Will Blow Your Mind`,
      `From Zero to Pro: My ${topic} Journey`,
      `The Truth About ${topic} That Will Shock You`
    ];
    
    setTitles(sampleTitles);
    setIsGenerating(false);
  };

  const copyTitle = async (title, index) => {
    try {
      await navigator.clipboard.writeText(title);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg inline-block mb-6">
            <SafeIcon icon={FiType} className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            YouTube Title Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create compelling, click-worthy titles that boost your video views and engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Video Topic or Keywords
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., React tutorial, cooking tips, workout routine..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value} className="bg-gray-800">
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {tones.map(t => (
                    <option key={t.value} value={t.value} className="bg-gray-800">
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={generateTitles}
              disabled={!topic.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <SafeIcon icon={FiRefreshCw} className="h-5 w-5 animate-spin" />
                  <span>Generating Titles...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiType} className="h-5 w-5" />
                  <span>Generate Titles</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {titles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Generated Titles</h3>
              <button
                onClick={generateTitles}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
              >
                <SafeIcon icon={FiRefreshCw} className="h-4 w-4" />
                <span>Regenerate</span>
              </button>
            </div>

            <div className="space-y-4">
              {titles.map((title, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 rounded-lg p-4 flex items-center justify-between group hover:bg-white/20 transition-colors"
                >
                  <span className="text-white flex-1 pr-4">{title}</span>
                  <button
                    onClick={() => copyTitle(title, index)}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    <SafeIcon 
                      icon={copiedIndex === index ? FiCheck : FiCopy} 
                      className={`h-4 w-4 ${copiedIndex === index ? 'text-green-400' : ''}`} 
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TitleGenerator;
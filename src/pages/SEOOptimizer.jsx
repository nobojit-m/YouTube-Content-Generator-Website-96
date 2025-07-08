import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiSearch, FiTag, FiTarget, FiBarChart } = FiIcons;

const SEOOptimizer = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeContent = async () => {
    if (!title.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockAnalysis = {
      score: 85,
      titleAnalysis: {
        length: title.length,
        optimal: title.length >= 30 && title.length <= 60,
        keywords: ['tutorial', 'guide', 'tips'],
        engagement: 'High'
      },
      suggestions: [
        'Add power words like "Ultimate", "Secret", or "Proven"',
        'Include numbers for better click-through rates',
        'Consider adding current year (2024) for freshness',
        'Use brackets or parentheses for additional context'
      ],
      keywords: [
        { keyword: 'tutorial', volume: 50000, difficulty: 'Medium', relevance: 95 },
        { keyword: 'guide', volume: 30000, difficulty: 'Low', relevance: 90 },
        { keyword: 'tips', volume: 40000, difficulty: 'High', relevance: 85 },
        { keyword: 'how to', volume: 80000, difficulty: 'Medium', relevance: 92 }
      ],
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };
    
    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg inline-block mb-6">
            <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            YouTube SEO Optimizer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Optimize your content for YouTube search and improve your video's discoverability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Content Input</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Video Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your video title..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="mt-2 text-sm text-gray-400">
                  {title.length}/60 characters
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your video description..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="tag1, tag2, tag3..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={analyzeContent}
                disabled={!title.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isAnalyzing ? (
                  <>
                    <SafeIcon icon={FiSearch} className="h-5 w-5 animate-spin" />
                    <span>Analyzing SEO...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSearch} className="h-5 w-5" />
                    <span>Analyze SEO</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {analysis && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* SEO Score */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">SEO Score</h3>
                  <div className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}/100
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${analysis.score}%` }}
                  />
                </div>
              </div>

              {/* Title Analysis */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Title Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Length:</span>
                    <span className={analysis.titleAnalysis.optimal ? 'text-green-400' : 'text-yellow-400'}>
                      {analysis.titleAnalysis.length} chars
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engagement:</span>
                    <span className="text-green-400">{analysis.titleAnalysis.engagement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Keywords:</span>
                    <span className="text-blue-400">{analysis.titleAnalysis.keywords.length} found</span>
                  </div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Suggestions</h3>
                <ul className="space-y-2">
                  {analysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-300 flex items-start space-x-2">
                      <SafeIcon icon={FiTarget} className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Keyword Analysis</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-3 text-gray-300">Keyword</th>
                    <th className="pb-3 text-gray-300">Search Volume</th>
                    <th className="pb-3 text-gray-300">Difficulty</th>
                    <th className="pb-3 text-gray-300">Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.keywords.map((keyword, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-3 text-white">{keyword.keyword}</td>
                      <td className="py-3 text-gray-300">{keyword.volume.toLocaleString()}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          keyword.difficulty === 'Low' ? 'bg-green-500/20 text-green-400' :
                          keyword.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {keyword.difficulty}
                        </span>
                      </td>
                      <td className="py-3 text-blue-400">{keyword.relevance}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SEOOptimizer;
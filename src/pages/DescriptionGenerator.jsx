import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiCopy, FiRefreshCw, FiCheck, FiEdit3 } = FiIcons;

const DescriptionGenerator = () => {
  const [title, setTitle] = useState('');
  const [keyPoints, setKeyPoints] = useState('');
  const [callToAction, setCallToAction] = useState('subscribe');
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [includeTimestamps, setIncludeTimestamps] = useState(false);
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const ctaOptions = [
    { value: 'subscribe', label: 'Subscribe & Like' },
    { value: 'comment', label: 'Comment & Share' },
    { value: 'follow', label: 'Follow & Notify' },
    { value: 'custom', label: 'Custom CTA' }
  ];

  const generateDescription = async () => {
    if (!title.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const points = keyPoints.split('\n').filter(point => point.trim());
    const hashtags = includeHashtags ? '#YouTube #Tutorial #Guide #Tips #Education' : '';
    const timestamps = includeTimestamps ? '\n\n⏰ TIMESTAMPS:\n0:00 - Introduction\n2:30 - Main Content\n8:45 - Key Points\n12:00 - Conclusion' : '';
    
    const ctaText = {
      subscribe: "👍 If you found this helpful, please LIKE and SUBSCRIBE for more content!\n🔔 Hit the notification bell to never miss an update!",
      comment: "💬 Let me know your thoughts in the comments below!\n📤 Share this video with someone who needs to see it!",
      follow: "🔗 Follow me for more content like this!\n🔔 Turn on notifications to stay updated!",
      custom: "👆 Don't forget to engage with this content!"
    };
    
    let generatedDescription = `🎯 ${title}\n\n`;
    
    if (points.length > 0) {
      generatedDescription += "📋 What you'll learn:\n";
      points.forEach((point, index) => {
        generatedDescription += `${index + 1}. ${point}\n`;
      });
      generatedDescription += '\n';
    }
    
    generatedDescription += `${ctaText[callToAction]}\n\n`;
    
    if (includeTimestamps) {
      generatedDescription += timestamps + '\n\n';
    }
    
    generatedDescription += `📱 CONNECT WITH ME:\n• Website: [Your Website]\n• Twitter: [Your Twitter]\n• Instagram: [Your Instagram]\n\n`;
    
    if (hashtags) {
      generatedDescription += `📌 TAGS:\n${hashtags}\n\n`;
    }
    
    generatedDescription += `⚠️ DISCLAIMER:\nThis content is for educational purposes only. Please consult with professionals for specific advice.\n\n`;
    generatedDescription += `© 2024 [Your Channel Name]. All rights reserved.`;
    
    setDescription(generatedDescription);
    setIsGenerating(false);
  };

  const copyDescription = async () => {
    try {
      await navigator.clipboard.writeText(description);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
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
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg inline-block mb-6">
            <SafeIcon icon={FiFileText} className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            YouTube Description Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create compelling, SEO-optimized descriptions that engage your audience and boost your video's performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Content Details</h2>
            
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Key Points (one per line)
                </label>
                <textarea
                  value={keyPoints}
                  onChange={(e) => setKeyPoints(e.target.value)}
                  placeholder="Main topic overview&#10;Step-by-step tutorial&#10;Pro tips and tricks&#10;Common mistakes to avoid"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Call to Action
                </label>
                <select
                  value={callToAction}
                  onChange={(e) => setCallToAction(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {ctaOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={includeHashtags}
                    onChange={(e) => setIncludeHashtags(e.target.checked)}
                    className="w-5 h-5 text-orange-500 bg-white/10 border-white/20 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-white">Include hashtags</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={includeTimestamps}
                    onChange={(e) => setIncludeTimestamps(e.target.checked)}
                    className="w-5 h-5 text-orange-500 bg-white/10 border-white/20 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-white">Include timestamps</span>
                </label>
              </div>

              <button
                onClick={generateDescription}
                disabled={!title.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <SafeIcon icon={FiRefreshCw} className="h-5 w-5 animate-spin" />
                    <span>Generating Description...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiEdit3} className="h-5 w-5" />
                    <span>Generate Description</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {description && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Generated Description</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={copyDescription}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <SafeIcon icon={isCopied ? FiCheck : FiCopy} className="h-4 w-4" />
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={generateDescription}
                    className="text-orange-400 hover:text-orange-300 transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    <SafeIcon icon={FiRefreshCw} className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono">
                  {description}
                </pre>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                Character count: {description.length} / 5000
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionGenerator;
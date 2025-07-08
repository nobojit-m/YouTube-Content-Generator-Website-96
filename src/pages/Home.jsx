import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiType, FiTrendingUp, FiFileText, FiArrowRight, FiPlay, FiUsers, FiStar } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiType,
      title: 'Title Generator',
      description: 'Create catchy, click-worthy titles that boost your video views',
      href: '/title-generator',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FiTrendingUp,
      title: 'SEO Optimizer',
      description: 'Optimize your content for YouTube search and discovery',
      href: '/seo-optimizer',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FiFileText,
      title: 'Description Generator',
      description: 'Generate compelling descriptions that engage your audience',
      href: '/description-generator',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { icon: FiUsers, value: '10K+', label: 'Content Creators' },
    { icon: FiPlay, value: '50K+', label: 'Titles Generated' },
    { icon: FiStar, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Supercharge Your
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                {' '}YouTube Content
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate engaging titles, optimize SEO, and create compelling descriptions 
              with our AI-powered tools designed specifically for YouTube creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/title-generator"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
              </Link>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <SafeIcon icon={stat.icon} className="h-8 w-8 text-red-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive suite of tools helps you create content that stands out and performs well on YouTube.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={feature.href}
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105"
                >
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg inline-block mb-6`}>
                    <SafeIcon icon={feature.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="flex items-center text-red-400 font-medium">
                    <span>Try it now</span>
                    <SafeIcon icon={FiArrowRight} className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-12 border border-red-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using our tools to grow their channels.
            </p>
            <Link
              to="/title-generator"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Creating</span>
              <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
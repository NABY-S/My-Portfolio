'use client';

import React from "react"

import { motion } from 'framer-motion';
import { skills as skillsData } from '@/lib/data';
import {
  Library,
  Zap,
  Code,
  Palette,
  Play,
  Server,
  Database,
  Cloud,
  GitBranch,
  Box,
  Layers,
  Smartphone,
  Eye,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Library: <Library size={18} />,
  Zap: <Zap size={18} />,
  Code: <Code size={18} />,
  Palette: <Palette size={18} />,
  Play: <Play size={18} />,
  Server: <Server size={18} />,
  Database: <Database size={18} />,
  Cloud: <Cloud size={18} />,
  GitBranch: <GitBranch size={18} />,
  Box: <Box size={18} />,
  Layers: <Layers size={18} />,
  Smartphone: <Smartphone size={18} />,
  Eye: <Eye size={18} />,
};

export function Skills() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-accent transition-all hover:bg-secondary/80 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="text-accent group-hover:text-cyan-300 transition-colors">
                      {iconMap[skill.icon]}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

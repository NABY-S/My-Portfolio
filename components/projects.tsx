'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

export function Projects() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="rounded-xl border border-border p-6 hover:-translate-y-1 transition bg-background"
            >
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

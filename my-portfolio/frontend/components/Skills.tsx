'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Palette } from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={32} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server size={32} />,
      skills: ['Node.js', 'Express.js', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Design',
      icon: <Palette size={32} />,
      skills: ['Git & GitHub', 'Figma'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6`}>
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    {category.title}
                  </h3>

                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + (index * 0.1) + (skillIndex * 0.1) }}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

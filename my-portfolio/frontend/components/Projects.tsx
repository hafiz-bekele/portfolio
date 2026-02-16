'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

interface Project {
  _id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveLink?: string
  githubLink?: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  // Fallback projects if backend is not available
  const fallbackProjects = [
    {
      _id: '1',
      title: 'E-commerce Website',
      description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      _id: '2',
      title: 'Food Delivery App',
      description: 'Real-time food ordering system with restaurant management and order tracking.',
      image: '🍔',
      tags: ['React', 'Express', 'Socket.io'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      _id: '3',
      title: 'Coffee Shop Website',
      description: 'Modern and elegant website for a local coffee shop with online menu and reservations.',
      image: '☕',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      _id: '4',
      title: 'School Management System',
      description: 'Comprehensive system for managing students, teachers, classes, and grades.',
      image: '🎓',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      _id: '5',
      title: 'Online Book Store',
      description: 'Digital bookstore with search, filters, reviews, and secure checkout.',
      image: '📚',
      tags: ['React', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    }
  ]

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
        const data = await response.json()
        
        if (data.success && data.data.length > 0) {
          setProjects(data.data)
        } else {
          setProjects(fallbackProjects)
        }
      } catch (error) {
        console.log('Using fallback projects')
        setProjects(fallbackProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
              </div>
            ) : (
              projects.map((project, index) => (
                <ProjectCard key={project._id} {...project} index={index} />
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

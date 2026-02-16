const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    order: 1
  },
  {
    title: 'Food Delivery App',
    description: 'Real-time food ordering system with restaurant management and order tracking.',
    image: '🍔',
    tags: ['React', 'Express', 'Socket.io', 'MongoDB'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    order: 2
  },
  {
    title: 'Coffee Shop Website',
    description: 'Modern and elegant website for a local coffee shop with online menu and reservations.',
    image: '☕',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
    featured: true,
    order: 3
  },
  {
    title: 'School Management System',
    description: 'Comprehensive system for managing students, teachers, classes, and grades.',
    image: '🎓',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#',
    featured: false,
    order: 4
  },
  {
    title: 'Online Book Store',
    description: 'Digital bookstore with search, filters, reviews, and secure checkout.',
    image: '📚',
    tags: ['React', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
    featured: false,
    order: 5
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');

    // Insert new projects
    await Project.insertMany(projects);
    console.log('✅ Seeded projects successfully');

    // Display projects
    const allProjects = await Project.find();
    console.log(`\n📊 Total projects: ${allProjects.length}`);
    allProjects.forEach(project => {
      console.log(`  - ${project.title}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

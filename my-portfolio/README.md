# Hafiz Bekele - Portfolio Website

A modern, interactive portfolio website with a full-stack architecture: React/Next.js frontend with Node.js/Express backend and MongoDB database.

## Features

### Frontend
- ✨ Smooth scroll animations & entrance effects (Framer Motion)
- 🎨 Responsive, card-based layouts
- 🌙 Dark mode support with toggle
- 🎭 Interactive elements (hover effects, animated cards)
- 📱 Fully responsive design
- ⚡ Built with modern tech stack (2025)

### Backend
- 📧 Contact form with email notifications
- 📂 Dynamic project management (CRUD)
- 🔒 Input validation and security
- 🛡️ Rate limiting and security headers
- 📊 MongoDB database integration

## Tech Stack

### Frontend
- **React 18+** - UI library
- **Next.js 15** - React framework
- **Tailwind CSS v3** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **Express Validator** - Validation

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB installed (local) or MongoDB Atlas account (cloud)
- Gmail account (for email notifications)

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will run on [http://localhost:3000](http://localhost:3000)

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration

# Seed database (optional)
npm run seed

# Run backend server
npm run dev
```

Backend will run on [http://localhost:5000](http://localhost:5000)

See [backend/README.md](backend/README.md) for detailed backend setup instructions.

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=hafizbekele@example.com
FRONTEND_URL=http://localhost:3000
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with Navbar & Footer
│   ├── page.tsx        # Home page with all sections
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation with dark mode toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills cards
│   ├── Projects.tsx    # Projects grid (fetches from API)
│   ├── ProjectCard.tsx # Reusable project card
│   ├── Contact.tsx     # Contact form (submits to API)
│   └── Footer.tsx      # Footer
├── backend/
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   ├── server.js       # Express server
│   ├── seed.js         # Database seeder
│   └── README.md       # Backend documentation
└── public/
    └── images/         # Add your images here
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

## Customization

1. **Personal Info**: Update content in each component
2. **Projects**: 
   - Use backend API to manage projects dynamically
   - Or edit the fallback array in `components/Projects.tsx`
3. **Skills**: Modify skillCategories in `components/Skills.tsx`
4. **Colors**: Change theme colors in `tailwind.config.ts`
5. **Images**: Add your photos to `public/images/` and update paths
6. **Email**: Configure email settings in `backend/.env`

## Deployment

### Frontend (Vercel)
```bash
npm run build
```
Push to GitHub and connect to Vercel for automatic deployments.

### Backend (Heroku/Railway/Render)
1. Set environment variables in hosting dashboard
2. Connect MongoDB Atlas
3. Deploy from GitHub repository

See [backend/README.md](backend/README.md) for detailed deployment instructions.

## License

MIT License - feel free to use this for your own portfolio!

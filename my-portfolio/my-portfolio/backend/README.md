# Portfolio Backend API

Node.js/Express backend for the portfolio website with MongoDB database.

## Features

- 📧 Contact form submission with email notifications
- 📂 Projects CRUD operations
- 🔒 Input validation and sanitization
- 🛡️ Security headers with Helmet
- ⚡ Rate limiting
- 📊 MongoDB database

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email sending
- **Express Validator** - Input validation

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=hafizbekele@example.com
FRONTEND_URL=http://localhost:3000
```

### 3. Setup MongoDB

**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get connection string and update `MONGODB_URI` in `.env`

### 4. Setup Email (Gmail Example)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

### 5. Seed Database (Optional)

Populate database with sample projects:

```bash
npm run seed
```

### 6. Start Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on http://localhost:5000

## API Endpoints

### Contact Routes

**POST /api/contact**
- Submit contact form
- Body: `{ name, email, message }`
- Returns: Success message

**GET /api/contact**
- Get all contact messages (admin)
- Returns: Array of contacts

**PATCH /api/contact/:id/status**
- Update contact status
- Body: `{ status: 'new' | 'read' | 'replied' }`

### Project Routes

**GET /api/projects**
- Get all projects
- Query: `?featured=true` (optional)
- Returns: Array of projects

**GET /api/projects/:id**
- Get single project
- Returns: Project object

**POST /api/projects**
- Create new project (admin)
- Body: `{ title, description, image, tags, liveLink, githubLink }`

**PUT /api/projects/:id**
- Update project (admin)
- Body: Project fields to update

**DELETE /api/projects/:id**
- Delete project (admin)

### Health Check

**GET /api/health**
- Check server status
- Returns: `{ status: 'OK', message: 'Server is running' }`

## Testing API

Use tools like:
- **Postman** - https://www.postman.com/
- **Thunder Client** (VS Code extension)
- **curl** commands

Example curl request:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Hello!"}'
```

## Security Notes

⚠️ **Important for Production:**

1. Add authentication middleware for admin routes
2. Use environment variables for all sensitive data
3. Enable HTTPS
4. Set up proper CORS configuration
5. Add rate limiting per route
6. Implement JWT authentication
7. Add input sanitization
8. Use MongoDB connection pooling

## Deployment

### Deploy to Heroku

```bash
heroku create your-portfolio-api
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set EMAIL_USER=your-email
# ... set other env variables
git push heroku main
```

### Deploy to Railway/Render

1. Connect GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically

## Troubleshooting

**MongoDB Connection Error:**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network/firewall settings

**Email Not Sending:**
- Verify Gmail app password
- Check email configuration in `.env`
- Enable "Less secure app access" (not recommended) or use App Password

**CORS Error:**
- Update `FRONTEND_URL` in `.env`
- Check CORS configuration in `server.js`

## Project Structure

```
backend/
├── models/
│   ├── Contact.js      # Contact form schema
│   └── Project.js      # Project schema
├── routes/
│   ├── contact.js      # Contact endpoints
│   └── projects.js     # Project endpoints
├── .env.example        # Environment template
├── .gitignore
├── package.json
├── seed.js            # Database seeder
├── server.js          # Main server file
└── README.md
```

## License

MIT

# Quick Setup Guide

Follow these steps to get your portfolio running locally.

## Step 1: Install MongoDB

### Windows
1. Download from https://www.mongodb.com/try/download/community
2. Run installer with default settings
3. MongoDB will start automatically as a service

### Mac (using Homebrew)
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu)
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

## Step 2: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `backend/.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=hafizbekele@example.com
FRONTEND_URL=http://localhost:3000
```

### Setup Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Security → 2-Step Verification (enable if not already)
3. Security → App passwords
4. Select "Mail" and "Other (Custom name)"
5. Copy the generated password to `EMAIL_PASS` in `.env`

### Seed Database

```bash
npm run seed
```

### Start Backend Server

```bash
npm run dev
```

Backend should now be running on http://localhost:5000

## Step 3: Setup Frontend

Open a new terminal:

```bash
# From project root
npm install

# Start development server
npm run dev
```

Frontend should now be running on http://localhost:3000

## Step 4: Test Everything

1. Open http://localhost:3000 in your browser
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email for the notification
5. Check MongoDB for saved data

## Verify Backend is Working

Open http://localhost:5000/api/health in your browser.
You should see: `{"status":"OK","message":"Server is running"}`

## Common Issues

### MongoDB Connection Error
- Make sure MongoDB is running
- Check if port 27017 is available
- Try: `mongodb://127.0.0.1:27017/portfolio` instead

### Email Not Sending
- Verify Gmail app password is correct
- Check if 2FA is enabled on Gmail
- Try with a different email provider

### CORS Error
- Make sure backend is running on port 5000
- Check `FRONTEND_URL` in backend `.env`
- Restart both servers

### Port Already in Use
- Frontend: Change port with `npm run dev -- -p 3001`
- Backend: Change `PORT` in `.env`

## Next Steps

1. Customize content in components
2. Add your own projects via API or database
3. Replace placeholder images
4. Update personal information
5. Configure email settings
6. Deploy to production

## Production Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Backend (Railway/Render)
1. Create account on Railway or Render
2. Create new project from GitHub
3. Add environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create free cluster at mongodb.com/cloud/atlas
2. Get connection string
3. Update `MONGODB_URI` in production environment

## Need Help?

Check the detailed documentation:
- Frontend: [README.md](README.md)
- Backend: [backend/README.md](backend/README.md)

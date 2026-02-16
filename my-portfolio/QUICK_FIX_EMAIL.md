# ⚡ Quick Fix - Email Not Working

## 🚨 The Problem

Your contact form saves messages to the database ✅ but emails fail ❌ because Gmail needs an **App Password**.

## ✅ Quick Solution (5 Minutes)

### 1️⃣ Enable 2-Step Verification
👉 Go to: https://myaccount.google.com/security
- Click "2-Step Verification"
- Click "Get Started"
- Follow the steps (you'll need your phone)

### 2️⃣ Generate App Password
👉 Go to: https://myaccount.google.com/apppasswords
- Select app: **Mail**
- Select device: **Other** → Type "Portfolio"
- Click **Generate**
- Copy the 16-character password (like: `abcd efgh ijkl mnop`)

### 3️⃣ Update .env File
Open: `my-portfolio/my-portfolio/backend/.env`

Change this line:
```env
EMAIL_PASS=H%fiz2117
```

To this (remove spaces from your app password):
```env
EMAIL_PASS=abcdefghijklmnop
```

### 4️⃣ Restart Backend
The server will auto-restart, or manually:
```bash
cd my-portfolio/my-portfolio/backend
npm run dev
```

### 5️⃣ Test It!
1. Go to http://localhost:3000
2. Fill out contact form
3. Submit
4. Check email: hafizbekele434@gmail.com ✅

## 📖 Need More Help?

See detailed guide: [GMAIL_APP_PASSWORD_SETUP.md](GMAIL_APP_PASSWORD_SETUP.md)

---

**That's it! Your contact form will work perfectly after this! 🎉**

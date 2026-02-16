# 🔗 Update Social Media Links

## ✅ GitHub Link Updated!

Your GitHub link has been updated to: **https://github.com/hafiz-bekele**

## 📝 How to Update Social Links

### Location:
Edit this file: `my-portfolio/frontend/.env.local`

### Current Settings:
```env
NEXT_PUBLIC_EMAIL=hafizbekele434@gmail.com
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/your-profile
NEXT_PUBLIC_GITHUB=https://github.com/hafiz-bekele
```

## 🔧 Update LinkedIn

When you have your LinkedIn profile:

1. Open: `my-portfolio/frontend/.env.local`
2. Find this line:
   ```env
   NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/your-profile
   ```
3. Replace with your LinkedIn URL:
   ```env
   NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/hafiz-bekele
   ```
4. Save the file
5. The website will auto-reload

## 🧪 Testing Your Links

### Step 1: Refresh Your Website
Go to: http://localhost:3000

### Step 2: Scroll to Contact Section
Scroll down to the bottom of the page

### Step 3: Test Social Icons
You'll see three social media icons:
- 📧 **Email** - Opens email client
- 💼 **LinkedIn** - Opens LinkedIn profile
- 🐙 **GitHub** - Opens GitHub profile (https://github.com/hafiz-bekele)

### Step 4: Click GitHub Icon
- Should open: https://github.com/hafiz-bekele
- Opens in new tab
- Shows your GitHub profile ✅

## 📍 Where Links Appear

Your social links appear in the **Contact section** at the bottom of the page:

```
Contact Information
📧 hafizbekele434@gmail.com

Follow Me
[Email Icon] [LinkedIn Icon] [GitHub Icon]
```

## 🎨 Customization

### Add More Social Links

Edit: `frontend/components/Contact.tsx`

Find the `socialLinks` array and add more:

```tsx
const socialLinks = [
  {
    name: 'Email',
    icon: <Mail size={24} />,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    color: 'hover:text-red-500'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    href: process.env.NEXT_PUBLIC_LINKEDIN || '#',
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    icon: <Github size={24} />,
    href: process.env.NEXT_PUBLIC_GITHUB || '#',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  // Add more here:
  {
    name: 'Twitter',
    icon: <Twitter size={24} />,
    href: 'https://twitter.com/your-handle',
    color: 'hover:text-blue-400'
  }
]
```

### Change Icon Colors

In the `socialLinks` array, modify the `color` property:
- Email: `hover:text-red-500`
- LinkedIn: `hover:text-blue-600`
- GitHub: `hover:text-gray-900`

## 🔍 Troubleshooting

### Link Doesn't Work
1. **Check .env.local file:**
   - Make sure URL is complete
   - Include `https://`
   - No typos

2. **Restart frontend:**
   ```bash
   # Stop frontend (Ctrl+C)
   cd my-portfolio/frontend
   npm run dev
   ```

3. **Hard refresh browser:**
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

### Link Goes to Wrong Page
- Check the URL in `.env.local`
- Make sure it's your actual profile URL
- Test the URL in a browser first

### Icon Not Showing
- Icons are from `lucide-react` package
- Already installed and working
- Check browser console (F12) for errors

## 📋 Social Links Checklist

- [x] Email: hafizbekele434@gmail.com ✅
- [x] GitHub: https://github.com/hafiz-bekele ✅
- [ ] LinkedIn: Update when you have profile URL

## 💡 Tips

1. **Test Links First:**
   - Open each URL in browser
   - Make sure they work
   - Then add to .env.local

2. **Keep URLs Updated:**
   - Update when you change usernames
   - Check links periodically

3. **Professional Profiles:**
   - Use professional photo on GitHub
   - Complete your LinkedIn profile
   - Keep profiles up-to-date

## 🌐 For Production

When deploying:
1. Update `.env.local` with production URLs
2. Or set environment variables in hosting platform
3. Test all links after deployment

## ✅ Current Status

Your social links:
- ✅ Email working
- ✅ GitHub working (https://github.com/hafiz-bekele)
- ⏳ LinkedIn (update when ready)

---

**Your GitHub link is now working! Test it at http://localhost:3000 🎉**

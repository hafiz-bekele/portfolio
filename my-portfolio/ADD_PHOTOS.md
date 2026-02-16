# 📸 How to Add Your Photos

## Your Photos from the PDF

I can see you have two professional photos:
1. **Portrait photo** - Professional headshot with blue shirt
2. **Working photo** - You at your desk coding

## Steps to Add Photos

### Option 1: Manual Copy (Easiest)

1. **Save the photos from your PDF or original files**
   - Right-click on each image
   - Save them to your computer

2. **Rename the main photo**
   - Rename your portrait photo to: `profile.jpg`

3. **Copy to the project**
   - Navigate to: `my-portfolio/frontend/public/images/`
   - Paste `profile.jpg` there

### Option 2: Using File Explorer

1. Open File Explorer
2. Navigate to: `C:\newone\portifolio\my-portfolio\frontend\public\images\`
3. Copy your photo there and rename it to `profile.jpg`

## Photo Requirements

- **Format**: JPG or PNG
- **Recommended Size**: 800x800px or larger (will be automatically resized)
- **File Name**: `profile.jpg`

## Where Your Photo Will Appear

Once you add `profile.jpg`, it will automatically show in:
- ✅ Hero section (main landing page)
- ✅ About section

## Current Status

The website is configured to use: `/images/profile.jpg`

If the photo is not found, you'll see a placeholder or broken image icon.

## Testing

After adding your photo:
1. Refresh your browser at http://localhost:3000
2. You should see your photo in the Hero section
3. Scroll down to see it in the About section

## Alternative Photo Names

If you want to use different photos for different sections:

**Hero Section**: Edit `frontend/components/Hero.tsx`
```tsx
src="/images/profile.jpg"  // Change this
```

**About Section**: Edit `frontend/components/About.tsx`
```tsx
src="/images/profile.jpg"  // Change this
```

## Need Help?

If you're having trouble:
1. Make sure the photo is named exactly `profile.jpg`
2. Check it's in the correct folder: `frontend/public/images/`
3. Refresh your browser (Ctrl + F5)
4. Check browser console for errors (F12)

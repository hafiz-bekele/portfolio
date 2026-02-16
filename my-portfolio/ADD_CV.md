# 📄 How to Add Your CV/Resume

## 📍 Where to Add Your CV

### Location:
```
my-portfolio/frontend/public/cv/
```

### Full Path:
```
C:\newone\portifolio\my-portfolio\frontend\public\cv\
```

## 📝 Step-by-Step Instructions

### Step 1: Prepare Your CV
1. Make sure your CV is in **PDF format**
2. Recommended filename: `Hafiz_Bekele_CV.pdf`
3. Keep file size under 5MB

### Step 2: Copy CV to Project

**Option A: Using File Explorer**
1. Open File Explorer
2. Navigate to: `C:\newone\portifolio\my-portfolio\frontend\public\cv\`
3. Copy your CV PDF file there
4. Rename it to: `Hafiz_Bekele_CV.pdf`

**Option B: Using Command Line**
```bash
# From your desktop or downloads folder
copy "path\to\your\cv.pdf" "C:\newone\portifolio\my-portfolio\frontend\public\cv\Hafiz_Bekele_CV.pdf"
```

### Step 3: Test the Download
1. Go to http://localhost:3000
2. Click the **"Download CV"** button in the Hero section
3. Your CV should download automatically! ✅

## 🎯 What Happens

When visitors click "Download CV":
- ✅ Your CV downloads immediately
- ✅ Filename: `Hafiz_Bekele_CV.pdf`
- ✅ No page navigation
- ✅ Works on all devices

## 🔧 Using a Different Filename

If you want to use a different filename (e.g., `resume.pdf`):

1. **Add your file** to `public/cv/` with your preferred name
2. **Update Hero.tsx**:

Open: `frontend/components/Hero.tsx`

Find this line:
```tsx
href="/cv/Hafiz_Bekele_CV.pdf"
download="Hafiz_Bekele_CV.pdf"
```

Change to:
```tsx
href="/cv/your-filename.pdf"
download="your-filename.pdf"
```

## 📋 File Requirements

### Format
- ✅ PDF (recommended)
- ⚠️ DOC/DOCX (not recommended - may not work in all browsers)

### Size
- ✅ Under 5MB (recommended)
- ⚠️ Over 5MB (may be slow to download)

### Naming
- ✅ No spaces: `Hafiz_Bekele_CV.pdf`
- ✅ Use underscores or hyphens: `hafiz-bekele-cv.pdf`
- ❌ Avoid spaces: `Hafiz Bekele CV.pdf`

## 🧪 Testing Checklist

After adding your CV:

- [ ] File is in `frontend/public/cv/` folder
- [ ] Filename matches the one in Hero.tsx
- [ ] Go to http://localhost:3000
- [ ] Click "Download CV" button
- [ ] CV downloads successfully
- [ ] Open downloaded file to verify it's correct

## 🎨 Customization Options

### Change Button Text
In `frontend/components/Hero.tsx`:
```tsx
<Download size={20} />
Download CV  // Change this text
```

### Change Button Style
Modify the className in Hero.tsx to change colors, size, etc.

### Add Multiple Download Options
You can add multiple buttons for different versions:
```tsx
<motion.a href="/cv/Hafiz_Bekele_CV_English.pdf">
  Download CV (English)
</motion.a>
<motion.a href="/cv/Hafiz_Bekele_CV_Spanish.pdf">
  Download CV (Spanish)
</motion.a>
```

## 📂 Folder Structure

```
my-portfolio/
└── frontend/
    └── public/
        ├── images/
        │   └── profile.jpg
        └── cv/
            └── Hafiz_Bekele_CV.pdf  ← Add your CV here
```

## 🔍 Troubleshooting

### Button Doesn't Download
1. **Check file exists:**
   - Navigate to `frontend/public/cv/`
   - Verify `Hafiz_Bekele_CV.pdf` is there

2. **Check filename matches:**
   - Filename in folder: `Hafiz_Bekele_CV.pdf`
   - Filename in code: `Hafiz_Bekele_CV.pdf`
   - Must match exactly (case-sensitive)

3. **Check file permissions:**
   - Make sure the file is readable
   - Not corrupted or locked

### 404 Error
- File not found in `public/cv/` folder
- Filename doesn't match
- Check browser console (F12) for errors

### File Opens Instead of Downloads
This is normal browser behavior for PDFs. To force download:
- The `download` attribute is already set
- Some browsers may still open it
- Users can right-click → "Save as"

## 💡 Tips

1. **Keep CV Updated:**
   - Replace the file whenever you update your CV
   - Same filename = no code changes needed

2. **Multiple Versions:**
   - Add different versions for different roles
   - Update button to show options

3. **File Size:**
   - Compress large PDFs using online tools
   - Smaller files = faster downloads

4. **Professional Naming:**
   - Use your name in the filename
   - Makes it easy for recruiters to find

## ✅ Quick Checklist

Before going live:
- [ ] CV is up-to-date
- [ ] PDF format
- [ ] Professional filename
- [ ] Under 5MB
- [ ] Tested download button
- [ ] File opens correctly
- [ ] No typos or errors in CV

## 🌐 For Production

When deploying to production (Vercel, Netlify, etc.):
- ✅ CV file will be included automatically
- ✅ No additional configuration needed
- ✅ Same folder structure works

---

**Your CV download is ready! Just add the PDF file and test it! 📄✨**

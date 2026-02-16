# 🔧 Fix CV Filename Issue

## 🐛 Problem Found

Your CV file has a double extension: `Hafiz_Bekele_CV.pdf.pdf`

It should be: `Hafiz_Bekele_CV.pdf`

## ✅ Quick Fix

### Option 1: Rename in File Explorer

1. Open File Explorer
2. Navigate to: `C:\newone\portifolio\my-portfolio\frontend\public\cv\`
3. Find the file: `Hafiz_Bekele_CV.pdf.pdf`
4. Right-click → Rename
5. Change to: `Hafiz_Bekele_CV.pdf`
6. Press Enter

### Option 2: Using Command Line

```bash
cd C:\newone\portifolio\my-portfolio\frontend\public\cv
ren "Hafiz_Bekele_CV.pdf.pdf" "Hafiz_Bekele_CV.pdf"
```

## 🧪 Test After Fixing

1. Go to http://localhost:3000
2. Click "Download CV" button
3. Your CV should download! ✅

## 💡 Why This Happened

Windows sometimes hides file extensions by default. When you renamed the file, you might have typed:
- `Hafiz_Bekele_CV.pdf` 
- But the actual file was already `.pdf`
- Result: `Hafiz_Bekele_CV.pdf.pdf`

## 🔍 Show File Extensions in Windows

To prevent this in the future:

1. Open File Explorer
2. Click "View" tab
3. Check "File name extensions"
4. Now you'll see the real extensions

## ✅ Correct Filename

Should be exactly:
```
Hafiz_Bekele_CV.pdf
```

NOT:
- ❌ `Hafiz_Bekele_CV.pdf.pdf`
- ❌ `Hafiz_Bekele_CV.PDF`
- ❌ `Hafiz Bekele CV.pdf` (spaces)

## 📍 Correct Location

```
C:\newone\portifolio\my-portfolio\frontend\public\cv\Hafiz_Bekele_CV.pdf
```

---

**Just rename the file and it will work! 📄✨**

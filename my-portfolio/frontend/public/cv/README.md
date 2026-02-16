# CV/Resume Folder

## How to Add Your CV

1. **Save your CV as PDF**
   - Name it: `Hafiz_Bekele_CV.pdf`
   - Or any name you prefer

2. **Copy to this folder**
   - Location: `my-portfolio/frontend/public/cv/`
   - Full path: `C:\newone\portifolio\my-portfolio\frontend\public\cv\`

3. **That's it!**
   - The "Download CV" button will automatically work
   - Visitors can download your CV

## File Requirements

- **Format**: PDF (recommended)
- **File Name**: `Hafiz_Bekele_CV.pdf`
- **Size**: Keep under 5MB for fast downloads
- **Content**: Your professional resume/CV

## Alternative File Names

If you want to use a different name, update the link in:
- `frontend/components/Hero.tsx`

Change this line:
```tsx
href="/cv/Hafiz_Bekele_CV.pdf"
```

To your filename:
```tsx
href="/cv/your-filename.pdf"
```

## Current Setup

The "Download CV" button in the Hero section is configured to download:
`/cv/Hafiz_Bekele_CV.pdf`

## Testing

After adding your CV:
1. Go to http://localhost:3000
2. Click "Download CV" button
3. Your CV should download automatically

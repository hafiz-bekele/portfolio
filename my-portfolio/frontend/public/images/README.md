# Images Folder

## Required Images

### 1. profile.jpg
- Your main profile photo (the one you sent)
- Recommended size: 800x800px or larger
- Format: JPG or PNG
- This will be displayed in the Hero section

### 2. about-photo.jpg (optional)
- Alternative photo for About section
- Recommended size: 600x600px or larger
- Format: JPG or PNG

## How to Add Your Photos

1. Save your photos from the images you sent earlier
2. Rename the main photo to `profile.jpg`
3. Place it in this folder: `my-portfolio/frontend/public/images/`

## Current Setup

The Hero section is configured to use: `/images/profile.jpg`

If you want to use a different filename, update the path in:
- `frontend/components/Hero.tsx`
- `frontend/components/About.tsx`

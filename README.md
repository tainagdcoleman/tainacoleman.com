# Tainã Coleman - Academic Portfolio Website

A clean, professional academic portfolio website built for hosting on GitHub Pages.

## Setup Instructions

### 1. Add Your Profile Photo

Place your profile photo in the `images/` directory and name it `profile.jpg`. If you use a different format or filename, update the image reference in `index.html` (line 64).

### 2. Add Your CV

Place your CV PDF file in the root directory and name it `cv.pdf`. The download button in the CV section will link to this file.

### 3. Update Social Media Links

Edit `index.html` to add your actual social media profile links:
- Google Scholar (line 223)
- GitHub (line 224)
- LinkedIn (line 225)

### 4. Deploy to GitHub Pages

1. Create a new repository named `<your-username>.github.io` (or use a custom repository name)
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "main" branch as source
   - Save

Your site will be live at `https://<your-username>.github.io/` or `https://<your-username>.github.io/<repository-name>/`

### 5. Custom Domain (Optional)

To use a custom domain like `tainacoleman.com`:

1. Add a `CNAME` file to the root directory containing your domain:
   ```
   tainacoleman.com
   ```
2. Configure DNS settings with your domain provider:
   - Add an A record pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `<your-username>.github.io`
3. Enable custom domain in GitHub Pages settings

## File Structure

```
tainacoleman.com/
├── index.html          # Main HTML file with all content
├── styles.css          # All styling and responsive design
├── script.js           # Navigation, animations, and interactions
├── cv.pdf              # Your CV (add this file)
├── images/
│   └── profile.jpg     # Your profile photo (add this file)
└── README.md           # This file
```

## Features

- Clean, professional design suitable for academic portfolios
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling navigation
- Animated section transitions
- Organized publications list with DOI links
- Project showcase section
- Easy-to-update content structure

## Customization

### Colors

To change the color scheme, edit the CSS variables in `styles.css` (lines 2-23):

```css
:root {
    --primary-color: #2c5f7d;
    --dark-color: #1a3a4d;
    --accent-color: #5a9cbd;
    /* ... */
}
```

### Content

All content is in `index.html`:
- Update personal information in the hero section (lines 50-75)
- Update research interests (lines 80-92)
- Modify publications list (lines 100-200)
- Update projects (lines 210-235)

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website template is free to use and modify for personal academic purposes.

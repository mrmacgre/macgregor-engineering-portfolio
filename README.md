# MacGregor Engineering Portfolio

A modern, responsive engineering portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases projects, professional experience, and technical skills in an elegant and easy-to-navigate format.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy to Customize**: Modular structure makes it simple to add new projects and experiences
- **JSON Data Management**: All content is managed through a single `data.json` file
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
macgregor-engineering-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── data.json           # Content data (projects, experience, skills)
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Clone or Download
- Clone this repository to your local machine
- Or download the ZIP file and extract it

### 2. Customize Your Content
Edit the `data.json` file to include your information:

#### Projects Section
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project Name",
      "description": "Brief description of your project",
      "technologies": ["Technology1", "Technology2", "Technology3"],
      "githubUrl": "https://github.com/yourusername/project",
      "liveUrl": "https://your-project.com",
      "icon": "fas fa-code",
      "featured": true
    }
  ]
}
```

#### Experience Section
```json
{
  "experience": [
    {
      "id": 1,
      "title": "Your Job Title",
      "company": "Company Name",
      "date": "Duration (e.g., Summer 2023)",
      "description": "Description of your role and achievements",
      "type": "internship"
    }
  ]
}
```

#### Skills Section
```json
{
  "skills": {
    "programming": ["Python", "JavaScript", "Java"],
    "web": ["React", "Node.js", "HTML/CSS"],
    "databases": ["MongoDB", "PostgreSQL"],
    "tools": ["Git", "Docker", "AWS"]
  }
}
```

#### Contact Information
```json
{
  "contact": {
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "phone": "+1 (555) 123-4567"
  }
}
```

### 3. Update Personal Information
1. Replace "MacGregor" with your name in `index.html` (line 6 and navigation)
2. Update the hero section title and subtitle
3. Modify the about section with your personal information
4. Update contact links with your actual URLs

### 4. Add Your Projects
1. Open `data.json`
2. Replace the sample projects with your actual projects
3. Use appropriate Font Awesome icons for each project
4. Include GitHub URLs and live demo URLs where applicable

### 5. Add Your Experience
1. Update the experience section in `data.json`
2. Include internships, jobs, research positions, etc.
3. Use descriptive titles and detailed descriptions

## 🎨 Customization Options

### Colors
The main color scheme uses a blue gradient. To change colors, edit these CSS variables in `styles.css`:
- Primary blue: `#2563eb`
- Gradient colors: `#667eea` and `#764ba2`

### Fonts
The portfolio uses Inter font from Google Fonts. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Change the `font-family` in `styles.css`

### Layout
- Modify grid layouts in the CSS
- Adjust spacing and padding
- Change the timeline layout for experience section

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🚀 Deployment on GitHub Pages

### Method 1: Using GitHub Web Interface
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Commands
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git push -u origin main
```

## 🔧 Adding New Content

### Adding a New Project
1. Open `data.json`
2. Add a new project object to the `projects` array
3. Include all required fields: `id`, `title`, `description`, `technologies`, `githubUrl`, `liveUrl`, `icon`, `featured`
4. Save the file - changes will appear automatically

### Adding New Experience
1. Open `data.json`
2. Add a new experience object to the `experience` array
3. Include: `id`, `title`, `company`, `date`, `description`, `type`
4. Save the file

### Adding New Skills
1. Open `data.json`
2. Add skills to existing categories or create new categories in the `skills` object
3. Save the file

## 🎯 Best Practices

### Project Descriptions
- Keep descriptions concise but informative
- Highlight key achievements and technologies used
- Include quantifiable results when possible

### Experience Descriptions
- Use action verbs (developed, implemented, collaborated)
- Include specific technologies and tools used
- Mention team size and your role

### Skills Organization
- Group related skills together
- Use consistent naming conventions
- Include both technical and soft skills

## 🔍 SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images are in the correct directory
2. **Styling issues**: Verify CSS file is linked correctly in HTML
3. **JavaScript errors**: Check browser console for error messages
4. **GitHub Pages not updating**: Clear browser cache or wait a few minutes

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📞 Support

If you encounter any issues or need help customizing the portfolio:
1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Ensure all file paths are correct
4. Validate your JSON syntax

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- GitHub Pages for hosting

---

**Happy coding!** 🚀

Remember to regularly update your portfolio with new projects and experiences to keep it current and engaging for potential employers and collaborators.

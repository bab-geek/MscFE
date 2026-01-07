# MScFE Learning Portal - Web Interface

A beautiful, local web interface for your Master of Science in Financial Engineering learning journey.

## Features

- 📚 **Clean, readable interface** for course materials
- 🌙 **Dark/Light mode** toggle
- 📱 **Responsive design** for mobile and desktop
- 🧭 **Easy navigation** through courses, modules, and lessons
- ⚡ **Fast loading** of study guides and practice questions
- 📊 **Progress tracking** (coming soon)

## Quick Start

### Option 1: Python HTTP Server (Recommended)

```bash
# Navigate to project root
cd /Users/oluwatosingbenga/NODE/MscFE

# Start server (Python 3)
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000

### Option 2: Node.js Serve

```bash
# Install serve globally (if not already installed)
npm install -g serve

# Navigate to project root
cd /Users/oluwatosingbenga/NODE/MscFE

# Start server
serve -p 8000
```

Then open: http://localhost:8000

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Usage

1. **Open the interface**: Navigate to http://localhost:8000
2. **Browse courses**: Click on courses and modules in the sidebar
3. **Read lessons**: Click on any lesson to view study guides
4. **Practice**: Access practice questions from the sidebar or quick links
5. **Toggle theme**: Click the moon/sun icon to switch between dark and light modes

## File Structure

```
MscFE/
├── index.html                    # Main entry point
├── web-interface/
│   ├── styles.css               # Styling
│   ├── app.js                   # Application logic
│   └── README.md               # This file
└── 01-financial-markets/
    └── modules/
        └── credit-risk-and-financing/
            ├── lesson-01-study-guide.md
            ├── lesson-01-practice-questions.md
            ├── lesson-02-study-guide.md
            └── lesson-02-practice-questions.md
```

## Customization

### Adding New Courses

Edit `web-interface/app.js` and add to the `courseStructure` object:

```javascript
const courseStructure = {
    "01-financial-markets": { ... },
    "02-financial-data": {
        title: "Course 2: Financial Data",
        duration: "7 weeks",
        modules: { ... }
    }
};
```

### Styling

Modify `web-interface/styles.css` to customize:
- Colors (CSS variables in `:root`)
- Fonts
- Spacing
- Layout

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6 support

## Notes

- The interface requires a local web server to load markdown files (CORS restrictions)
- Markdown rendering is simplified - for full markdown support, consider integrating a library like `marked` or `markdown-it`
- Progress tracking is a placeholder - can be enhanced with localStorage

## Troubleshooting

**Files not loading?**
- Make sure you're running a local web server
- Check browser console for errors
- Verify file paths are correct

**Styling looks off?**
- Clear browser cache
- Check that `styles.css` is loading (Network tab)

**Navigation not working?**
- Check browser console for JavaScript errors
- Ensure `app.js` is loading correctly

## Future Enhancements

- [ ] Full markdown rendering with syntax highlighting
- [ ] Search functionality
- [ ] Progress tracking with localStorage
- [ ] Bookmarking/favorites
- [ ] Note-taking integration
- [ ] Export to PDF
- [ ] Mobile app version

---

**Enjoy your learning journey!** 🚀


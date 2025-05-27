# Modern Portfolio Website

# suroweb.github.io

A clean, responsive portfolio template for developers and designers showcasing work samples, skills, and contact information.

![Portfolio Preview](/assets/portfolio-preview-demo.png)

## Features

- **Clean, Minimal Design** - Focus on content with a modern aesthetic
- **Fully Responsive** - Looks great on all devices (mobile, tablet, desktop)
- **Interactive UI Elements** - Smooth animations and transitions
- **Project Filtering** - Filter projects by category
- **Skills Showcase** - Visual representation of technical skills
- **Contact Form** - With form validation and submission confirmation
- **Social Media Integration** - Easy links to professional profiles

## Technologies Used

- HTML5
- CSS3 (with CSS variables for easy customization)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Poppins)

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript for customization

### Installation

1. Download or clone the repository.
2. Navigate to the project folder.
3. Open `index.html` in your browser to view the website.

## Project Structure

portfolio_site/
├── index.html              # Main HTML structure
├── styles.css              # All styling
├── script.js               # Interactive functionality
└── assets/                 # Images and resources
    ├── weatherdashboard.png
    └── other project images...

## Customization

### Changing Colors

Modify the CSS variables at the top of `styles.css`:

```css
:root {
  --primary-color: #6c63ff;    /* Main accent color */
  --secondary-color: #f5f5f5;  /* Secondary background */
  --text-color: #333333;       /* Main text color */
  --light-text: #777777;       /* Secondary text color */
  /* ... other variables ... */
}
```

## Adding Projects

1. Locate the projects section in index.html
2. Add a new project card following this template:

```html
<article class="project-card" data-category="category-name">
    <div class="project-image">
        <img src="assets/your-project-image.png" alt="Description of your project" />
        <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">Code</a>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description text goes here.</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
            <span>Technology 3</span>
        </div>
    </div>
</article>
```
## Adding New Skills

1. Find the skills section in index.html
2. Add new skill tags following this pattern:

```html
<div class="skill-tag">Your Skill</div>
```

## Features in Detail

### Project Filtering

The portfolio includes a filtering system that allows visitors to filter projects by category. Each project needs a `data-category` attribute, and the corresponding filter buttons are automatically connected via JavaScript.

### Contact Form Handling

The contact form includes:

- Input validation
- A success modal that appears after submission
- Reset functionality after submission

Note: For actual form submission, you'll need to implement server-side processing or connect to a form service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for personal and commercial use under the [MIT License](LICENSE).

## Acknowledgements

- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspiration from modern portfolio design trends

---

Created with ❤️ as a demonstration portfolio template.
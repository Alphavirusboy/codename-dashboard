# Codename Dashboard

A modern sales dashboard I built from scratch using HTML, CSS, and JavaScript.

**[🔗 Live Demo](https://YOUR_USERNAME.github.io/codename-dashboard/)** | **[📂 GitHub Repo](https://github.com/YOUR_USERNAME/codename-dashboard)**

![Dashboard Preview](./dashboard.png)

## About This Project

I built this dashboard as part of a frontend assignment. The goal was to recreate a given design as pixel-perfect as possible while keeping the code clean and well-organized.

Spent quite a bit of time getting the spacing and colors just right - those small details really matter! The hardest part was probably getting the responsive layout to work smoothly across different screen sizes without breaking the design.

## What I Built

- **Sidebar Navigation** - Collapsible menu with nested items
- **Stats Cards** - Revenue, deals, win rates with real data visualization
- **Interactive Charts** - Used Chart.js for the bar charts and pie charts
- **Performance Bars** - Custom progress bars showing team performance
- **Platform Breakdown** - Visual breakdown of sales by platform (Dribbble, Instagram, etc.)
- **User Stats Table** - Sortable rows with badges and indicators
- **Mobile Menu** - Hamburger menu that slides in on smaller screens

## Tech Stack

Just vanilla web technologies - no frameworks:

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, custom properties (CSS variables)
- **JavaScript** - ES6+, Chart.js for graphs
- **Phosphor Icons** - For all the icons
- **Google Fonts** - Inter font family

## How I Organized the Code

\`\`\`
├── index.html          # Main page structure
├── css/
│   ├── styles.css      # Main styles + responsive
│   └── components.css  # Animations and effects
├── js/
│   └── main.js         # Charts + interactions
└── README.md
\`\`\`

I kept the CSS organized with variables at the top for colors, spacing, etc. Makes it easy to tweak the theme if needed.

## Responsive Design

Tested on:
- Desktop (1280px and above) ✓
- Tablet (768px - 1024px) ✓  
- Mobile (below 768px) ✓

On mobile, the sidebar becomes a slide-out menu with a hamburger button. Cards stack vertically and some elements hide to keep things clean.

## Running Locally

Just open \`index.html\` in your browser, or if you want a proper server:

\`\`\`bash
# Using Python
python -m http.server 8000

# Using Node
npx serve
\`\`\`

Then go to \`http://localhost:8000\`

## Things I Learned

- CSS Grid is amazing for dashboard layouts
- Chart.js customization takes some trial and error
- Getting pixel-perfect spacing requires a lot of back-and-forth
- CSS custom properties make theming so much easier


---

Made by Parth Patil

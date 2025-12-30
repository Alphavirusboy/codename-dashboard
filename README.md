# Codename Dashboard

A modern sales analytics dashboard I built to practice my frontend skills.

**[🔗 Live Demo](https://alphavirusboy.github.io/codename-dashboard/)** | **[📂 GitHub Repo](https://github.com/Alphavirusboy/codename-dashboard)**

![Dashboard Preview](./dashboard.png)

## About

Started this project to challenge myself with creating a complex dashboard layout. Took me a few evenings to get everything looking right, but I'm happy with how it turned out.

The trickiest part was definitely the responsive behavior - making sure everything looks good on mobile without losing functionality. Also spent way too much time tweaking the chart animations to feel smooth.

## Features

- **Clean Layout** - Sidebar navigation with a utility rail for quick actions
- **Revenue Cards** - Big numbers, comparison data, progress indicators
- **Performance Stats** - Cards showing top sales, deals, win rates
- **Interactive Charts** - Bar and pie charts using Chart.js
- **Platform Analytics** - Progress bars showing distribution across web/mobile/desktop
- **User Table** - Stats for each team member with sortable columns
- **Responsive** - Works on desktop, tablet, and mobile

## Tech Used

Kept it simple with vanilla web tech:

- HTML5 for structure
- CSS3 (Flexbox + Grid for layouts)
- JavaScript (ES6+)
- Chart.js for the graphs
- Phosphor Icons
- Inter font from Google Fonts

No build tools or frameworks - just wanted to focus on the fundamentals.

## Project Structure

```
├── index.html          # Main page
├── css/
│   ├── styles.css      # All the styles
│   └── components.css  # Extra component styles
├── js/
│   └── main.js         # Charts and interactions
└── dashboard.png       # Design reference
```

## Running It

Clone the repo and open `index.html` in your browser. That's it!

If you want a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve
```

Then visit `http://localhost:8000`

## Responsive Breakpoints

- **Desktop**: 1280px and up (full layout)
- **Tablet**: 768px - 1279px (adjusted spacing)
- **Mobile**: Below 768px (hamburger menu, stacked cards)

The sidebar collapses into a slide-out menu on mobile, and some less critical info gets hidden to keep things readable.

## What I Learned

Working on this taught me a lot about:
- Using CSS Grid effectively for complex layouts
- Chart.js customization (there's a lot you can tweak!)
- Making responsive designs that actually work, not just "look okay"
- Keeping vanilla JS organized without a framework

The spacing was probably the most time-consuming part - getting everything to feel balanced took a lot of adjusting.

## Future Ideas

Might add:
- Dark mode toggle
- More chart types
- Filters for the data
- Export functionality
- Better animations

For now though, it does what I wanted it to do.

---

**Parth Patil** • 2025

# Engineering Portfolio Template

A responsive, multi-page engineering portfolio template built with **HTML, CSS, and vanilla JavaScript**.

The template is designed for engineers, students, researchers, and technical professionals who want to present their work through **projects, experience, skills, technical visualizations, animations, and project videos**.

The design focuses on showing engineering work as systems and case studies rather than simply listing technologies.

---

## Preview

![Engineering Portfolio Template Preview](assets/readme/portfolio-preview.gif)

---

## Live Demo

[View the live portfolio]([https://million-9.github.io/portfolio/index.html])

---

## Features

* Responsive multi-page portfolio
* Dark engineering-inspired interface
* Animated homepage hero
* Engineering project showcase
* SVG-based technical animations
* Support for project videos
* Project case-study layouts
* Experience timeline
* Skills grouped by engineering domain
* Mobile navigation
* Reduced-motion accessibility support
* Keyboard-accessible navigation
* GitHub Pages compatible
* No frameworks or build tools required

---

## Pages

The portfolio is organized into several independent pages:

```text
index.html
profile.html
projects.html
experience.html
skills.html
contact.html
```

### Home

The landing page provides an overview of the portfolio and includes:

* introduction
* rotating engineering statements
* technical image slideshow
* navigation cards
* selected project previews
* animated project visuals

### Profile

A dedicated space for presenting your background, engineering direction, education, interests, or any other information you want visitors to understand about you.

### Projects

Projects are presented as engineering case studies.

A project can include:

```text
Context
What Was Developed
Results & Findings
Engineering Takeaway
Scope / Limitations
Tools
```

The project page supports different types of visual content including:

* images
* videos
* SVG diagrams
* CSS animations
* process visualizations
* system-flow animations

### Experience

A page for presenting professional, academic, research, internship, or project-based experience.

### Skills

Technical skills can be grouped by engineering domain rather than represented using arbitrary percentage bars.

### Contact

A simple page for linking visitors to your preferred professional contact channels.

---

# Project Structure

A typical project structure looks like this:

```text
portfolio/
│
├── index.html
├── profile.html
├── projects.html
├── experience.html
├── skills.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── home.css
│   │   ├── profile.css
│   │   ├── projects.css
│   │   ├── experience.css
│   │   ├── skills.css
│   │   ├── contact.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   ├── images/
│   │   └── ...
│   │
│   ├── videos/
│   │   └── ...
│   │
│   └── readme/
│       └── portfolio-preview.gif
│
├── README.md
└── LICENSE
```

The exact asset structure can be changed depending on your own images, videos, logos, and other media.

---

# Getting Started

## 1. Fork the Repository

Click the **Fork** button at the top of the GitHub repository.

This creates your own copy of the portfolio that you can modify independently.

You can also clone the repository locally:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Then enter the project directory:

```bash
cd YOUR-REPOSITORY
```

---

## 2. Run the Website Locally

The project uses plain HTML, CSS, and JavaScript.

There are:

```text
No frameworks
No package manager
No build step
No dependencies
```

You can open:

```text
index.html
```

directly in your browser.

For development, running a local server is recommended.

Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also use the **Live Server** extension in Visual Studio Code.

---

# Customizing the Portfolio

The template is intended to be modified.

Replace the existing content with information, projects, visuals, wording, links, and sections that represent **your own work and identity**.

You are free to:

* rewrite the text
* rename sections
* remove pages
* add pages
* change project layouts
* replace animations
* use photographs instead of diagrams
* use videos instead of images
* change the color scheme
* change typography
* change navigation
* add new technical areas
* remove components you do not need

The existing content should be treated as an **example of how the template can be structured**, not as content intended to be reused as your own.

---

# Navigation

The navigation is included separately inside each HTML page.

A typical navigation block looks like:

```html
<div class="nav-menu" id="site-menu">
  <a href="profile.html">Profile</a>
  <a href="projects.html">Projects</a>
  <a href="experience.html">Experience</a>
  <a href="skills.html">Skills</a>
  <a href="contact.html">Contact</a>
</div>
```

If you add, remove, or rename pages, update the navigation in each HTML file.

---

# Homepage Hero

The homepage includes a rotating statement.

Example:

```html
<strong
  class="phrase"
  data-phrases='[
    "manage energy.",
    "plan motion.",
    "respect constraints.",
    "fail safely.",
    "turn models into behavior."
  ]'
>
  manage energy.
</strong>
```

Replace these phrases with statements that represent your own work.

For example:

```html
data-phrases='[
  "design systems.",
  "build prototypes.",
  "analyze behavior.",
  "develop algorithms.",
  "validate performance."
]'
```

The rotation behavior is handled by:

```text
assets/js/main.js
```

---

# Homepage Slideshow

The homepage includes an image slideshow that can be used to represent your engineering or technical interests.

Images are stored inside:

```text
assets/images/
```

Replace the existing images with your own and update the corresponding `<img>` elements inside:

```text
index.html
```

Example:

```html
<figure class="showcase-slide" data-slide>

  <img
    src="assets/images/your-image.png"
    alt="Description of the image"
  />

  <figcaption>
    <span>01</span>
    <strong>YOUR TECHNICAL AREA</strong>
  </figcaption>

</figure>
```

---

# Adding Projects

Projects are located inside:

```text
projects.html
```

Each project uses an `<article>` with a unique ID.

Example:

```html
<article
  class="project section shell"
  id="your-project"
>

  <div class="project__visual-wrap">

    <!--
      Image
      Video
      SVG
      Animation
      or another visualization
    -->

  </div>


  <div class="project__content">

    <div class="project__topline">
      <span>PROJECT TYPE</span>
      <span>ORGANIZATION · YEAR</span>
    </div>


    <h2>
      Project Title
    </h2>


    <p class="project__lead">
      Short introduction to the engineering problem.
    </p>

  </div>

</article>
```

The project ID allows you to link directly to it:

```text
projects.html#your-project
```

---

# Project Case Study Structure

A useful engineering project structure is:

## Context

Explain the engineering problem and why it matters.

## What Was Developed

Explain what was designed, modeled, implemented, integrated, tested, or analyzed.

## Results & Findings

Describe what happened and what you learned from the behavior of the system.

Avoid inventing performance numbers purely for presentation.

## Engineering Takeaway

Explain the engineering lesson, trade-off, limitation, or design insight that came from the project.

## Scope / Limitations

Clarify what the project demonstrates and what it does not claim to demonstrate.

## Tools

List the relevant engineering tools, programming languages, software, methods, or hardware.

---

# Project Images

A normal project image can be added using:

```html
<img
  src="assets/images/project-image.png"
  alt="Description of the project"
/>
```

Store project images inside:

```text
assets/images/
```

---

# Project Videos

Videos can be placed inside:

```text
assets/videos/
```

Example:

```html
<video
  autoplay
  muted
  loop
  playsinline
  preload="auto"
>
  <source
    src="assets/videos/project-video.mp4"
    type="video/mp4"
  />
</video>
```

The combination:

```text
autoplay
muted
loop
playsinline
```

allows the video to behave like a looping project visualization without displaying standard video-player controls.

For browser compatibility, **H.264 MP4** is recommended.

---

# SVG Engineering Animations

The template supports lightweight technical animations using:

```text
HTML
SVG
CSS keyframes
```

This approach is useful when you want to visually communicate how a system behaves.

Possible applications include:

```text
Energy flow
Power electronics
Control systems
Robotics
Machine vision
Automation
Production systems
Charging systems
State machines
Sensor pipelines
Autonomous systems
Communication flows
```

A simplified SVG element might look like:

```html
<svg
  viewBox="0 0 560 300"
  xmlns="http://www.w3.org/2000/svg"
>

  <path
    class="animated-flow"
    d="M100 150 H400"
  />

</svg>
```

with CSS:

```css
.animated-flow {
  fill: none;
  stroke: var(--accent);
  stroke-width: 4;
  stroke-dasharray: 10 12;

  animation:
    flowAnimation
    0.8s
    linear
    infinite;
}

@keyframes flowAnimation {

  to {
    stroke-dashoffset: -44;
  }

}
```

This allows technical animations to run without requiring JavaScript animation libraries.

---

# Homepage Project Previews

Selected projects can also appear on the homepage.

A homepage project card should link to the corresponding detailed project:

```html
<a
  class="selected-card"
  href="projects.html#your-project"
>
```

You can use:

* a static image
* a looping video
* a simplified version of the project's SVG animation

for the project preview.

---

# Styling

The shared design system is primarily defined inside:

```text
assets/css/base.css
```

Page-specific styles are separated into:

```text
assets/css/home.css
assets/css/profile.css
assets/css/projects.css
assets/css/experience.css
assets/css/skills.css
assets/css/contact.css
```

Responsive behavior is handled through the page styles and:

```text
assets/css/responsive.css
```

---

# Changing the Accent Color

The main accent color is defined as a CSS variable.

Look for:

```css
--accent: #79f7c2;
```

You can replace it with any color that fits your portfolio.

Example:

```css
--accent: #7ec3ff;
```

or:

```css
--accent: #ffb86c;
```

When changing colors, make sure there is sufficient contrast between text, backgrounds, buttons, and interactive states.

---

# JavaScript

Interactive behavior is located inside:

```text
assets/js/main.js
```

It handles functionality such as:

* mobile navigation
* reveal-on-scroll behavior
* rotating hero text
* homepage slideshow controls
* automatic slideshow transitions
* keyboard navigation
* reduced-motion behavior

The project does not depend on external JavaScript frameworks.

---

# Responsive Design

The portfolio is designed to work across:

```text
Desktop
Laptop
Tablet
Mobile
```

When adding new content, test at different screen widths.

Pay particular attention to:

* long headings
* project animations
* SVG diagrams
* navigation
* project videos
* grid layouts

---

# Accessibility

The template includes several accessibility considerations:

* semantic HTML
* skip-to-content navigation
* keyboard-accessible controls
* visible focus states
* descriptive alternative text
* ARIA labels where appropriate
* reduced-motion support
* responsive navigation

Animations should include a reduced-motion alternative using:

```css
@media (prefers-reduced-motion: reduce) {

  .your-animation {
    animation: none;
  }

}
```

When replacing images, videos, or diagrams, update their accessibility descriptions as well.

---

# Deploying with GitHub Pages

The portfolio can be hosted for free using GitHub Pages.

## Personal GitHub Pages Website

Create a repository named:

```text
YOUR-USERNAME.github.io
```

Push the website files to the repository.

The website will be available at:

```text
https://YOUR-USERNAME.github.io/
```

---

## Project Repository Deployment

You can also deploy the website from a normal repository.

Open:

```text
Repository
→ Settings
→ Pages
```

Under **Build and deployment**, select:

```text
Deploy from a branch
```

Then choose:

```text
Branch: main
Folder: /root
```

Save the configuration.

GitHub Pages will provide the website URL after deployment.

---

# Before Publishing Your Version

Before deploying your portfolio, review the entire repository and replace anything that does not belong to your version.

This includes:

* text
* links
* images
* videos
* animations
* project information
* metadata
* page titles
* descriptions
* social links
* visual assets

The template is intentionally flexible.

You do **not** need to keep the same sections, projects, layout order, wording, or technical areas.

Use what is useful.

Remove what is not.

Build something that represents your own work.

---

# Design Philosophy

The goal of this template is to encourage technical portfolios that explain more than:

```text
"I know these tools."
```

Instead, a project should ideally communicate:

```text
What was the problem?

What did you build?

How did the system behave?

What constraints mattered?

What did you learn?
```

For engineering portfolios, the process and reasoning behind a system are often as important as the final result.

---

# Browser Support

The website uses standard modern HTML, CSS, SVG, and JavaScript.

It should work in current versions of:

* Chrome
* Edge
* Firefox
* Safari

Some SVG and CSS animations may render slightly differently between browsers.

---

# Contributing

Contributions are welcome.

If you find a problem or improve a reusable part of the template, you can:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

You can also open an issue if you find a bug or have an idea for improvement.

---

# License

This project is licensed under the **MIT License**.

You are free to:

* use the template
* modify it
* create your own portfolio from it
* distribute modified versions
* use it for personal or commercial projects

subject to the terms of the MIT License.

See the:

```text
LICENSE
```

file for the full license text.

---

# A Note for Template Users

The purpose of this repository is to provide a reusable **website structure and design system**.

Please customize the content so the final portfolio genuinely represents **your own work, experience, interests, and engineering identity**.

The best results usually come from treating the repository as a starting point rather than simply changing a name and publishing it unchanged.

Experiment with it.

Break sections apart.

Build new animations.

Replace the project layout.

Change the visual language.

Make it yours.

---

## Built With

```text
HTML5
CSS3
Vanilla JavaScript
Inline SVG
CSS Animations
```

No frameworks. No build tools. No external UI libraries.

---

## If You Use This Template

If this project helps you create your own portfolio, consider leaving a ⭐ on the repository.

Fork it, customize it, and build something that represents the engineer you are.

# Invertis University, Bareilly
## Department of Computer Science & Engineering
### HTML and CSS Introduction Lab (BCS352) — Lab Assignments (1 to 15)

---

## 👨‍🎓 Student Details
- **Student Name:** Harsh Narayan Singh
- **Roll Number / Student ID:** BCS2025367
- **Course:** B.Tech CSE - 3rd Semester
- **Subject:** HTML and CSS Introduction Lab (BCS352)
- **Institution:** Invertis University, Bareilly

---

## 📁 Repository & Project Overview

This repository contains the complete laboratory submissions for all 15 assignments of the **HTML and CSS Introduction Lab (BCS352)** curriculum. Every program includes the standard student identification comment header, complete working source code, and verified high-resolution browser/terminal screenshots.

### Master Navigation & Portal
- **Main Portal File:** [`Main.html`](./Main.html) & [`style.css`](./style.css)
- **Screenshots Directory:** [`screenshots/`](./screenshots)

---

## 📑 Index of Assignments

| No. | Assignment Title | Topics & Deliverables | Solution File(s) |
|---|---|---|---|
| **01** | Starting a Git Repository | `git init`, local identity, tracking `index.html`, commits, `git log` | [index.html](./assignment-01/index.html) |
| **02** | Pushing and Cloning a Repository | Bare repository `html-remote`, remote origin, push main, `git clone` | [Logs](./assignment-02/assignment-02-terminal.txt) |
| **03** | Your First HTML Page | Basic document structure, heading hierarchy, inline text formatting | [first.html](./assignment-03/first.html), [headings.html](./assignment-03/headings.html), [text-format.html](./assignment-03/text-format.html) |
| **04** | Divs, Attributes and a Small Fix | Division grouping, `data-*` custom attributes, debugging broken markup | [layout.html](./assignment-04/layout.html), [attributes.html](./assignment-04/attributes.html), [attendance-fixed.html](./assignment-04/attendance-fixed.html) |
| **05** | Links and Images | Hyperlinks, relative linking, image embedding with descriptive `alt` text | [home.html](./assignment-05/home.html), [portfolio.html](./assignment-05/portfolio.html), [portfolio-image.html](./assignment-05/portfolio-image.html) |
| **06** | Types of HTML Lists | Unordered lists (`ul`), nested ordered lists (`ol`), description lists (`dl`) | [shopping-list.html](./assignment-06/shopping-list.html), [canteen-menu.html](./assignment-06/canteen-menu.html), [faq.html](./assignment-06/faq.html) |
| **07** | About Me Page | HTML5 semantic elements (`header`, `nav`, `main`, `section`, `footer`), jump links | [about-me.html](./assignment-07/about-me.html) |
| **08** | Sign-Up Forms and Choices | Form controls, linked labels (`for`/`id`), radio groups, select dropdown, validation | [signup.html](./assignment-08/signup.html), [choices.html](./assignment-08/choices.html), [signup-required.html](./assignment-08/signup-required.html) |
| **09** | Tables with Headers and Footers | Table structure (`thead`, `tbody`, `tfoot`, `caption`), accessibility `scope` | [marks.html](./assignment-09/marks.html), [marks-average.html](./assignment-09/marks-average.html), [marks-accessible.html](./assignment-09/marks-accessible.html) |
| **10** | CSS Fundamentals | Inline, internal, and external CSS styling, selector types (element, class, ID) | [inline-internal.html](./assignment-10/inline-internal.html), [style.css](./assignment-10/style.css), [linked.html](./assignment-10/linked.html) |
| **11** | Units and CSS Variables | Sizing units (`px`, `%`, `rem`), CSS Custom Properties (`--var`, `var()`), design tokens | [units.html](./assignment-11/units.html), [variables.html](./assignment-11/variables.html), [tokens.css](./assignment-11/tokens.css), [tokens.html](./assignment-11/tokens.html) |
| **12** | Box Model, Cards and Scrolling | `content-box` vs `border-box`, rounded cards with shadows, `overflow: auto` | [box-model.html](./assignment-12/box-model.html), [card.html](./assignment-12/card.html), [scroll.html](./assignment-12/scroll.html) |
| **13** | Flexbox Layouts | Navigation bars (`display: flex`), centered pricing cards, `flex-wrap` | [nav-flex.html](./assignment-13/nav-flex.html), [centred-cards.html](./assignment-13/centred-cards.html), [wrapping-cards.html](./assignment-13/wrapping-cards.html) |
| **14** | CSS Grid Layouts | Equal columns with `fr` units, responsive auto-fill gallery, `grid-template-areas` | [grid-first.html](./assignment-14/grid-first.html), [gallery.html](./assignment-14/gallery.html), [dashboard-areas.html](./assignment-14/dashboard-areas.html) |
| **15** | Responsive Pages with Media Queries | Mobile-first breakpoints (`@media (min-width: 600px)`), fluid images, fluid text | [mobile-first.html](./assignment-15/mobile-first.html), [responsive-image.html](./assignment-15/responsive-image.html), [responsive-text.html](./assignment-15/responsive-text.html) |

---

## 📌 Detailed Solutions & Terminal Proofs

### Assignment 1: Starting a Git Repository
- **Aim:** Start a Git repository for your lab folder and save your work with commits.
- **Tasks & Execution:**
  1. `git init` inside `html-lab`, set local username and email (`git config --local user.name "Harsh Narayan Singh"` & `git config --local user.email "your-email@example.com"`).
  2. Create `index.html` with an `h1` heading, check `git status`, `git add`, and commit with message `"Add home page"`.
  3. Add an `h2` heading to `index.html`, commit with `"Add next meeting heading"`, and inspect log with `git log --oneline`.
- **Terminal Proofs:**
  - Task 1: `screenshots/asgn01-task1-terminal.png`
  - Task 2: `screenshots/asgn01-task2-terminal.png`
  - Task 3: `screenshots/asgn01-task3-terminal.png`

---

### Assignment 2: Pushing and Cloning a Repository
- **Aim:** Send your commits to a second repository on your computer and make a copy of it with clone.
- **Tasks & Execution:**
  1. Initialize bare repository `git init --bare ../html-remote` and attach it as origin (`git remote add origin ../html-remote`). Check remotes with `git remote -v`.
  2. Push commits to origin: `git push origin main`.
  3. Change directory to parent (`cd ..`), clone remote repo with `git clone html-remote html-copy`, enter `html-copy` and verify history with `git log --oneline`.
- **Terminal Proofs:**
  - Task 1: `screenshots/asgn02-task1-terminal.png`
  - Task 2: `screenshots/asgn02-task2-terminal.png`
  - Task 3: `screenshots/asgn02-task3-terminal.png`

---

### Assignment 3: Your First HTML Page
- **Aim:** Write a first HTML page with a title, headings and a paragraph, and format some text.
- **Tasks & Files:**
  - Task 1: `first.html` — Title "My First Page", heading: `<h1>Hello, I am Harsh Narayan Singh</h1>`.
  - Task 2: `headings.html` — Heading hierarchy with `<h1>`, `<h2>`, `<h3>`, and one `<p>`.
  - Task 3: `text-format.html` — Two paragraphs with `<strong>`, `<em>`, and line break `<br>`.
- **Screenshots:**
  - `screenshots/asgn03-task1-first.png`
  - `screenshots/asgn03-task2-headings.png`
  - `screenshots/asgn03-task3-text-format.png`

---

### Assignment 4: Divs, Attributes and a Small Fix
- **Aim:** Group parts of a page with div elements, add a data attribute, and fix errors in a broken page.
- **Tasks & Files:**
  - Task 1: `layout.html` — Three `<div>` containers with classes `header`, `main`, and `footer`.
  - Task 2: `attributes.html` — Div with id `profile` containing paragraph with `data-topic="hobbies"`.
  - Task 3: `attendance-fixed.html` — Corrected unclosed `<h1>`, fixed mismatched `<p>` tag, and updated student record to Harsh Narayan Singh: 92% and Rohan: 85%.
- **Screenshots:**
  - `screenshots/asgn04-task1-layout.png`
  - `screenshots/asgn04-task2-attributes.png`
  - `screenshots/asgn04-task3-attendance-fixed.png`

---

### Assignment 5: Links and Images
- **Aim:** Link two pages together and add a picture with alt text.
- **Tasks & Files:**
  - Task 1: `home.html` — Welcome heading with anchor link to `portfolio.html`.
  - Task 2: `portfolio.html` — Portfolio heading with backlink to `home.html`.
  - Task 3: `portfolio-image.html` — Image from `images/` directory with `width="200" height="200"` and descriptive `alt` text.
- **Screenshots:**
  - `screenshots/asgn05-task1-home.png`
  - `screenshots/asgn05-task2-portfolio.png`
  - `screenshots/asgn05-task3-portfolio-image.png`

---

### Assignment 6: Types of HTML Lists
- **Aim:** Make a bulleted list, a numbered list with a nested list, and a description list.
- **Tasks & Files:**
  - Task 1: `shopping-list.html` — Unordered list (`<ul>`) with Notebook, Pen, Bag.
  - Task 2: `canteen-menu.html` — Numbered list (`<ol>`) with Samosa and Sandwich, with nested list (Cheese, Vegetable) under Sandwich.
  - Task 3: `faq.html` — Description list (`<dl>`) with `<dt>` questions and `<dd>` answers for library policies.
- **Screenshots:**
  - `screenshots/asgn06-task1-shopping-list.png`
  - `screenshots/asgn06-task2-canteen-menu.png`
  - `screenshots/asgn06-task3-faq.png`

---

### Assignment 7: About Me Page
- **Aim:** Build a short About Me page with semantic tags, an about section and a contact link.
- **Tasks & Files:**
  - `about-me.html` — Semantic `<header>` with Harsh Narayan Singh's name and navigation links (#about, #contact), `<main>` with section #about, and a contact section without a published email address.
- **Screenshots:**
  - `screenshots/asgn07-about-me.png`

---

### Assignment 8: Sign-Up Forms and Choices
- **Aim:** Make a labelled form with text, email and password fields, choices and a submit button.
- **Tasks & Files:**
  - Task 1: `signup.html` — Labelled fullname, email, and password inputs with a local-only confirmation; no information is transmitted or stored.
  - Task 2: `choices.html` — Radio buttons for Gender (Female/Male) and `<select>` dropdown for BCA/B.Tech.
  - Task 3: `signup-required.html` — Fullname (with placeholder) and email marked with `required`, plus a local-only confirmation.
- **Screenshots:**
  - `screenshots/asgn08-task1-signup.png`
  - `screenshots/asgn08-task2-choices.png`
  - `screenshots/asgn08-task3-signup-required.png`

---

### Assignment 9: Tables with Headers and Footers
- **Aim:** Build a table with a caption, a header, rows and a footer, and add scope attributes.
- **Tasks & Files:**
  - Task 1: `marks.html` — Table with caption "Marks of Class A", `<thead>` with Name, Maths, Science; `<tbody>` with Harsh Narayan Singh (78, 85), Rohan (64, 70), Neha (91, 88).
  - Task 2: `marks-average.html` — Harsh Narayan Singh and Rohan rows with `<tfoot>` row "Class average" (71, 77.5).
  - Task 3: `marks-accessible.html` — Accessible table with `scope="col"` on table header cells and `scope="row"` on student name cells.
- **Screenshots:**
  - `screenshots/asgn09-task1-marks.png`
  - `screenshots/asgn09-task2-marks-average.png`
  - `screenshots/asgn09-task3-marks-accessible.png`

---

### Assignment 10: CSS Fundamentals
- **Aim:** Apply CSS in three ways (inline, internal and linked) and use selectors and text styles.
- **Tasks & Files:**
  - Task 1: `inline-internal.html` — Internal style block (`h1` navy, `.highlight` yellow) and inline red text style.
  - Task 2: `style.css` — Rules for `h1` (navy), `.note` (italic), `#title` (underline), and `p` (18px, grey).
  - Task 3: `linked.html` — External stylesheet linkage targeting `#title` and `.note`.
- **Screenshots:**
  - `screenshots/asgn10-task1-inline-internal.png`
  - `screenshots/asgn10-task3-linked.png`

---

### Assignment 11: Units and CSS Variables
- **Aim:** Use CSS units and store colours and spacing in variables.
- **Tasks & Files:**
  - Task 1: `units.html` — 200px box, 50% box, and 1.5rem paragraph font size.
  - Task 2: `variables.html` — `:root` custom properties (`--main-color`, `--accent-color`, `--page-padding`) consumed with `var()`.
  - Task 3: `tokens.css` & `tokens.html` — Design tokens for primary color, accent color, heading size (2rem), and spacing (16px).
- **Screenshots:**
  - `screenshots/asgn11-task1-units.png`
  - `screenshots/asgn11-task2-variables.png`
  - `screenshots/asgn11-task3-tokens.png`

---

### Assignment 12: Box Model, Cards and Scrolling
- **Aim:** Compare the box sizing types, style a card and make a box scroll.
- **Tasks & Files:**
  - Task 1: `box-model.html` — Visual comparison between `content-box` (renders 250px total) and `border-box` (renders 200px total).
  - Task 2: `card.html` — Styled card with `border-radius: 12px`, 2px border, padding, and background color.
  - Task 3: `scroll.html` — Fixed height container (`120px`) with `overflow: auto` containing Line 1 to Line 5.
- **Screenshots:**
  - `screenshots/asgn12-task1-box-model.png`
  - `screenshots/asgn12-task2-card.png`
  - `screenshots/asgn12-task3-scroll.png`

---

### Assignment 13: Flexbox Layouts
- **Aim:** Lay out a navigation bar, centred cards and cards that wrap, using Flexbox.
- **Tasks & Files:**
  - Task 1: `nav-flex.html` — Dark horizontal navigation bar with white links using `display: flex`.
  - Task 2: `centred-cards.html` — Centered pricing cards (Starter, Standard, Premium) using `justify-content` and `align-items`.
  - Task 3: `wrapping-cards.html` — Stationery shop catalog cards that wrap smoothly using `flex-wrap: wrap`.
- **Screenshots:**
  - `screenshots/asgn13-task1-nav-flex.png`
  - `screenshots/asgn13-task2-centred-cards.png`
  - `screenshots/asgn13-task3-wrapping-cards.png`

---

### Assignment 14: CSS Grid Layouts
- **Aim:** Make a grid with equal columns, a responsive gallery and a layout with named areas.
- **Tasks & Files:**
  - Task 1: `grid-first.html` — Grid of six boxes in 3 equal columns (`1fr 1fr 1fr`) with `12px` gap.
  - Task 2: `gallery.html` — Fluid photo gallery using `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))`.
  - Task 3: `dashboard-areas.html` — Two column dashboard layout (200px and 1fr) with named template areas for header, sidebar, main, and footer.
- **Screenshots:**
  - `screenshots/asgn14-task1-grid-first.png`
  - `screenshots/asgn14-task2-gallery.png`
  - `screenshots/asgn14-task3-dashboard-areas.png`

---

### Assignment 15: Responsive Pages with Media Queries
- **Aim:** Use a media query to change a layout, make a picture scale with its box, and set text sizes with rem units.
- **Tasks & Files:**
  - Task 1: `mobile-first.html` — Mobile stacked cards transforming to side-by-side flex layout at `@media (min-width: 600px)`.
  - Task 2: `responsive-image.html` — Fluid scaling picture using `max-width: 100%; height: auto;`.
  - Task 3: `responsive-text.html` — Heading font size changing from `1.5rem` on mobile to `2.5rem` on screens 600px and wider.
- **Screenshots:**
  - `screenshots/asgn15-task1-mobile.png` & `screenshots/asgn15-task1-desktop.png`
  - `screenshots/asgn15-task2-responsive-image.png`
  - `screenshots/asgn15-task3-mobile.png` & `screenshots/asgn15-task3-desktop.png`

---

## 🚀 How to Run and View the Solutions

1. Open any HTML file directly in any modern browser (Google Chrome, Microsoft Edge, Firefox, Safari).
2. To launch the interactive lab portal with quick links to all 15 assignments:
   - Double-click `Main.html` in the project root directory.
3. To view screenshots:
   - Browse the `screenshots/` directory where each task output has been saved in high resolution.

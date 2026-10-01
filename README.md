<div align="center">

# ⚖️ BMI Visualizer

### An interactive way to explore your measurements.

A browser-based BMI calculator with animated body silhouettes, a colorful BMI scale, and measurement-based insights — built with HTML, CSS, and JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-54f5d0?style=for-the-badge)

</div>

---

## 📸 Preview

<!-- Replace YOUR_PREVIEW_IMAGE_URL with the direct link to your screenshot. -->
<p align="center">
  <img
    src="https://i.postimg.cc/XJgjdJLq/photo-2026-09-27-19-07-10.jpg"
    alt="BMI Visualizer Preview"
    width="800"
  />
</p>

## ✨ Features

- ⚖️ Calculate BMI from height and weight
- 🎨 Display results with category-specific colors and a BMI scale marker
- 🧍 Generate an animated SVG body silhouette based on BMI and the selected gender
- 📏 Show a height ruler and measurement guide beside the body model
- 📊 View height, weight, and BMI category in a compact stats panel
- 💡 Explore a reference weight range and weight comparison
- 🥗 Read category-based food, activity, and health suggestions
- ✅ Validate measurements and display helpful input errors
- ⌨️ Calculate with the button or press Enter in either input
- 📱 Responsive dashboard layout
- 💻 Run directly in the browser without installing dependencies

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Dashboard structure and measurement inputs |
| CSS3 | Styling, responsive layouts, transitions, and animations |
| JavaScript | BMI calculation, validation, and interface updates |
| SVG | Dynamically generated body silhouettes |
| Web Animations API | Body reveal animation |
| Google Fonts | Inter typeface |

No framework, build step, or backend is required.

## 📂 Project Structure

```text
BMI/
├── BMI/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DonyaAdu/BMI.git
```

### 2. Navigate to the application folder

```bash
cd BMI/BMI
```

### 3. Open the application

Open `index.html` in your browser, or use a local development server such as VS Code Live Server.

## 🧍 How It Works

1. Select **Male** or **Female** for the body silhouette.
2. Enter your height in **centimeters** and weight in **kilograms**.
3. Click **Generate My Body**, or press **Enter** in either input.
4. View your BMI value, category, and position on the scale.
5. Explore the animated silhouette and the **Your Body Insights** section.
6. Change your measurements and calculate again to update the results.

Accepted input ranges:

| Measurement | Range |
| --- | --- |
| Height | 100–220 cm |
| Weight | 25–300 kg |

The selected gender changes the silhouette's proportions; the BMI formula stays the same.

## 🧮 BMI Calculation

The application converts height from centimeters to meters, then calculates:

```text
BMI = weight (kg) / height (m)²
```

For example, **70 kg** and **175 cm** produce a displayed BMI of **22.9**.

The app uses these category thresholds:

| BMI | Category | Result Color |
| --- | --- | --- |
| Below 18.5 | Underweight | 🔵 Blue |
| 18.5 to below 25 | Normal Weight | 🟢 Mint |
| 25 to below 30 | Overweight | 🟡 Yellow |
| 30 and above | Obesity | 🌸 Pink |

The result is displayed to one decimal place; category selection uses the unrounded value.

## 💡 Body Insights

After each calculation, the dashboard displays:

- **Reference Weight Range** — calculated from height using BMI values of 18.5 and 25 as bounds
- **Weight Analysis** — whether the entered weight falls within, below, or above that range
- **Activity Cards** — general weekly activity and strength-training information
- **Category-Based Suggestions** — food, exercise, and health text selected from predefined messages

The silhouette is an illustration, not an exact anatomical model. The app uses adult BMI reference values and does not provide a medical diagnosis.

## 🎨 Customization

Make the project your own by editing:

| File | What to Customize |
| --- | --- |
| `BMI/style.css` | Colors, typography, spacing, dashboard layout, and responsive styles |
| `BMI/script.js` | Category colors, silhouette proportions, animations, and insight messages |
| `BMI/index.html` | Labels, interface text, and dashboard sections |

## 🌐 Browser Compatibility

Use a modern browser with JavaScript, SVG, and Web Animations API support. The application does not request camera access or require an account.

## 💡 Future Improvements

Ideas for future versions:

- 🌍 Support additional languages
- 📐 Add imperial units alongside centimeters and kilograms
- 💾 Save measurement history locally
- 📈 Visualize BMI changes over time
- 🖼️ Export the result as an image
- 🌓 Add a light theme
- ♿ Improve keyboard navigation and screen reader support

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.
2. Create a branch for your change.
3. Make and check your updates.
4. Commit your changes.
5. Open a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/DonyaAdu">DonyaAdu</a>
  <br />
  An interactive BMI experience, one measurement at a time.
</p>

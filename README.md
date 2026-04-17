# 📊 Sales Dashboard (React + Tailwind)

A responsive and modern dashboard UI built using **React, Tailwind CSS, and Recharts**, based on the provided Figma design.

---

## 🚀 Project Setup

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd react-app-with-tailwind
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

### 4. App will run at:

```
http://localhost:5173
```

---

## ✨ Features Implemented

### 📌 UI & Layout

* Sidebar with navigation and active states
* Header with search, language selector, notifications, and user profile
* Clean and structured dashboard layout using Tailwind CSS

### 📊 Charts (Recharts)

* Visitor Insights (Line Chart)
* Total Revenue (Bar Chart)
* Customer Satisfaction (Line Chart)
* Target vs Reality (Bar Chart)
* Volume vs Service Level (Stacked Bar Chart with custom legend)

### 🌍 Map

* Lightweight world map visualization using **react-svg-worldmap**

### 📋 Table (Top Products)

* Data fetched from external API (**JSONPlaceholder**)
* Search (Name & Email)
* Sorting (Ascending/Descending)
* Filter (City)
* Infinite scroll (load more rows)
* Reset functionality

### 🔍 Search & Filters

* Dropdown-based search UI
* Click-outside-to-close behavior
* State handled using React Hooks

---

## ⚙️ Technical Decisions

* Used **React 19** as the base framework
* Used **Tailwind CSS** for fast and consistent UI styling
* Chose **Recharts** for flexibility and lightweight chart implementation
* Avoided heavy libraries (like Ant Design / D3) to maintain performance and control over UI
* Used a simple map library for lightweight visualization
* Created reusable components like `ChartCard` for consistency

---

## 🧠 Assumptions & Decisions

* Table data is fetched from a mock API (**JSONPlaceholder**)
* Chart data is static and used for UI representation
* Map is non-interactive and used only for visualization
* Focus was on UI accuracy and component reusability rather than backend integration

---

## 📁 Folder Structure

```
src/
 ├── assets/
 ├── components/
 │   ├── charts/
 │   │   ├── CustomerSatisfactionChart.jsx
 │   │   ├── TargetVsRealityChart.jsx
 │   │   ├── TotalRevenueChart.jsx
 │   │   ├── VisitorChart.jsx
 │   │   ├── VolumeServiceChart.jsx
 │   │   ├── WorldMap.jsx
 │   ├── ChartCard.jsx
 │   ├── Header.jsx
 │   ├── Sidebar.jsx
 │   ├── StatCard.jsx
 │   ├── UserTable.jsx
 ├── pages/
 │   ├── Dashboard.jsx
 ├── services/
 │   ├── api.js
 ├── App.css
 ├── App.jsx
 ├── index.css
 ├── main.jsx
```

---

## 🚀 Future Improvements

* Add real API integration for charts
* Improve responsiveness (mobile & tablet)
* Add animations and transitions
* Enhance accessibility

---

## 🙌 Conclusion

This project demonstrates a clean and scalable approach to building a modern dashboard UI while closely following the provided Figma design.

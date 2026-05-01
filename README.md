# 🎓 College Finder & Comparison Platform

A full-stack web application that helps students **search, filter, and compare colleges** based on key decision metrics like fees, ratings, and placements.

---

## 🚀 Live Demo

* 🌐 Frontend: *Add your Vercel link here*
* ⚙️ Backend API: *Add your Render link here*

---

## 📌 Features

### 🔍 College Search

* Search colleges by name
* Fast and responsive UI

### 🎯 Filters (Key Requirement)

* Filter by **location**
* Filter by **fees range**

### 📊 Compare Colleges (Core Feature)

* Select up to 3 colleges
* View side-by-side comparison
* Compare:

  * Fees
  * Rating
  * Placement %

### 💾 Persistent Selection

* Uses `localStorage` to retain selected colleges

### 🎨 Modern UI

* Built with Tailwind CSS
* Responsive and clean design

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL (Supabase)

### Deployment

* Frontend → Vercel
* Backend → Render

---

## 📂 Project Structure

```
college_platform/
 ├── frontend/   # Next.js app
 └── backend/    # Express API
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/college-platform.git
cd college-platform
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Get Colleges

```
GET /api/colleges
```

### With Filters

```
GET /api/colleges?search=iit&location=delhi&minFees=100000&maxFees=300000
```

---

## 🎯 Key Highlights

* Full-stack implementation (frontend + backend + DB)
* Real-world filtering & comparison logic
* Clean UI with responsive design
* REST API integration
* Deployment-ready architecture

---

## ⚠️ Limitations

* No authentication system
* Data is static (manually inserted)
* No pagination implemented

---

## 🚀 Future Improvements

* Add authentication (login/signup)
* Add pagination / infinite scroll
* Add favorites / wishlist feature
* Improve filters (sliders, dropdowns)
* AI-based college recommendation

---

## 👨‍💻 Author

**Soumyajit Dutta**

---

## ⭐ If you like this project

Give it a star on GitHub ⭐

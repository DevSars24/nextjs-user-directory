 📘 **Next.js User Directory (Next.js + TypeScript + Tailwind CSS)**

A clean, modern, and beginner-friendly **User Directory App** built with:

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **JSONPlaceholder REST API** (Real API)

This project demonstrates:

* Routing & Dynamic Routes (`/users/[id]`)
* Server-Side Data Fetching (No useEffect!)
* Component-based architecture
* Professional Dark UI
* API integration with external JSON REST API

Perfect for learning how real-world Next.js apps work.

---

## 🚀 **Features**

✔ Dark modern UI (GitHub-style)
✔ Home page
✔ Users list page
✔ User detail page with dynamic routing
✔ Real API fetching from **JSONPlaceholder**
✔ TypeScript–based types & interfaces
✔ Next.js App Router best practices
✔ Clean folder structure
✔ Fast and responsive

---

## 🌐 **API Used**

This project uses the **JSONPlaceholder Users API**, a free REST API for testing:

### **List of Users**

```
https://jsonplaceholder.typicode.com/users
```

### **Single User by ID**

```
https://jsonplaceholder.typicode.com/users/{id}
```

Example:

```
/users/1
```

---

## 📂 **Project Structure**

```
my-app/
 ├── app/
 │   ├── page.tsx                 → Home page
 │   ├── layout.tsx               → Global layout (Dark theme)
 │   ├── components/
 │   │     └── Navbar.tsx         → Navigation bar
 │   └── users/
 │         ├── page.tsx           → Users list (API fetch)
 │         └── [id]/
 │               └── page.tsx     → Dynamic detail page (API fetch)
 ├── public/
 ├── tsconfig.json
 ├── tailwind.config.js
 ├── package.json
 └── README.md
```

---

## 🛠️ **Tech Stack**

* ⚡ **Next.js 16** (App Router + Turbopack)
* ⚛️ **React**
* 🧩 **TypeScript**
* 🎨 **Tailwind CSS**
* 🌐 **JSONPlaceholder API**

---

## 📦 **Installation**

```bash
git clone <your-repo-link>
cd my-app
npm install
npm run dev
```

Now open:

👉 [http://localhost:3000](http://localhost:3000)

---

## 🎯 **Pages Overview**

### 🏠 **Home Page**

A clean introduction with description.

### 👥 **Users Page**

Fetches users from:

```
https://jsonplaceholder.typicode.com/users
```

and displays them in dark modern cards.

### 🧑‍🚀 **User Detail Page (`/users/[id]`)**

Dynamic route that fetches data for a specific user:

```
https://jsonplaceholder.typicode.com/users/1
```

Shows:

* Name
* Email
* Phone
* Website

All generated from **real API data**.

---

## 💡 **Why This Project Is Useful?**

This project teaches you:

* Server components
* How to fetch real API data
* Dynamic routing
* How to style using Tailwind
* Understanding Next.js App Router deeply
* How modern web apps fetch & display data

Perfect for beginners AND a great addition to your GitHub.

---

## 📤 **Deployment**

Deploy easily using **Vercel**:

```bash
npm install -g vercel
vercel
```

---

## 👨‍💻 **Author**

**Saurabh Singh Rajput**
2nd Year – IIIT Bhagalpur
Learning MERN • Next.js • TypeScript
Building real projects consistently ⚡




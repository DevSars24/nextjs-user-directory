# 📘 **User Directory App (Next.js + TypeScript + Tailwind CSS)**

A simple and beginner-friendly project built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.
This project displays a list of users and allows you to view individual user details using **dynamic routing**.

The purpose of this project is to learn:

* Next.js App Router structure
* Routing & dynamic routes (`/users/[id]`)
* Working with components
* Styling with Tailwind CSS
* Basic server-side data fetching
* Clean dark UI

---

## 🚀 **Features**

✔ Dark & modern UI
✔ Home page
✔ Users list page
✔ Dynamic user details page
✔ Fake user data (no external API needed)
✔ TypeScript support
✔ Component-based layout
✔ Fully responsive

---

## 📂 **Project Structure**

```
my-app/
 ├── app/
 │   ├── page.tsx
 │   ├── layout.tsx
 │   ├── components/
 │   │     └── Navbar.tsx
 │   └── users/
 │         ├── page.tsx
 │         └── [id]/
 │               └── page.tsx
 ├── public/
 ├── tsconfig.json
 ├── tailwind.config.js
 ├── package.json
 └── README.md
```

---

## 🛠️ **Tech Stack**

* **Next.js 16 (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Turbopack** (Next.js dev bundler)

---

## 📦 **Installation**

```bash
git clone <your-repo-link>
cd my-app
npm install
npm run dev
```

Open in browser:

👉 [http://localhost:3000](http://localhost:3000)

---

## 🎯 **How It Works**

### **1️⃣ Home Page**

A simple landing page introducing the project.

### **2️⃣ Users List Page**

Displays a list of fake users:

```ts
const fakeUsers = [
  { id: 1, name: "Saurabh Singh", email: "saurabh@example.com" },
  { id: 2, name: "Rohit Negi", email: "rohit@example.com" },
  { id: 3, name: "Tech Warrior", email: "warrior@example.com" },
];
```

### **3️⃣ User Detail Page**

Dynamic routing:

```
/users/1  
/users/2  
/users/3  
```

Each route shows user info based on ID.

---

## 💡 **Why This Project?**

This mini-app is perfect for beginners who want to understand:

* How Next.js routing works
* How to structure files using App Router
* How server components work
* How to create a clean UI
* How TypeScript is used in components

---

## 📤 **Deployment**

Deploy easily on **Vercel**:

```bash
vercel
```

---

## 👨‍💻 **Author**

**Saurabh Singh Rajput**
2nd Year – IIIT Bhagalpur
Learning MERN, Next.js, and TypeScript ⚡



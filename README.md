# 🎟️ TickeTrek - Role-Based Complaint Management System

## 🚀 Overview
**TickeTrek** is a web-based **Support Ticketing System** designed to streamline complaint management. It enables **customers** to submit complaints and **admins** to efficiently track, respond, and resolve them. The system ensures **role-based access control**, **secure authentication**, and full **CRUD operations** for ticket handling.

## 🛠 Tech Stack
### 🌐 Frontend
- **React.js** - Component-based UI
- **Vite** - Fast build tool
- **Tailwind CSS** - Modern styling framework
- **React Router** - Navigation and routing
- **Axios** - API calls & data fetching

### 🖥 Backend
- **Node.js & Express.js** - REST API
- **MySQL & Prisma ORM** - Database & Query management
- **Firebase Auth** - Secure authentication with JWT

### 🎨 UI Framework
- **Shopify Polaris** *(or Tailwind components)* for a sleek UI

## 📌 Features
### 🔹 Authentication & Role-Based Access
- Firebase **email/password authentication**
- Role-based access (**Admin & Customer**)

### 🔹 Customer Features
✅ Submit new **complaint tickets**  
✅ View & delete their own **tickets**  
✅ Automatic **assignment to an Admin**  

### 🔹 Admin Features
✅ View **all submitted tickets**  
✅ Respond to **customer complaints**  
✅ Update ticket status (**Open, Resolved, Closed**)  
✅ **Manage customer requests** efficiently  

### 🔹 Additional Features
🔹 Secure **JWT authentication**  
🔹 **Role-based dashboards** for better user experience  
🔹 **Search & Filter** tickets *(Bonus Feature)*  
🔹 **Real-time updates** *(Bonus Feature)*  

---

## 🌍 Live Links
🔗 **Frontend:** [TickeTrek Live](https://ticketrek.vercel.app/)  
🔗 **Backend API:** [TickeTrek Server](https://ticketrek-server.vercel.app)  
🔗 **GitHub Repository:** [TickeTrek Repo](https://github.com/gaznafis007/ticketrek)  

---

## 🎯 Installation & Setup
### 🛠 1️⃣ Clone the Repository
```bash
# Clone the project
git clone https://github.com/gaznafis007/ticketrek.git
cd ticketrek
```

### 📦 2️⃣ Install Dependencies
#### **Frontend**
```bash
cd ticketrek-client
npm install
```
#### **Backend**
```bash
cd ticketrek-server
npm install
```

### ⚙️ 3️⃣ Configure Environment Variables
Create a `.env` file in both **frontend** and **backend** directories.

#### **Backend (`ticketrek-server/.env`)**
```
PORT=5000
DATABASE_URL=mysql://user:password@localhost:3306/ticketrek_db
JWT_SECRET=your_jwt_secret
FIREBASE_ADMIN_SDK=your_firebase_config
```

#### **Frontend (`ticketrek-client/.env`)**
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
```

### 🚀 4️⃣ Run the Application
#### **Start Backend**
```bash
cd ticketrek-server
npm start
```
#### **Start Frontend**
```bash
cd ticketrek-client
npm start
```

---

## 🚢 Deployment
- **Frontend:** Deployed on **Vercel**  
- **Backend:** Deployed on **Vercel/Railway/AWS**  

---

## 🤝 Contributing
We welcome contributions! If you'd like to improve TickeTrek, feel free to:
- Submit an **issue**
- Open a **pull request**
- Suggest **enhancements & features** 🎉

---

## 📜 License
This project is licensed under the **MIT License**.

---

### 🎯 Made with ❤️ by [Your Name/Team]


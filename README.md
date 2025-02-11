# TickeTrek - Role-Based Complaint Management System

## 🚀 Overview
TickeTrek is a web-based **Support Ticketing System** that allows customers to submit complaints and admins to manage and resolve them efficiently. The system ensures **role-based access control**, **secure authentication**, and **CRUD operations** for ticket management.

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express.js, MySQL, Prisma ORM
- **Authentication:** Firebase Auth (JWT-based authentication)
- **UI Framework:** Shopify Polaris (or Tailwind CSS components)

## 📌 Features
### 🔹 Authentication & Role Management
- Firebase authentication (Email/Password Login)
- Role-based access (Admin & Customer)

### 🔹 Customer Features
- Submit new complaint tickets
- View & delete their own tickets
- Automatic assignment to an Admin

### 🔹 Admin Features
- View all submitted tickets
- Respond to tickets with messages
- Update ticket status (**Open, Resolved, Closed**)
- Manage customer complaints via the dashboard

### 🔹 Additional Features
- Secure authentication with JWT
- Role-based dashboard views
- Search & Filter tickets (Bonus)
- Real-time updates (Bonus)

## 🎯 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/gaznafis007/ticketrek.git
cd ticketrek
```

### 2️⃣ Install Dependencies
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

### 3️⃣ Configure Environment Variables
Create a `.env` file in both `frontend` and `backend` folders.
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

### 4️⃣ Run the Application
#### **Start Backend**
```bash
cd backend
npm start
```
#### **Start Frontend**
```bash
cd frontend
npm start
```

## 🔥 Deployment
- **Frontend:** Deploy on **Vercel/Netlify**
- **Backend:** Deploy on **Railway/Vercel/AWS**

## 📜 License
This project is licensed under the MIT License.

## 📩 Contributing
Feel free to submit issues or pull requests to improve TickeTrek! 🎉


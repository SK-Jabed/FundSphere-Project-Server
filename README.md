<!-- # Crowdcube Server-Side 🚀

## 📄 Project Overview
This repository contains the server-side code for **Crowdcube**, a modern crowdfunding platform. The server manages the backend logic, database interactions, and API endpoints for the application. Built with Node.js and Express.js, it ensures secure and efficient communication between the client and the database.

---

## 🌟 Features
- RESTful API with CRUD operations for campaigns and donations.
- Secure data storage and retrieval using MongoDB.
- Protected routes for authorized access to sensitive operations.
- Data validation and error handling for seamless operations.
- Sorting and filtering capabilities for campaign management.

---

## 🛠️ Technologies Used
- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase (token verification)
- **Hosting**: Vercel

---

## 📄 API Endpoints
- **GET /api/campaigns**: Retrieve all campaigns.
- **POST /api/campaigns**: Add a new campaign.
- **PUT /api/campaigns/:id**: Update a campaign.
- **DELETE /api/campaigns/:id**: Delete a campaign.
- **POST /api/donate**: Add a donation.

---

## 🔧 Setup Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/crowdcube-server.git -->



---
 

```markdown
# FundSphere Backend

A robust and scalable server for **FundSphere**, a crowdfunding application enabling efficient campaign management and donations.

---

## Key Functionalities

1. **Campaign Handling**  
   - CRUD operations for campaigns.  
   - Filter campaigns based on deadlines.  

2. **User Operations**  
   - User creation and updates.  
   - Fetch campaigns or donations specific to users.  

3. **Donation Services**  
   - Record and fetch user donations efficiently.  

---

## Prerequisites

Ensure the following are installed on your system:  

- Node.js (v16 or later)  
- MongoDB (Cloud or Local)  
- npm (Node Package Manager)  

---

## API Overview

### **Campaign APIs**
- `GET /campaigns` - Fetch all campaigns.  
- `GET /runningCampaigns` - Fetch campaigns with future deadlines.  
- `POST /campaigns` - Add a new campaign.  
- `PATCH /campaigns/:id` - Update campaign details.  
- `DELETE /campaigns/:id` - Delete a campaign.  

### **User APIs**
- `POST /users` - Create a new user.  
- `PATCH /users` - Update user data.  
- `GET /users` - Fetch all users.  

### **Donation APIs**
- `POST /donations` - Record a donation.  
- `GET /myDonations` - Fetch donations by user email.  

---

## How to Start

1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/fundsphere-server.git
   cd fundsphere-server

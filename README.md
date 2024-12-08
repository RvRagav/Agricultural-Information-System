
# **AGROW - Agricultural Information System**

## **Overview**
AGROW is an innovative platform designed to empower farmers by providing real-time tools and information essential for modern agriculture. It integrates weather updates, market prices, expert advice, and government schemes into a single, user-friendly system to simplify decision-making and improve productivity in the agricultural sector.

---

## **Features**
- **Weather Updates**: Accurate and timely weather forecasts to help farmers plan their activities.
- **Market Price Updates**: Real-time commodity prices to make informed selling decisions.
- **Expert Advice**: Access to agricultural experts for queries and best practices.
- **Government Schemes**: Information about relevant schemes and subsidies for farmers.

---

## **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript, React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Visualization**: NetAnim for network simulations (if applicable to the system's communication model)

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/RvRagav/Agricultural-Information-System.git
   cd Agricultural-Information-System
   ```
2. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```
3. Install dependencies for the frontend:
   ```bash
   cd ../client
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the `server` directory and add:
     ```plaintext
     MONGO_URI=your_mongodb_connection_string
     PORT=your_server_port
     ```
5. Start the backend server:
   ```bash
   cd ../server
   npm run dev
   ```
6. Start the frontend development server:
   ```bash
   cd ../client
   npm start
   ```

---

## **Usage**
1. Navigate to the application in your web browser: `http://localhost:<3000>`.
2. Sign up or log in as a farmer to access features.
3. Explore real-time weather updates, market prices, and more from the dashboard.

---

## **Contributing**
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your changes and create a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For inquiries or support, please contact:  
**Email**: ragavanr738@gmail.com  
**GitHub**: [RvRagav](https://github.com/RvRagav)

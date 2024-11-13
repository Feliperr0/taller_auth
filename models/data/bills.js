import "dotenv/config.js"
import '../../config/database.js'
import mongoose from 'mongoose';

import Bill from "../Bill.js";

let bills = [
    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")

    },
    {
        description: "Medical Bill",
        amount: 75.80,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Travel Expense",
        amount: 220.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Entertainment",
        amount: 50.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Loan Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Fuel",
        amount: 60.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Restaurant",
        amount: 90.50,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Clothing",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Gifts",
        amount: 125.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Education",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "Insurance Premium",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Maintenance Fee",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Mortgage",
        amount: 1500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Property Tax",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Cleaning Service",
        amount: 80.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Tuition Fee",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Music Lessons",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Parking Fee",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Laundry Service",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Holiday Trip",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "Pet Care",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Home Repairs",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Furniture Purchase",
        amount: 750.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Electronics",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Healthcare",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Childcare",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Gardening",
        amount: 45.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Subscription Renewal",
        amount: 99.99,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Security Service",
        amount: 75.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Streaming Service",
        amount: 14.99,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "Home Loan",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Vehicle Maintenance",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Office Supplies",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Event Planning",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Legal Fees",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Consulting Services",
        amount: 1500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Software License",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Travel Insurance",
        amount: 50.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Graphic Design",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Web Hosting",
        amount: 120.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },


    {
        description: "Personal Training",
        amount: 60.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Marketing Services",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Advertising",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Translation Services",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Copywriting",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Photography Service",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Consultation Fee",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Flight Tickets",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Hotel Booking",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Conference Fee",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "Catering Service",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Event Space Rental",
        amount: 1000.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Moving Service",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Interior Design",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Storage Rental",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Fitness Equipment",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Office Rental",
        amount: 1500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Courier Service",
        amount: 50.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "E-commerce Subscription",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Market Research",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "Business Development",
        amount: 2000.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Accounting Services",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Legal Consultation",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Software Development",
        amount: 3000.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Data Analysis",
        amount: 700.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Customer Support",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "IT Support",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Social Media Management",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Cloud Storage",
        amount: 60.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Server Maintenance",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },


    {
        description: "App Development",
        amount: 1000.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "SEO Services",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Content Creation",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Email Marketing",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Public Relations",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Auditing",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "IT Infrastructure",
        amount: 1000.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Cloud Computing",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Digital Marketing",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Sales Strategy",
        amount: 700.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "HR Consultancy",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "Legal Documentation",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Startup Advisory",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Strategic Planning",
        amount: 750.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Financial Analysis",
        amount: 650.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Product Photography",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Translation Service",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Remote IT Support",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Event Coordination",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Customer Feedback Analysis",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

    {
        description: "Database Management",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce56")
    },
    {
        description: "UX/UI Design",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce57")
    },
    {
        description: "Project Management",
        amount: 550.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce58")
    },
    {
        description: "Network Security",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce59")
    },
    {
        description: "Business Consultation",
        amount: 700.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5a")
    },

    {
        description: "Graphic Design Service",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5b")
    },
    {
        description: "Brand Strategy",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5c")
    },
    {
        description: "Sales Training",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5d")
    },
    {
        description: "Video Production",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5e")
    },
    {
        description: "Website Maintenance",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6732a7f8dc82bd3c3513ce5f")
    },

];





Bill.insertMany(bills)







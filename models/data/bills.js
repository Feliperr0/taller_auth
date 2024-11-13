import "dotenv/config.js"
import '../../config/database.js'
import mongoose from 'mongoose';

import Bill from "../Bill.js";

let bills = [
    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")

    },
    {
        description: "Medical Bill",
        amount: 75.80,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Travel Expense",
        amount: 220.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Entertainment",
        amount: 50.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Loan Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },

    {
        description: "Fuel",
        amount: 60.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Restaurant",
        amount: 90.50,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Clothing",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Gifts",
        amount: 125.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Education",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },

    {
        description: "Insurance Premium",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Maintenance Fee",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Mortgage",
        amount: 1500.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Property Tax",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Cleaning Service",
        amount: 80.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },

    {
        description: "Tuition Fee",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Music Lessons",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Parking Fee",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Laundry Service",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        description: "Holiday Trip",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },

    {
        description: "Pet Care",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Home Repairs",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Furniture Purchase",
        amount: 750.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Electronics",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Healthcare",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },

    {
        description: "Childcare",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Gardening",
        amount: 45.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Subscription Renewal",
        amount: 99.99,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Security Service",
        amount: 75.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Streaming Service",
        amount: 14.99,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },

    {
        description: "Home Loan",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Vehicle Maintenance",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Office Supplies",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Event Planning",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Legal Fees",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },

    {
        description: "Consulting Services",
        amount: 1500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Software License",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Travel Insurance",
        amount: 50.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Graphic Design",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        description: "Web Hosting",
        amount: 120.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },

    {
        description: "Personal Training",
        amount: 60.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Marketing Services",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Advertising",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Translation Services",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Copywriting",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },

    {
        description: "Photography Service",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Consultation Fee",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Flight Tickets",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Hotel Booking",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Conference Fee",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },

    {
        description: "Catering Service",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Event Space Rental",
        amount: 1000.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Moving Service",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Interior Design",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Storage Rental",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },

    {
        description: "Fitness Equipment",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Office Rental",
        amount: 1500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Courier Service",
        amount: 50.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "E-commerce Subscription",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        description: "Market Research",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },

    {
        description: "Business Development",
        amount: 2000.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Accounting Services",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Legal Consultation",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Software Development",
        amount: 3000.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Data Analysis",
        amount: 700.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },

    {
        description: "Customer Support",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "IT Support",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Social Media Management",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Cloud Storage",
        amount: 60.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Server Maintenance",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },


    {
        description: "App Development",
        amount: 1000.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "SEO Services",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Content Creation",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Email Marketing",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Public Relations",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },

    {
        description: "Auditing",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "IT Infrastructure",
        amount: 1000.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Cloud Computing",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Digital Marketing",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        description: "Sales Strategy",
        amount: 700.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },

    {
        description: "HR Consultancy",
        amount: 600.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Legal Documentation",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Startup Advisory",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Strategic Planning",
        amount: 750.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Financial Analysis",
        amount: 650.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },

    {
        description: "Product Photography",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Translation Service",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Remote IT Support",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Event Coordination",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Customer Feedback Analysis",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },

    {
        description: "Database Management",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "UX/UI Design",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Project Management",
        amount: 550.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Network Security",
        amount: 450.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Business Consultation",
        amount: 700.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },

    {
        description: "Graphic Design Service",
        amount: 350.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Brand Strategy",
        amount: 800.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Sales Training",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Video Production",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        description: "Website Maintenance",
        amount: 150.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },

    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Electricity Bill",
        amount: 75.60,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Internet Bill",
        amount: 50.30,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Water Bill",
        amount: 30.45,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Car Insurance",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Rent",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Gas Bill",
        amount: 45.78,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Phone Bill",
        amount: 60.99,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Gym Membership",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Streaming Services",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Credit Card Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Health Insurance",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Loan Payment",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Pet Food",
        amount: 30.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Home Security",
        amount: 20.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Magazine Subscription",
        amount: 10.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Charity Donation",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Childcare",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Transportation",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        description: "Parking Fees",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },

    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Electricity Bill",
        amount: 75.60,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Internet Bill",
        amount: 50.30,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Water Bill",
        amount: 30.45,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Car Insurance",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Rent",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Gas Bill",
        amount: 45.78,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Phone Bill",
        amount: 60.99,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Gym Membership",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Streaming Services",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },

    {
        description: "Credit Card Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Health Insurance",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Loan Payment",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Pet Food",
        amount: 30.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Home Security",
        amount: 20.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Magazine Subscription",
        amount: 10.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Charity Donation",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Childcare",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Transportation",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Parking Fees",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Electricity Bill",
        amount: 75.60,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Internet Bill",
        amount: 50.30,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Water Bill",
        amount: 30.45,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Car Insurance",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Rent",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Gas Bill",
        amount: 45.78,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Phone Bill",
        amount: 60.99,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Gym Membership",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Streaming Services",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },

    {
        description: "Credit Card Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Health Insurance",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Loan Payment",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Pet Food",
        amount: 30.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Home Security",
        amount: 20.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Magazine Subscription",
        amount: 10.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Charity Donation",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Childcare",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Transportation",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        description: "Parking Fees",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },

    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Electricity Bill",
        amount: 75.60,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Internet Bill",
        amount: 50.30,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Water Bill",
        amount: 30.45,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Car Insurance",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Rent",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Gas Bill",
        amount: 45.78,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Phone Bill",
        amount: 60.99,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Gym Membership",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Streaming Services",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Credit Card Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Health Insurance",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Loan Payment",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Pet Food",
        amount: 30.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Home Security",
        amount: 20.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Magazine Subscription",
        amount: 10.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Charity Donation",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Childcare",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Transportation",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        description: "Parking Fees",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },

    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Electricity Bill",
        amount: 75.60,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Internet Bill",
        amount: 50.30,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Water Bill",
        amount: 30.45,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Car Insurance",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Rent",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Gas Bill",
        amount: 45.78,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Phone Bill",
        amount: 60.99,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Gym Membership",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Streaming Services",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },

    {
        description: "Credit Card Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Health Insurance",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Loan Payment",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Pet Food",
        amount: 30.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Home Security",
        amount: 20.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Magazine Subscription",
        amount: 10.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Charity Donation",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Childcare",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Transportation",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },
    {
        description: "Parking Fees",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733ecd5a6bc69adbfd9e034")
    },

    {
        description: "Grocery Shopping",
        amount: 150.25,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Electricity Bill",
        amount: 75.60,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Internet Bill",
        amount: 50.30,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Water Bill",
        amount: 30.45,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Car Insurance",
        amount: 200.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Rent",
        amount: 1200.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Gas Bill",
        amount: 45.78,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Phone Bill",
        amount: 60.99,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Gym Membership",
        amount: 40.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Streaming Services",
        amount: 15.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },


    {
        description: "Credit Card Payment",
        amount: 300.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Health Insurance",
        amount: 250.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Loan Payment",
        amount: 500.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Pet Food",
        amount: 30.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Home Security",
        amount: 20.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Magazine Subscription",
        amount: 10.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Charity Donation",
        amount: 100.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Childcare",
        amount: 400.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Transportation",
        amount: 70.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        description: "Parking Fees",
        amount: 25.00,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    }



];





Bill.insertMany(bills)







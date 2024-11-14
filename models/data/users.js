import "dotenv/config.js"
import '../../config/database.js'
import mongoose from "mongoose";
import User from '../User.js'

let users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      photo: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password456",
      photo: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      password: "password789",
      photo: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      password: "password321",
      photo: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Daniel Brown",
      email: "daniel.brown@example.com",
      password: "password654",
      photo: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      password: "password987",
      photo: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      name: "David Martinez",
      email: "david.martinez@example.com",
      password: "password213",
      photo: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      name: "Sophia Garcia",
      email: "sophia.garcia@example.com",
      password: "password456",
      photo: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      name: "James Anderson",
      email: "james.anderson@example.com",
      password: "password789",
      photo: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      password: "password321",
      photo: "https://randomuser.me/api/portraits/women/10.jpg"
    }
  ];
  
  User.insertMany(users)
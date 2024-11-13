import "dotenv/config.js"
import '../../config/database.js'
import mongoose from 'mongoose';

import Property from "../Property.js";


let properties = [
    {
        type: "House",
        value: 300000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        type: "Apartment",
        value: 200000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        type: "Land",
        value: 50000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        type: "Commercial",
        value: 150000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        type: "Farm",
        value: 100000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f33")
    },
    {
        type: "House",
        value: 350000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        type: "Apartment",
        value: 250000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        type: "Land",
        value: 60000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        type: "Commercial",
        value: 160000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        type: "Farm",
        value: 110000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f36")
    },
    {
        type: "House",
        value: 320000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        type: "Apartment",
        value: 210000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        type: "Land",
        value: 55000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        type: "Commercial",
        value: 155000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        type: "Farm",
        value: 105000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f31")
    },
    {
        type: "House",
        value: 360000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        type: "Apartment",
        value: 220000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        type: "Land",
        value: 58000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        type: "Commercial",
        value: 158000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },
    {
        type: "Farm",
        value: 108000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f30")
    },

    {
        type: "House",
        value: 320000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        type: "Apartment",
        value: 210000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        type: "Land",
        value: 55000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        type: "Commercial",
        value: 155000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        type: "Farm",
        value: 105000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f35")
    },
    {
        type: "House",
        value: 360000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        type: "Apartment",
        value: 220000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        type: "Land",
        value: 58000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        type: "Commercial",
        value: 158000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },
    {
        type: "Farm",
        value: 108000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f37")
    },

    {
        type: "House",
        value: 340000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        type: "Apartment",
        value: 215000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        type: "Land",
        value: 57000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        type: "Commercial",
        value: 157000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        type: "Farm",
        value: 107000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f34")
    },
    {
        type: "House",
        value: 370000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        type: "Apartment",
        value: 230000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        type: "Land",
        value: 60000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        type: "Commercial",
        value: 160000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },
    {
        type: "Farm",
        value: 110000,
        user: new mongoose.Types.ObjectId("6733c89254602e42d6020f32")
    },

    {
        type: "House",
        value: 380000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Apartment",
        value: 240000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Land",
        value: 62000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Commercial",
        value: 162000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Farm",
        value: 112000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "House",
        value: 400000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Apartment",
        value: 250000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Land",
        value: 65000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Commercial",
        value: 165000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },
    {
        type: "Farm",
        value: 115000,
        user: new mongoose.Types.ObjectId("6733ed32a6bc69adbfd9e038")
    },

    {
        type: "House",
        value: 420000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Apartment",
        value: 260000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Land",
        value: 67000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Commercial",
        value: 167000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Farm",
        value: 117000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "House",
        value: 440000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Apartment",
        value: 270000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Land",
        value: 70000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Commercial",
        value: 170000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    },
    {
        type: "Farm",
        value: 120000,
        user: new mongoose.Types.ObjectId("6733f271dc94de52b526710f")
    }






];


Property.insertMany(properties)


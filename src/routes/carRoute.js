const express = require("express");
const { addCar } = require("../controllers/carController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - name
 *         - brand
 *         - model
 *         - year
 *         - color
 *         - seats
 *         - transmission
 *         - fuelType
 *         - mileage
 *         - rentalPricePerDay
 *         - rentalPricePerHour
 *         - location
 *         - carType
 *         - engineCapacity
 *         - fuelCapacity
 *         - registrationNo
 *         - chassisNo
 *         - engineNo
 *         - permitType
 *       properties:
 *         name:
 *           type: string
 *         brand:
 *           type: string
 *         model:
 *           type: string
 *         year:
 *           type: number
 *         color:
 *           type: string
 *         seats:
 *           type: number
 *         transmission:
 *           type: string
 *           enum: ["Manual", "Automatic"]
 *         fuelType:
 *           type: string
 *           enum: ["Petrol", "Diesel", "Electric", "Hybrid"]
 *         mileage:
 *           type: number
 *         rentalPricePerDay:
 *           type: number
 *         rentalPricePerHour:
 *           type: number
 *         availability:
 *           type: boolean
 *         location:
 *           type: string
 *         features:
 *           type: array
 *           items:
 *             type: string
 *         insuranceIncluded:
 *           type: boolean
 *         carType:
 *           type: string
 *           enum: ["SUV", "Sedan", "Hatchback", "Convertible", "Truck"]
 *         engineCapacity:
 *           type: string
 *         fuelCapacity:
 *           type: number
 *         registrationNo:
 *           type: string
 *         chassisNo:
 *           type: string
 *         engineNo:
 *           type: string
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *         videos:
 *           type: array
 *           items:
 *             type: string
 *         rcBookUrl:
 *           type: string
 *         insurancePolicyUrl:
 *           type: string
 *         insuranceExpiryDate:
 *           type: string
 *           format: date
 *         permitType:
 *           type: string
 *           enum: ["Commercial", "Private"]
 *         permitExpiryDate:
 *           type: string
 *           format: date
 *         currentOdometerReading:
 *           type: number
 *         lastServiceDate:
 *           type: string
 *           format: date
 *         nextServiceDue:
 *           type: string
 *           format: date
 *         gpsTrackerId:
 *           type: string
 *         minRentalPeriod:
 *           type: number
 *         maxRentalPeriod:
 *           type: number
 *         securityDeposit:
 *           type: number
 *         lateReturnPenalty:
 *           type: number
 *         driverRequirements:
 *           type: object
 *           properties:
 *             minAge:
 *               type: number
 *             licenseType:
 *               type: string
 *         ratings:
 *           type: array
 *           items:
 *             type: number
 *         reviews:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               comment:
 *                 type: string
 *               rating:
 *                 type: number
 *               date:
 *                 type: string
 *                 format: date
 */

/**
 * @swagger
 * /cars/add:
 *   post:
 *     summary: Add a new car to the catalog
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Car added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 car:
 *                   $ref: '#/components/schemas/Car'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/add", addCar);

module.exports = router;
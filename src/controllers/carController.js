const Car = require("../models/carModel");

exports.addCar = async (req, res) => {
  try {
    const {
      name,
      brand,
      model,
      year,
      color,
      seats,
      transmission,
      fuelType,
      mileage,
      rentalPricePerDay,
      rentalPricePerHour,
      availability,
      location,
      features,
      insuranceIncluded,
      carType,
      engineCapacity,
      fuelCapacity,
      registrationNo,
      chassisNo,
      engineNo,
      photos,
      videos,
      rcBookUrl,
      insurancePolicyUrl,
      insuranceExpiryDate,
      permitType,
      permitExpiryDate,
      currentOdometerReading,
      lastServiceDate,
      nextServiceDue,
      gpsTrackerId,
      minRentalPeriod,
      maxRentalPeriod,
      securityDeposit,
      lateReturnPenalty,
      driverRequirements,
      ratings,
      reviews,
    } = req.body;

    // Validate input
    if (
      !name ||
      !brand ||
      !model ||
      !year ||
      !color ||
      !seats ||
      !transmission ||
      !fuelType ||
      !mileage ||
      !rentalPricePerDay ||
      !rentalPricePerHour ||
      !location ||
      !carType ||
      !engineCapacity ||
      !fuelCapacity ||
      !registrationNo ||
      !chassisNo ||
      !engineNo ||
      !permitType
    ) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    // Create car
    const newCar = new Car({
      name,
      brand,
      model,
      year,
      color,
      seats,
      transmission,
      fuelType,
      mileage,
      rentalPricePerDay,
      rentalPricePerHour,
      availability,
      location,
      features,
      insuranceIncluded,
      carType,
      engineCapacity,
      fuelCapacity,
      registrationNo,
      chassisNo,
      engineNo,
      photos,
      videos,
      rcBookUrl,
      insurancePolicyUrl,
      insuranceExpiryDate,
      permitType,
      permitExpiryDate,
      currentOdometerReading,
      lastServiceDate,
      nextServiceDue,
      gpsTrackerId,
      minRentalPeriod,
      maxRentalPeriod,
      securityDeposit,
      lateReturnPenalty,
      driverRequirements,
      ratings,
      reviews,
    });

    await newCar.save();
    return res.status(201).json({ message: "Car added successfully", car: newCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
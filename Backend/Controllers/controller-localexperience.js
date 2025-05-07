const Experience = require("../models/experinces_schema")
const cloudinary = require("../utils/cloudinary")

const createExperince = async (req, res) => {
  const { name, location, bestTime, description, userEmail, state , imageURL} = req.body;

  try {
    const newExperience = await Experience.create({
      name,
      location,
      bestTime,
      description,
      imageURL,
      createdBy: userEmail,
      state
    });
    res.status(201).json({message:"Created Successfully"})
  } catch (error) {
    res.status(500).json({ message: "Error storing experince" });
    console.log(error)
  }
}

const fetchExperince = async (req,res) => {
  try {
    const allExperiences = await Experience.find({});
    res.status(200).json({ data: allExperiences });
  } catch (error) {
    console.log("error fetching experinces in backend",error)
    res.status(500).json({ message: "Error fetching experiences"})
  }
}

const deleteExperince = async (req, res) => {
  const { id } = req.body;
  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    if (experience.imageURL) {
      try {
        const publicId = experience.imageURL.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
      } catch (cloudinaryError) {
        console.error("Cloudinary deletion error:", cloudinaryError);
      }
    }
    await Experience.findByIdAndDelete(id);
    
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log("error deleting experience in backend", error);
    res.status(500).json({ message: "Error deleting experience" });
  }
}


module.exports = { createExperince , fetchExperince , deleteExperince};
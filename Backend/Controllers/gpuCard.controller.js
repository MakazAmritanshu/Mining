const gpuCardService = require("../Services/gpuCard.service");
const GpuCard = require("../Models/gpuCard.model");
const User = require("../Models/user.model");

// Create a new GPU card (using service)-->Admin
exports.createGpuCard = async (req, res) => {
  try {
    const gpu = await gpuCardService.createGpuCardService(req.body);
    res.status(201).json(gpu);
  } catch (error) {
    console.log("The error in creating Gpu Card", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all GPU cards
exports.getAllGpuCards = async (req, res) => {
  try {
    const gpus = await GpuCard.find();
    res.status(200).json(gpus);
  } catch (error) {
    console.log("Error fetching GPU cards", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a single GPU card by ID
exports.getGpuCardById = async (req, res) => {
  try {
    const gpu = await GpuCard.findById(req.params.id);
    if (!gpu) return res.status(404).json({ message: "GPU card not found" });
    res.status(200).json(gpu);
  } catch (error) {
    console.log("The error message in gpuCardById", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a GPU card by ID
exports.updateGpuCard = async (req, res) => {
  try {
    const gpu = await GpuCard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!gpu) return res.status(404).json({ message: "GPU card not found" });
    res.status(200).json(gpu);
  } catch (error) {
    console.log("Error updating Gpu Card", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//buy a gpu Card  for specific user
exports.buyGpuCard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    console.log("user is",user._id)
    const gpu = await GpuCard.findById(req.body.gpuCard);
    console.log("gpu card is",gpu._id)
    if (!user || !gpu) {
      return res.status(404).json({ message: "User or Gpu Card not found" });
    }
    //Add Gpu Card to user's ownedGpus if not already present
    if (!user.ownedGpus.includes(gpu._id)) {
      user.ownedGpus.push(gpu._id);
      await user.save();
    }
    res.status(200).json({ message: "Gpu Card Purchesed successfully", gpu });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};

//Upgrade a Gpu Card By Id
exports.upgradeGpuCard = async (req, res) => {
  try {
    const { oldGpuCardId, newGpuCardId } = req.body;
    const oldGpu = await GpuCard.findById(oldGpuCardId);
    const newGpu = await GpuCard.findById(newGpuCardId);

    if (!oldGpu || !newGpu) {
      return res.status(404).json({ message: "GPU card not found" });
    }

   

    //Find the user
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    //Remove old Gpu CardId from user's ownedGpus(Good logic)
    user.ownedGpus = user.ownedGpus.filter(
      (gpuId) => gpuId.toString() !== oldGpuCardId
    );
    //Add newGpuCardId to users's owendGpus
    if (!user.ownedGpus.includes(newGpuCardId)) {
      user.ownedGpus.push(newGpuCardId);
    }

    await user.save();

    res.status(200).json({ message: "GPU card upgraded successfully", newGpu });
  } catch (error) {
    console.log("Error upgrading Gpu Card", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a GPU card by ID
exports.deleteGpuCard = async (req, res) => {
  try {
    const gpu = await GpuCard.findByIdAndDelete(req.params.id);
    if (!gpu) return res.status(404).json({ message: "GPU card not found" });
    res.status(200).json({ message: "GPU card deleted successfully" });
  } catch (error) {
    console.log("Error deleting Gpu Card", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

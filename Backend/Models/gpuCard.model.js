const mongoose = require("mongoose");

const gpuCardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    hashRate: {
      type: Number,
      required: true,
    },
    powerConSumption: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      enum: ["High", "Mid", "low"],
      required: true,
    },

    //How much reward this GPU card can mine in a day we have to enter from backend
    CardMiningRate: {
      type: Number,
      required: true,
    },
  },
  { timeStamps: true }
);

//Calculations part creating some methods and instances

//Electricity Cost per day(USD)
gpuCardSchema.methods.getDailyElectricityCost = function (
  electricityRate = 0.1
) {
  const KWhPerDay = (this.powerConsumption * 24) / 1000;
  const cost = (kWhPerDay * electricityRate).toFixed(2);
  const numericCost = +cost;
  return numericCost;
};

//Get Daily Profit
gpuCardSchema.methods.getDailyProfit=function(coinPrice,electricityRate=.1){
   const miningIncome=this.CardMiningRate*coinPrice;
   const electricityCost=this.getDailyElectricityCost(electricityRate);
   return +(miningIncome-electricityCost).toFixed(2);

}

//Calculate the effciency 
gpuCardSchema.methods.getEfficiency=function(){
  return +(this.hashRate/this.powerConSumption).toFixed(3);
}




const GpuModel = mongoose.model("GpuCard", gpuCardSchema);
module.exports = GpuModel;

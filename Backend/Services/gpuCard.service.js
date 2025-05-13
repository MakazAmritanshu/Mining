
const gpuCardModel=require('../Models/gpuCard.model')



exports.createGpuCardService=async(data) =>{
    const gpu=new gpuCardModel(data);
    return await gpu.save();

}
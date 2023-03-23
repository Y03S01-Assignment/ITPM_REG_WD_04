const express = require("express");
const services = require("../models/services");

const router = express.Router();

router.post("/services/save", (req, res) => {
  let newService = new services(req.body);

  newService.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.status(200).json({
      success: "Service added successfully",
    });
  });
});

//Retive
router.get('/services',(req,res) =>{
  services. find().exec((err,services) =>{
   if(err){
       return res.status(400).json({
           error:err
       });
   }
   return res.status(200).json({
       success:true,
       existingservices:services
   });
  });
});

//specific data retrive
router.get("/services/:id",(req,res) =>{
  let servicesId = req.params.id;

  services.findById(servicesId,(err,services) =>{
      if(err){
          return res.status(400).json({success:false,err});
      }
      return res.status(200).json({
          success:true,
          services
      });
  });
  
});

//update

router.put('/services/update/:id',(req,res)=>{
  services.findByIdAndUpdate(
  req.params.id,
  {
      $set:req.body
  },
  (err,services)=>{
      if(err){
          return res.status(400).json({error:err});
      }
      return res.status(200).json({
          success:"Updated Successfully"
      });
  }

  );
});

//delete

router.delete('/services/delete/:id',(req,res) =>{
  services.findByIdAndRemove(req.params.id).exec((err,deletedservices) =>{

      if(err) return res.status(400).json({
          message:"Delete Unsuccessful",err
      });
      return res.json({
          message:"Delete Successful",deletedservices
      });
  });
})

module.exports = router;


const express = require('express');
let User = require('../models/User');

const handleFavDetails= async(req, res)=>{
    try{
          const user = await User.findById(req.user.id);
          res.json(user.favorites || [])
    }
    catch(err){
        res.status(500).json({message: " Failed to get favorites"})
    }
};


const handleFavAdd = async(req, res) =>{
    const {recipeId } = req.body;
    try{
          const user = await User.findById(req.user.id);
          if(!user.favorites.includes(recipeId)){
            user.favorites.push(recipeId);
            await user.save();
          }
    res.json(user.favorites);      
    }
    catch(err){
        res.status(500).json({ message: 'Failed to add favorite' })
    }
 }


const handleFavDelete = async(req, res)=>{
    const {recipeId} = req.body;
    try{
         const user = await User.findById(req.user.id);
         user.favorites = user.favorites.filter((id)=> id !== recipeId);
         await user.save();
         res.json(user.favorites);
    }
     catch(err){
        res.status(500).json({ message: 'Failed to remove favorites '})
     }
};

module.exports = {
    handleFavDetails,
    handleFavAdd,
    handleFavDelete,
}



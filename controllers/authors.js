import express from "express";
import AuthorsModel from "../models/authors.js";

export async function createAuthors(req, res){
   const newAuthors = new AuthorsModel(req.body);
   await newAuthors.save();
   res.send("Authors Added");
}

export async function getAuthors(req, res) {
   console.log(`>>>>>>>>>>>>>aaaaaaaaaa`);
   
   try {
      const authors = await AuthorsModel.find(); // Changed variable name to plural
      res.status(200).json(authors);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve authors' }); // Updated error message
   }
}


export async function getByIdAuthors(req, res) {
   console.log("first")
   const Authorss = await AuthorsModel.findById(req.params.id)
   console.log(Authorss)
   res.status(200).json(Authorss);
}


export async function deleteAuthors(req, res){
   const deleteAuthors = await AuthorsModel.findByIdAndDelete(req.params.id);
   console.log(deleteAuthors);
   if (deleteAuthors) {
      res.status(200).json({ message: 'Authors deleted successfully' });
   } else {
      res.status(404).json({ message: 'Authors not found' });
   }
}

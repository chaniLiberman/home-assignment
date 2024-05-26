const express = require("express");
const router = express.Router();
const axios = require('axios');

// get all
router.get("/", async (req,res) => {
   try {
      const items = await axios.get("https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=sports");
      res.status(200).json(items.data.hits.slice(0, 9)); // Hits contain the array of items
  } catch (error) {
      console.error('Error fetching data:', error);
      res.send(error)
  }
});

// Route to fetch images based on category
router.get("/images/:category/:page", async (req, res) => {
    let { category,page } = req.params;
    page = parseInt(page);
    try {
        const itemsByCategory = await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`);
        res.status(200).json(itemsByCategory.data.hits.slice(page * 9, (page + 1) * 9));
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/:tag", async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    };

    const response = await axios.get(
      `https://api.clashroyale.com/v1/clans/%23${req.params.tag}`,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

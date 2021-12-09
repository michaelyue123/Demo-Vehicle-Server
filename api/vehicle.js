import { baseUrl } from "../config.js";
import axios from "axios";

/*
 * GET /development/dealers route to retrieve all the dealers.
 */
async function getDealers(_req, res) {
  try {
    let result;
    const response = await axios.get(`${baseUrl}/development/dealers`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.status === 200) {
      result = response.data;
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

/*
 * GET /development/vehicles/:bac route to retrieve dealer details based on bac number.
 */
async function getDealerDetails(req, res) {
  try {
    const bac = req.params.bac;
    let result;
    const response = await axios.get(`${baseUrl}/development/vehicles/${bac}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.status === 200) {
      result = response.data;
    }
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

const vehicle = {
  getDealers,
  getDealerDetails,
};

export { vehicle };

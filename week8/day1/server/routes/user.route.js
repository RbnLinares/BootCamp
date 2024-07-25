const express = require ('express');

conts {users} = require ('../../config/data.js');

const router = express.router();

router.get("users", (req, res) =>
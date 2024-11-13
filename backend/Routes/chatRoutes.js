const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat } = require("../controllers/chatCantrollers");
const { fetchChats } = require("../controllers/chatCantrollers");
const { createGroupChat } = require("../controllers/chatCantrollers");
const { renameGroup } = require("../controllers/chatCantrollers");
const { addToGroup } = require("../controllers/chatCantrollers");
const { removeFromGroup } = require("../controllers/chatCantrollers");
const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;

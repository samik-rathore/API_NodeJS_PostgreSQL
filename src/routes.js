const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get("/",controller.getBankList);
router.get("/:bankName",controller.getBankBranchesList);
router.get("/:bankName/:bankBranch",controller.getBankBranchDetails);

module.exports = router;
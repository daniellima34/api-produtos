const express = require("express");
const router = express.Router();
const produtosController = require("../controllers/produtos");
const produtosMiddleware = require("../middlewares/produtos");
const authmiddlewares = require("../middlewares/auth");
  router.get("/produtos",
    authmiddlewares.validateToken,
     produtosController.getProdutos
    );
router.post(
  "/produtos",
  produtosMiddleware.validateCreateProduto,
  produtosController.createProduto
);
router.delete(
  "/produtos/:id",
  produtosMiddleware.validateDeleteProduto,
  produtosController.deleteProduto
);

module.exports = router;

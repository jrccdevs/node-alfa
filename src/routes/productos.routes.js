import { Router } from "express";
import {
    getProductos,
    getProductosId,
    getFormaFarma,
    getProductosCate,
    getProductosCarrucel,

    // getForma,
    getProductosCapsulas,
    getProductosComprimidos,
    getProductosCremas,
    getProductosGel,
    getProductosGotas,
    getProductosGranulado,
    getProductosInyectable,
    getProductosJarabe,
    getProductosPolvo,
    getProductosPomada,
    getProductosShampo,
    getProductosSolucion,
    getProductosSupositorio,
    getProductosSuspencion,
    getProductosTableta,
    // getProducto,
    createProductos,
    updateProductos,
    deleteProducto

  } from "../controllers/productos.controllers.js";
  import {authenticacion} from '../controllers/authenticacion.controllers.js'

const router = Router();
// mostrando todos los productos
router.get("/productos", authenticacion, getProductos);
router.get("/productos/:id", getProductosId);
router.get("/carrucel", getProductosCarrucel);

// router.get("/forma", getForma);

router.get("/formaFarmaceutica", getFormaFarma);
router.get("/formaFarmaceutica/:categoria", getProductosCate);





router.get("/productos/capsulas", getProductosCapsulas);
router.get("/productos/comprimidos", getProductosComprimidos);
router.get("/productos/cremas", getProductosCremas);
router.get("/productos/gel", getProductosGel);
router.get("/productos/gotas", getProductosGotas);
router.get("/productos/granulado", getProductosGranulado);
router.get("/productos/inyectable", getProductosInyectable);
router.get("/productos/jarabe", getProductosJarabe);
router.get("/productos/polvo", getProductosPolvo);
router.get("/productos/pomada", getProductosPomada);
router.get("/productos/shampo", getProductosShampo);
router.get("/productos/solucion", getProductosSolucion);
router.get("/productos/supositorio", getProductosSupositorio);
router.get("/productos/suspencion", getProductosSuspencion);
router.get("/productos/tableta", getProductosTableta);





// router.get("/productos/:id", getProducto);

router.post("/productos", createProductos);

router.put("/productos/:id", updateProductos);

router.delete("/productos/:id", deleteProducto);



export default router;
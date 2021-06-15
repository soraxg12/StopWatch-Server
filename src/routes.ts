import { Router } from 'express';
import { StopWatchController } from './app/Controllers/StopWatchController';

//criando as rotas da api
const router: Router = Router();

router.get("/get-all",StopWatchController.FindAll);
router.get("/get-one/:id",StopWatchController.FindOne);
router.post("/create",StopWatchController.Create);
router.put("/update/:id",StopWatchController.Update)
router.delete("/delete-one/:id",StopWatchController.DeleteOne);

export { router };
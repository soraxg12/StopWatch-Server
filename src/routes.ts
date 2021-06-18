import { Router } from 'express';
import { StopWatchController } from './app/Controllers/StopWatchController';

//criando as rotas da api
const router: Router = Router();

router.get("/get-all",StopWatchController.FindAll);
router.post("/create",StopWatchController.Create);
router.delete("/delete-one/:id",StopWatchController.DeleteOne);

export { router };
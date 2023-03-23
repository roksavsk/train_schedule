import { Request, Response, Router } from 'express';

import trains from '../controllers/controllers';

const router = Router();

router.get('/trains', trains.allTrains);
router.post('/selected_trains', trains.findTrains);
router.post('/train', trains.postTrain);
router.delete('/train/:id', trains.deleteTrain);
router.put('/train/edit/:id', trains.updateTrain);
router.get('/train_form', async (req: Request, res: Response) => {
    res.render('train_form');
});
router.get('/train/edit/:id', async (req: Request, res: Response) => {
    res.render('train_form_update', { data: req.params.id });
});
router.get('/search_form', async (req: Request, res: Response) => {
    res.render('search_form');
});

export default router;

import express, { request, response } from 'express'
import { celebrate, Joi } from 'celebrate'
import multer from 'multer'
import multerCongig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router() // Permite colocar rotas em outro arquivo que nao seja o principal (nessa caso server.ts)
const upload = multer(multerCongig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

// Requisicoes:
// GET: Buscar uma ou mais infos do backend
// POST: Criar uma nova info no backend
// PUT: update uma info existente no backend
// DELETE: remover info do back
// Tipos de parametros:
// Request Param: Parametros que vem na propria rota que identificam um recurso. Ex: site/users/3
// Query Param: Tambem vai na rota, mas nao eh necessario pra rota funcionar (tipo um filtro). Ex: site/users?serach=Pedro
// Request Body: Parametros para criacao/update de infos (serve para todo o resto).

// index, show, create, update, delete

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create)

export default routes
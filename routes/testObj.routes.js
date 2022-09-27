import { testObjController } from '../controllers/testObj.controller.js'
import { Router } from 'express'

const router = new Router()

router.post('/testObj', testObjController.createTestObj)
router.put('/testObj', testObjController.updateTestObj)
router.delete('/testObj/:id', testObjController.deleteTestObj)

export { router }

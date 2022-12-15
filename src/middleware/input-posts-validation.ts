import {body} from "express-validator"

// export const titleValidation = body('title').trim()
//     .notEmpty().withMessage(`Shouldn't be empty`).bail()
//     .isString().withMessage('Should be string type').bail()
//     .isLength({max: 40}).withMessage('Should be less than 40 symbols').bail()
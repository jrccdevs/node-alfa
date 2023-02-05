import { check } from 'express-validator'

import { validateResult } from '../helpers/validacion.helpers.js'

export const validateCreate = [ //TODO:name, age, email
    check('nombre')
        .exists()
        .not()
        .isLength({ min: 5 })
        .isEmpty(),
    //req.checkBody( "your extension" ).isIn([ "PNG", "JPEG", "GIF" ]);

    check('image')
        .exists()
     //   .matches(/\.(mp4|mkv|avi|png)$/)

        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
    /* ,
    check('email')
        .exists()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    } */
]

//  extensiones_permitidas = new Array(".gif", ".jpg", ".doc", ".pdf");
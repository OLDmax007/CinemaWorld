import * as Joi from "joi";
import {regexp} from "../constants/regexp.ts";

export const movieValidator = Joi.object({
    movieName: Joi.string()
        .pattern(regexp.movieName)
        .trim()
        .max(100)
        .min(1)
        .messages({
            'string.empty' : 'The Field can not be empty.',
            'string.pattern.base' : 'The Field must contain only characters and numbers.',
            'string.min' : 'The field must contain more than 1 character.',
            'string.max' : 'The field must contain less then 100 characters.'
        })
});

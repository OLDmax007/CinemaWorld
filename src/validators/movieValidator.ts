import * as Joi from "joi";
import {regexps} from "@constants/regexps.ts";

export const movieValidator = Joi.object({
    movieName: Joi.string()
        .pattern(regexps.movieName)
        .trim()
        .max(100)
        .min(1)
        .allow('')
        .messages({
            'string.pattern.base' : 'The Field must contain only characters and numbers.',
            'string.min' : 'The field must contain more than 1 character.',
            'string.max' : 'The field must contain less then 100 characters.'
        })
});

import { extend, localize } from 'vee-validate'
import {confirmed, email, required, max} from 'vee-validate/dist/rules'
import ru from "vee-validate/dist/locale/ru.json";

extend('required', required)
extend('max', max)
extend('confirmed', confirmed)
extend('email', email)
localize('ru', ru)

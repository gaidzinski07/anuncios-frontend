import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function uffMailValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value: string | undefined = control.value;

        if (!value) {
            return null;
        }

        const hasntInvalidChars = /^[^<>,!#$%&*()]+$/.test(value);

        const emailValid = (value.endsWith('@id.uff.br') || value.endsWith('.uff.br')) && hasntInvalidChars && value.length > 10;

        return !emailValid ? {notValidEmail:true}: null;
    }
}
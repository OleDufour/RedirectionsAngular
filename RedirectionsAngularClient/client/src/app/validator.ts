import { FormControl } from '@angular/forms';

export class Validator {
    static cannotBeEmpty(formControl: FormControl) {

        if (formControl.value.indexOf(' ') >= 0)
            return { cannotBeEmpty: true };
        return null;

    }


}
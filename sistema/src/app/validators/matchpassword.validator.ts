import { AbstractControl } from "@angular/forms";

export class MatchPasswordValidator {
    static matchPassword(abstractControl: AbstractControl) {
        let password = abstractControl.get('password')?.value;
        let passwordconfirm = abstractControl.get('passwordConfirm')?.value;

        if (password != passwordconfirm) {
            abstractControl.get('passwordConfirm')?.setErrors({
                matchPassword: true
            });
        }

        return null;
    }
}
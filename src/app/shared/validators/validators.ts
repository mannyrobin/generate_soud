import { AbstractControl, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

interface ICmValidator {
  [key: string]: {
    value: string | number,
    min?: string | number,
    max?: string | number,
  };
}

export function passwordMatchValidator (passwordControl: FormControl): ValidatorFn {
  return (control: AbstractControl): ICmValidator | null => {
    if (!control || !passwordControl) {
      return null;
    }

    return control.value !== passwordControl.value
      ? { passwordsMatch: { value: control.value } }
      : null;
  };
}

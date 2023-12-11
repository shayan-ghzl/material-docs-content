import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import { NgForm } from '@angular/forms';

/** @title Input with a custom ErrorStateMatcher */
export declare class InputErrorStateMatcherExample {
    emailFormControl: FormControl<string | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputErrorStateMatcherExample, "input-error-state-matcher-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic Inputs
 */
export declare class InputOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputOverviewExample, "input-overview-example", never, {}, {}, never, never, true, never>;
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

export { }

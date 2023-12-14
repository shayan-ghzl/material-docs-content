import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import { NgForm } from '@angular/forms';

/** @title File Input with a custom ErrorStateMatcher */
export declare class FileInputErrorStateMatcherExample {
    emailFormControl: FormControl<string | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputErrorStateMatcherExample, "file-input-error-state-matcher-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic File Input
 */
export declare class FileInputOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputOverviewExample, "file-input-overview-example", never, {}, {}, never, never, true, never>;
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

export { }

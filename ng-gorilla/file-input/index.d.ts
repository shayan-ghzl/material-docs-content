import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * @title File Input with a clear button
 */
export declare class FileInputClearButtonExample {
    fileFormControl: FormControl<never[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputClearButtonExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputClearButtonExample, "file-input-clear-button-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title File Input with a directive validator
 */
export declare class FileInputDirectiveValidatorExample {
    fileFormControl: FormControl<never[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputDirectiveValidatorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputDirectiveValidatorExample, "file-input-directive-validator-example", never, {}, {}, never, never, true, never>;
}

/** @title File Input with a custom ErrorStateMatcher */
export declare class FileInputErrorStateMatcherExample {
    fileFormControl: FormControl<never[] | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputErrorStateMatcherExample, "file-input-error-state-matcher-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic File Input
 */
export declare class FileInputOverviewExample {
    fileFormControl: FormControl<never[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputOverviewExample, "file-input-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title File Input with just a single file upload capability
 */
export declare class FileInputSingleExample {
    fileFormControl: FormControl<never[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputSingleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputSingleExample, "file-input-single-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title File Input with upload button outside of it
 */
export declare class FileInputUploadButtonOutsideExample {
    fileFormControl: FormControl<never[] | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputUploadButtonOutsideExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputUploadButtonOutsideExample, "file-input-upload-button-outside-example", never, {}, {}, never, never, true, never>;
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

export { }

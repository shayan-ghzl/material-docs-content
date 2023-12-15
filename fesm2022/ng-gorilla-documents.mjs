/**
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 ******************************************************************************
 */
const EXAMPLE_COMPONENTS = {
    "file-input-error-state-matcher": {
        "packagePath": "ng-gorilla/file-input/file-input-error-state-matcher",
        "title": "File Input with a custom ErrorStateMatcher",
        "componentName": "FileInputErrorStateMatcherExample",
        "files": [
            "file-input-error-state-matcher-example.ts",
            "./file-input-error-state-matcher-example.html",
            "./file-input-error-state-matcher-example.css"
        ],
        "selector": "file-input-error-state-matcher-example",
        "additionalComponents": [],
        "primaryFile": "file-input-error-state-matcher-example.ts",
        "importPath": "ng-gorilla/file-input"
    },
    "file-input-overview": {
        "packagePath": "ng-gorilla/file-input/file-input-overview",
        "title": "Basic File Input",
        "componentName": "FileInputOverviewExample",
        "files": [
            "file-input-overview-example.ts",
            "file-input-overview-example.html",
            "file-input-overview-example.css"
        ],
        "selector": "file-input-overview-example",
        "additionalComponents": [],
        "primaryFile": "file-input-overview-example.ts",
        "importPath": "ng-gorilla/file-input"
    }
};
async function loadExample(id) {
    switch (id) {
        case 'file-input-error-state-matcher':
            return import('@angular/ng-gorilla-documents/ng-gorilla/file-input');
        case 'file-input-overview':
            return import('@angular/ng-gorilla-documents/ng-gorilla/file-input');
        default:
            return undefined;
    }
}

// The example-module file will be auto-generated. As soon as the
/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 */
class ExampleData {
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        const { componentName, files, selector, primaryFile, additionalComponents, title } = EXAMPLE_COMPONENTS[example];
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.exampleFiles = files;
        this.selectorName = selector;
        this.indexFilename = primaryFile;
        this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentNames = [componentName, ...additionalComponents];
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { EXAMPLE_COMPONENTS, ExampleData, loadExample };
//# sourceMappingURL=ng-gorilla-documents.mjs.map

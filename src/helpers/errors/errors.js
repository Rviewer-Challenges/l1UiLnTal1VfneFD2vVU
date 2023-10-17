export function errors() {
    // set this as custom hook

    const ERRORS = {}

    this.addNewError = (errorCode, errorMessage) => {
        const error = {
            code: errorCode,
            message: errorMessage,
        };
        ERRORS[errorCode] = error;

    }

    this.getError = () => {

        const errorMarked = Object.values(ERRORS);
        return errorMarked

    }

}
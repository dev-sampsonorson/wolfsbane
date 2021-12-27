
export default class Result {

    private cause: string = '';

    private constructor(private message: string, private success: boolean) {

    }

    public static Error(message: string = '', cause: string = '') {
        let result = new Result(message, false);

        result.cause = cause;

        return result;
    }

    public static Success(message: string = '') {
        return new Result(message, true);
    }

    public IsSuccessful(): boolean {
        return this.success;
    }

    public getMessage(): string {
        return this.message;
    }

}
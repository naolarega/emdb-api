class MovieModel {
    title: string;
    description?: string;
    runningTime: number;
    writter?: string;
    director?: string;

    constructor(title: string, runningTime: number) {
        this.title = title;
        this.runningTime = runningTime;
    }
}
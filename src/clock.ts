export class Clock {
    initialMillis = 0;

    getNow = (): number => performance.now();

    millis = (): number => this.getNow() - this.initialMillis;

    seconds = (): number => Math.floor(this.millis() / 1000);
}
class Clock {
  constructor() {
    // 1. Create a Date object.
    let now = new Date;
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    // 2. Store the hours, minutes, and seconds.
    // printTime();
    // 3. Call printTime
      // 4. Schedule the tick at 1 second intervals.
      window.setInterval(this.display.bind(this), 1000);
  }
  printTime() {
    let sec;
    let min;
    let hour;

    (this.seconds < 10) ? sec = `0${this.seconds}` : sec = `${this.seconds}`;
    (this.minutes < 10) ? min = `0${this.minutes}` : min = `${this.minutes}`;
    (this.hours < 10) ? hour = `0${this.hours}` : hour = `${this.hours}`;
    console.log(`${hour}:${min}:${sec}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  display() {
    this._tick();
    this.printTime();
  }


  _tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++
      this.seconds = 0;
    }

    if (this.minutes === 60) {
      this.hours++
      this.minutes = 0
    }
    if (this.hours === 24) {
      this.hours = 0
    }


    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();

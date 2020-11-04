const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = () => {
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      console.log("Thanks for using me, ciao!");
      process.exit();
    } else if (key === "b") {
      console.log("BEEP BEEP");
    } else if (key > 0 && key < 10) {
      console.log(`Setting timer for ${key} seconds`);
      setTimeout(() => {
        console.log("TIMED BEEP BEEP");
      }, key * 1000);
    } else {
      console.log("Invalid key!");
    }
  });
};

timer();

document.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "KeyA":
      let aAudio = new Audio("white_keys/A.mp3");
      aAudio.play();
      break;
    case "KeyS":
      let sAudio = new Audio("white_keys/S.mp3");
      sAudio.play();
      break;
    case "KeyD":
      let dAudio = new Audio("white_keys/D.mp3");
      dAudio.play();
      break;
    case "KeyF":
      let fAudio = new Audio("white_keys/F.mp3");
      fAudio.play();
      break;
    case "KeyG":
      let gAudio = new Audio("white_keys/G.mp3");
      gAudio.play();
      break;
    case "KeyH":
      let hAudio = new Audio("white_keys/H.mp3");
      hAudio.play();
      break;
    case "KeyJ":
      let jAudio = new Audio("white_keys/J.mp3");
      jAudio.play();
      break;
    case "KeyW":
      let WAudio = new Audio("black_keys/W.mp3");
      WAudio.play();
      break;
    case "KeyE":
      let EAudio = new Audio("black_keys/E.mp3");
      EAudio.play();
      break;
    case "KeyT":
      let TAudio = new Audio("black_keys/T.mp3");
      TAudio.play();
      break;
    case "KeyY":
      let YAudio = new Audio("black-keys/Y.mp3");
      YAudio.play();
      break;
    case "KeyU":
      let UAudio = new Audio("black-keys/U.mp3");
      UAudio.play();
      break;
    default:
      console.log("Warning.");
      break;
  }
});

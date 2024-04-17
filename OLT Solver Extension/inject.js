(
  function () {
  try {
    const addjs = (js) =>
      (document.head.appendChild(document.createElement("script")).innerHTML =
        js);
    addjs(
      `
      console.log("Activated");

      (async function TickAll(qId) {
        var QID = qId
        if(QID==undefined){
          QID = prompt("Enter Question Number");
        }
        var ques = window.parent.a.getQuestion(1, 1);
        var last = parseInt(prompt("enter last question number"));


        for (var j = QID; j < Math.min(ques.length,last); j++) {

          await new Promise((resolve, reject) => {
            


            const btns = window.parent.c.document.getElementsByName("ans");
            var ques = window.parent.a.getQuestion(1, 1);

            if (!ques) {
              alert("ques not found");
              return;
            }
            
            for (var i of btns) {
              const val = i.getAttribute("value");
              if (val == ques[j][3]) {
                i.checked = true
                break;
              }
            }




            setTimeout(() => {
              window.parent.a.next('SAVE');
              resolve();
            }, 1000);


          });
        }
      })(window?.parent?.a?.currentQuestion || parseInt(prompt("enter current question number"))-1)
    `
    );
  } catch (err) {
    console.log("error while running");
    console.log(err);
  }
})();

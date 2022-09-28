let btn = document.querySelector("button");

let input = document.querySelector("input");
let msg = document.querySelector(".msg");
let newWord = "";
let scrambeledWord = "";
let play = false;
let score = 0;
let arr = ["python", "programming", "microsoft", "java", "mongodb", "javascript", "c++", "swift", "reactjs", "angularjs", "vuejs", "django", "flask", "php", "larvel", "sql", "nodejs", "express", "bootstrap", "html", "css", "spring"];


function createWord() {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

function scramble(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j]
        arr[j] = temp;

    }
    return arr.join("");

}

function update() {
    document.querySelector(".scoreBox").innerHTML = score;
}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!play) {
        play = true;
        msg.setAttribute("class", "msg");
        input.setAttribute("class", "");
        btn.innerHTML = "Submit";
        newWord = createWord();
        console.log(newWord);
        scrambeledWord = scramble(newWord.split(""));
        msg.innerHTML = `Welcome Please Guess "${scrambeledWord}"`;
    } else {
        let guess = input.value;
        if (guess === newWord) {
            msg.innerHTML = `Congratulation ! you have guessed correct`;
            score++;
            update();
            btn.innerHTML = "Next";
            play = false;
            input.classList.add("hidden");
            input.value = "";
            document.querySelector(".bar-success").classList.add("active");
            setTimeout(() => {
                document.querySelector(".bar-success").classList.remove("active");

            }, 2500);
            update();



        } else {
            msg.innerHTML = `Sorry Try again "${scrambeledWord}"`;
            score = 0;
            btn.innerHTML = "Start Again";

            document.querySelector(".bar").classList.add("active");
            setTimeout(() => {
                document.querySelector(".bar").classList.remove("active");

            }, 2500);
            update();


        }
    }



})
document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("chessboard");
    const timer1 = document.getElementById("timer1");
    const timer2 = document.getElementById("timer2");
    let currentPlayer = 1;
    let timeLeft1 = 30 * 60; // 30 دقیقه
    let timeLeft2 = 30 * 60;

    // ساخت صفحه شطرنج
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement("div");
            square.className = (i + j) % 2 === 0 ? "white-square" : "black-square";
            board.appendChild(square);
        }
    }

    // تایمر بازی
    setInterval(() => {
        if (currentPlayer === 1) {
            timeLeft1--;
            timer1.textContent = `${Math.floor(timeLeft1 / 60)}:${timeLeft1 % 60}`;
            if (timeLeft1 <= 0) alert("بازیکن ۲ برنده شد!");
        } else {
            timeLeft2--;
            timer2.textContent = `${Math.floor(timeLeft2 / 60)}:${timeLeft2 % 60}`;
            if (timeLeft2 <= 0) alert("بازیکن ۱ برنده شد!");
        }
    }, 1000);
});

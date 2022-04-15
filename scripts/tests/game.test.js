/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("button ids in choices array", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 5;
        game.currentGame = ["test"];
        game.playerMoves = ["test"];
        document.getElementById("score").innerText = 42;
        newGame();
    });
    test("reset game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("reset currentGame array", () => {
        expect(game.currentGame).toEqual([]);
    });
    test("reset playerMoves array", () => {
        expect(game.playerMoves).toEqual([]);
    });
    test("reset score count in DOM", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});
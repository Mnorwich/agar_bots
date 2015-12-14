window.botList = window.botList || [];

function QuickBot() {
    this.name = "Mark Norwich";
    this.keyAction = function(key) {w};
    this.displayText = function() {return [s];};
    this.mainLoop = function() {
        return [screenToGameX(getMouseX()),
                screenToGameY(getMouseY())];
    };
    console.log("first bot");
}
console.log("first bot");
window.botList.push(new QuickBot());

window.updateBotList();
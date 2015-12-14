window.botList = window.botList || [];

function QuickBot() {
    this.name = "jiri rapatti";
    this.keyAction = function(key) {w};
    this.displayText = function() {return [s];};
    this.mainLoop = function() {
        return [screenToGameX(getMouseX()),
                screenToGameY(getMouseY())];
    };
}
window.botList.push(new QuickBot());

window.updateBotList();
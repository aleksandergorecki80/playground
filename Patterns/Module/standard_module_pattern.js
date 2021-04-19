// (function(){
//     // Declare privte veribles and functions

//     return {
//     // Declare public veriables and functions

//     }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function(){
    let text = 'Hello world';

    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText()
// UICtrl.changeText()
console.log(UICtrl.text)
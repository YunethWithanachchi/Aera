import 'emoji-mart'

document.querySelector('emoji-picker').addEventListener('emoji-click',(event)=>{
   const emoji = event.detail.unicode;
   const cursorPos - input.selectionStart;
   const textBefore = input.value.substring(0,cursorPos);
   const textAfter = input.value.substring(cursorPos);
   input.value = textBefore+ emoji+textAfter;
   input.focus();
   input.focus();
});

}
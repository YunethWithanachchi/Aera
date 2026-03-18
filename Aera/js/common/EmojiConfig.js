import 'emoji-picker-element'

document.querySelector('emoji-picker').addEventListener('emoji-click',(event)=>{
   const emoji = event.detail.unicode;
   insertEmojiAtCursor(emoji);

});

function insertEmojiAtCursor(emoji){
   const sel = window.getSelection();
   if(!sel || !sel.rangeCount) return;

   const range = sel.getRangeAt(0);
   range.deleteContents();
   const textNode = document.createTextNode(emoji);
   range.insertNode(textNode);

   range.setStart(textNode);
   range.setEndAfter(textNode)
   sel.removeAllRanges();
   sel.addRange(range);
}
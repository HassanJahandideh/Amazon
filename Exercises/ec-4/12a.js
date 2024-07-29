let messages = 2;
let intervalId;
let isDisplayingNotification;

displayNotification();

function displayNotification() {
   if (isDisplayingNotification) {
      return
   };
}

isDisplayingNotification = true;

intervalId = setInterval(() => {
   if (document.title === 'Document') {
      document.title = `(${messages} New Messages)`;
   } else {
      document.title = 'Document';
   }
}, 1000);

function stopNotification() {
   isDisplayingNotification = false;

   clearInterval(intervalId);
   document.title = 'Document';
}
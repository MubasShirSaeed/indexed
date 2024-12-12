
const spam = document.querySelector(".spam");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
       currentTab = tabs[0];
       currenturl = currentTab.url;
       chrome.tabs.create({ url: `https://www.google.com/search?q=site%3A${currenturl}` }); 
    //    fetch(currenturl)
    //    .then(response => {
    //        if (response.ok) {
    //            spam.textContent = ` is indexed`;
    //            spam.style.color = "green";
    //        } else {
    //            spam.textContent = ` is not indexed`;
    //            spam.style.color = "red";
    //        }
    //    })
    
});


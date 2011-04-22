zoterobiblatextoclipboard.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ zoterobiblatextoclipboard.showFirefoxContextMenu(e); }, false);
};

zoterobiblatextoclipboard.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-zoterobiblatextoclipboard").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { zoterobiblatextoclipboard.onFirefoxLoad(); }, false);

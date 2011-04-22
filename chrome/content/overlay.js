var zoterobiblatextoclipboard = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("zoterobiblatextoclipboard-strings");
  },

  onMenuItemCommand: function(e) {
    //var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
     //                             .getService(Components.interfaces.nsIPromptService);
   // promptService.alert(window, this.strings.getString("helloMessageTitle"),
     //                           this.strings.getString("helloMessage"));


var Zotero = Components.classes["@zotero.org/Zotero;1"]
				.getService(Components.interfaces.nsISupports)
				.wrappedJSObject;
var ZoteroPane = Components.classes["@mozilla.org/appshell/window-mediator;1"] 
                                .getService(Components.interfaces.nsIWindowMediator)
                                .getMostRecentWindow("navigator:browser")
                                .ZoteroPane;

var translatorObj = new Zotero.Translate.Export;
translatorObj.setTranslator('ba4cd274-f24e-42cf-8ff2-ccfc603aacf3');
translatorObj.setItems(ZoteroPane.getSelectedItems());
translatorObj.setHandler("done", _copyToClipboard);
translatorObj.translate(); 
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    zoterobiblatextoclipboard.onMenuItemCommand(e);
  }
};
function _copyToClipboard(obj, worked) { 
    if(!worked) {
	window.alert(Zotero.getString("fileInterface.exportError"));
    } else {
	Components.classes["@mozilla.org/widget/clipboardhelper;1"]
                           .getService(Components.interfaces.nsIClipboardHelper)
                           .copyString(obj.string.replace(/\r\n/g, "\n"));
    }
}

window.addEventListener("load", function () { zoterobiblatextoclipboard.onLoad(); }, false);

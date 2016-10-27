/**
 * @file:      隱性轉發所需要
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2016-10-27 20:14:26
 */

$(function() {
    document.domain = "menu.huar.love";
    var parent = window.parent.document;
    parent.title = document.title;
    var head = parent.getElementsByTagName('head')[0];
    cssURL = 'http://odflit039.bkt.clouddn.com/favicon.ico',
    linkTag = document.createElement('link');
    linkTag.href = cssURL;
    linkTag.setAttribute('rel', 'shortcut icon');
    head.appendChild(linkTag);
    // '<link rel="shortcut icon" href="http://odflit039.bkt.clouddn.com/favicon.ico">';
    console.log(parent);
});
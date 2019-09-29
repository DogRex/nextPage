function findPrevPageElem() {
    var prevPages = document.evaluate('//a[contains(text(),"上一页")]', document, null, XPathResult.ANY_TYPE, null)
    return prevPages.iterateNext()
}

function findNextPageElem() {
    var nextPages = document.evaluate('//a[contains(text(),"下一页")]', document, null, XPathResult.ANY_TYPE, null)
    return nextPages.iterateNext()
}

document.onkeydown = function (e) {
    var ctrlKey = e.ctrlKey || e.metaKey;
    var keyCode = e.keyCode || e.which || e.charCode;
    console.log(ctrlKey)
    console.log(keyCode)
    if (ctrlKey) {
        if (keyCode == 221) {
            var nextPageElem = findNextPageElem()
            if (nextPageElem) {
                nextPageElem.click()
            }
        } else if (keyCode == 219) {
            var prevPageElem = findPrevPageElem()
            if (prevPageElem) {
                prevPageElem.click()
            }
        }
    }
    return true;
}
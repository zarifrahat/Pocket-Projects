const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let ptag = document.createElement('p');
    ptag.innerHTML = string;
    if(htmlElement.children.length !== 0) {
        htmlElement.removeChild(htmlElement.children[htmlElement.children.length - 1])
    }
    htmlElement.appendChild(ptag);
};

htmlGenerator('Party Time.', partyHeader);
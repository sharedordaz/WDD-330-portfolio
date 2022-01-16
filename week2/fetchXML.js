fetch("code.xml")
  .then(response => response.text()) //instead of converting it into a json, we convert it into a text
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
   // console.log(xml);
    let paragraph = xml.getElementsByTagName('paragraph')[0];
    //* childNodes stores the pages breaks and the child tags in the XML paren
    let mytext = paragraph.childNodes[1].textContent;
    //console.log(mytext)
    let MyText = paragraph.childNodes[3].textContent;
    //console.log(MyText)
    let mytitle = xml.getElementsByTagName("mytitle")[0];
    let eChips = "eatingChips = " + mytitle.getAttribute("eatingChips");
    //console.log(eChips)

    let XMLfetchdiv = document.getElementById("XMLfetch");
    let text1 = document.createElement("p");
    let text2 = document.createElement("p");
    let text3 = document.createElement("p");
    text1.textContent = mytext;
    text2.textContent = MyText;
    text3.textContent = eChips

    XMLfetchdiv.appendChild(text1);
    XMLfetchdiv.appendChild(text2);
    XMLfetchdiv.appendChild(text3);

  })
  //* Another way to open the XML file
  //let request = new XMLHttpRequest
  //let request.open("GET", code.xml, true)
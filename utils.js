function addScript(template){
  var s = document.createElement("script");
  if(template.src){
    s.src = template.src;
  }
  if(template.textContent){
    s.textContent = template.textContent;
  }
  document.documentElement.appendChild(s);
}

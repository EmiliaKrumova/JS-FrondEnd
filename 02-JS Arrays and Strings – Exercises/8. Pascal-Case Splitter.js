function split(text){
    let textArr = text.split(/(?=[A-Z])/);
   
    console.log(textArr.join(", "));
}
split('SplitMeIfYouCanHaHaYouCantOrYouCan')
split('thisIsATrickyOne')
const cssStyles  = Object.keys(document.getElementsByTagName('html')[0].style) 
console.log(Object.keys(document.getElementsByTagName("html")[0]));
console.log(cssStyles);


export const  allCssStyles = ["mr","ml","mb","mt","pl","pr","pb","pt","paddingX","paddingY","px","py","my","mx","marginY","marginX"].concat(cssStyles)




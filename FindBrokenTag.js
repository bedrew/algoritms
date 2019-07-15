/**

Одна из задач на собеседовании, задача звучала примерно так: 
Напишите функцию которая проверит правильно ли вложены теги друг в друга. 
Если теги вложены не правильно вернуть первый не закрытый тег, если правильно то true

**/

function FindBrokenTag(str) { 
 
  const findTags = str => {
      let tags = []
      str.split('<').forEach( temp => {
          let tag = temp.split('>')[0]
          if ( tag[0] ){  
            tags.push(tag)
          }
      })
      return tags
  }
  
  const stackSort  = tags => {
      let stack = []
      
      let stackPop = (arr, el) => {
        if (arr.indexOf(el) != -1) arr.splice(arr.indexOf(el), 1);
        if (arr.indexOf(el) != -1) arr.splice(arr.indexOf(el), 1);
      }
      
      for ( let tag of tags ) {
          stack.push(tag.replace('/',''))
          if ( tag.includes('/') ) {
             stackPop( stack, tag.replace('/',''))
          }
      }
      return stack
  }  

  let result = stackSort( findTags( str ) )
  
  if ( result.length > 0 ) {
    return result[0]
  } else {
    return true
  }
  
}

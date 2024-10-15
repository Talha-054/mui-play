import { componentMapType } from "../componentMap/componentMap"


export const objToArr = (obj: componentMapType)=>{
      let output = []
      for (let key in obj){
            output.push({[key]: obj[key]})
      }
      return output
}
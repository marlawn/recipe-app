import { Recipes } from "./Recipes"


export const ScrollView = () => {
  return (
    <div className='bg-gray-400 h-5/6 max-h-full overflow-y-auto scroll'>
        <Recipes />
    </div>
  )
}

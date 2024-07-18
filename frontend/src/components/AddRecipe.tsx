

export const AddRecipe = ({ onToggleShowHome } : { onToggleShowHome: any}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50'>
        <div className="relative flex flex-col bg-red-300 w-1/2 h-5/6 justify-center rounded-3xl">
            <button onClick={onToggleShowHome} className='absolute top-0 right-0 m-6'>X</button>
            <p className='flex justify-center text-xl'>Name of Recipe:</p>
            <div className='flex justify-center'><input className='w-2/3 align-middle border-4 rounded-xl border-white' /></div>
            <p className='flex justify-center text-xl'>Description:</p>
            <div className='flex justify-center'><input className='w-2/3 align-middle border-4 rounded-xl border-white' /></div>
            <p className='flex justify-center text-xl'>Ingredients:</p>
            <div className='flex justify-center'><input className='w-2/3 align-middle border-4 rounded-xl border-white' /></div>
            <p className='flex justify-center text-xl'>Instructions:</p>
            <div className='flex justify-center'><input className='w-2/3 align-middle border-4 rounded-xl border-white' /></div>
            <button className='absolute bottom-0 right-0 left-0 m-6 font-bold text-red-800 text-2xl'>ADD</button>
        </div>
    </ div>
  )
}

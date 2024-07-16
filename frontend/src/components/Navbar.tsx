

export const Navbar = ({ onToggleShowHome } : { onToggleShowHome: any}) => {
  return (
    <div className="bg-gray-400 flex flex-row justify-between p-7">
        <div className='flex items-center font-bold text-white font-mono text-xl'>RECIPES</div>
        <button onClick={onToggleShowHome} className='flex items-center justify-center text-white font-bold text-2xl'>ADD</button>
    </div>
  )
}

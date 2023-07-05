export default async function Task3() {
  return(
    <div className='w-full h-screen bg-black'>
      <nav className='px-2 py-2 group relative w-60 m-auto'>
        <ul className='flex'>
          <li className='text-white cursor-pointer'>Our Works</li>
        </ul>
        <div className='bg-white rounded-lg mt-2 hidden group-hover:block '>
          <ul className='py-2 px-4'>
            <li className="cursor-pointer">UI UX Design</li>
            <li className="cursor-pointer">Web Development</li>
            <li className="cursor-pointer">Mobile Development</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
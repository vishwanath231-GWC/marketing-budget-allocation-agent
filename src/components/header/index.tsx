import LOGO from '@/assets/images/logo.svg';

const Header = () => {
  return (
    <div className='border-b border-gray-200 py-4 px-2 bg-white'>

      <div className='max-w-screen-xl mx-auto flex md:justify-between justify-center items-center md:flex-row flex-col '>
        <div className='w-full'>
          <img src={LOGO} className='w-54' alt="Logo" />
        </div>
        <div className='flex justify-center items-center text-center w-full'>
          <h1 className='text-xl font-bold'>Marketing Budget Allocation Agent</h1>
        </div>
        <div className='w-full'></div>
      </div>
    </div>
  )
}

export default Header;

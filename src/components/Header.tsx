import {Link} from 'react-router-dom';
export default function () {
  return (
    <header className='border border-red-600'>
      <h3 className='text-4xl'>성한건축사사무소</h3>
      <div className='flex justify-between mx-48 mt-7 mb-3'>
        <Link to='/'>
          <p className='hover:font-bold hover:text-xl p-1 rounded-md'>홈</p>
        </Link>
        <Link to='/menu1'>
          <p className='hover:font-bold hover:text-xl p-1 rounded-md'>메뉴1</p>
        </Link>
        <Link to='/menu2'>
          <p className='hover:font-bold hover:text-xl p-1 rounded-md'>메뉴2</p>
        </Link>
        <Link to='/menu3'>
          <p className='hover:font-bold hover:text-xl p-1 rounded-md'>메뉴3</p>
        </Link>
      </div>
    </header>
  );
}

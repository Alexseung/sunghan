import {architecture} from './Architecture';

export default function () {
  return (
    <>
      <div>설계한 예시들</div>
      <div className='grid grid-cols-3 gap-4 flex-grow'>
        {architecture.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center border p-2'
          >
            <img src={item.img} alt='' className='w-full h-32 object-cover' />
            <p className='mt-2 font-bold'>{item.name}</p>
            <p className='mt-1 text-sm my-2'>{item.content}</p>
            <button className='bg-gray-300 rounded-md'>상세페이지</button>
          </div>
        ))}
      </div>
    </>
  );
}

import {useNavigate} from 'react-router-dom';
import GoogleMap from './GoogleMap';
import {architecture} from './Architecture';

export default function () {
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/menu1/${name}`);
  };

  return (
    <>
      <div className='border border-blue-500 flex items-center justify-center'>
        <img src='/mainImage1.jpg' alt='메인 사진' className='w-fit h-80 m-5' />
        <p>
          여기는 건축사사무소라는 것을 보여줄 수 있는 사진 들어갈자리. 용도변경
          등의 업무도 한다는 것을 그냥 큰 글로 적어서 사진으로 넣어도 괜찮음
        </p>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 bg-blue-500 p-4'>
          설계한 예시들, 그냥 무작위 몇개 보여줘도 괜찮고 대표적인거 몇개
          보여주기
          <ol>
            {architecture.map((item, index) => (
              <li key={index} onClick={() => handleClick(item.name)}>
                {item.name}
              </li>
            ))}
          </ol>
        </div>

        <GoogleMap setCss='col-span-1 bg-green-500 border-black w-80 h-80' />
      </div>
    </>
  );
}

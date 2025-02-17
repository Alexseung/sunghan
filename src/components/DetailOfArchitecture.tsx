import {useParams} from 'react-router-dom';
export default function () {
  const {name} = useParams();
  return (
    <>
      <div>클릭한 건물에 대한 설명이 더 자세하게 화면에 표시됨</div>
      <div>{name}</div>
      <p></p>
    </>
  );
}

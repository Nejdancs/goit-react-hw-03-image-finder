import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots color="#3f51b5" height={80} width={80} />
    </Wrapper>
  );
};

export default Loader;

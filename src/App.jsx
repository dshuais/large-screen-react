// import { FullScreenContainer } from '@jiaminghi/data-view-react';
import FullScreenContainer from '@jiaminghi/data-view-react/lib/fullScreenContainer';
import Loading from '@jiaminghi/data-view-react/lib/loading';
// import BorderBox1 from '@jiaminghi/data-view-react/lib/borderBox1';

import './App.scss';

export default function App() {

  return (
    <FullScreenContainer>
      <Loading>加载中...</Loading>
    </FullScreenContainer>
  );
}

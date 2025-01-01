import { ReactNode } from 'react';
import NavigationBar from '../components/navigationbar';

type LayoutProps = {
  headerComponent: ReactNode; // Header 컴포넌트
  children: ReactNode; // 여러 개의 Main 컴포넌트를 포함할 수 있음
};

const BasicLayout: React.FC<LayoutProps> = ({ headerComponent, children }) => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="h-full p-5 overflow-auto">
        {headerComponent}
        <main className="w-full h-4/5 flex flex-col gap-10">{children}</main>
      </div>
      <NavigationBar />
    </div>
  );
};

export default BasicLayout;

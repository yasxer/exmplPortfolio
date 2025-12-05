interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <Container className={`${className}`}>
      {children}
    </Container>
  );
};

export default Container;

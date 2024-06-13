import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        classNames(
          'mx-auto px-[10px] tablet:container tablet:px-[20px] desktop:px-[40px]',
          className,
        ),
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

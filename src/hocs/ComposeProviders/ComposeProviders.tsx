import React from 'react';

interface Props {
  providers: Array<
    React.JSXElementConstructor<React.PropsWithChildren<unknown>>
  >;
  children: React.ReactNode;
}

export const ComposeProviders = React.memo((props: Props) => {
  const { providers = [], children } = props;

  return (
    <>
      {providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
});

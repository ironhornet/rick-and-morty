import React, { memo } from 'react';
import { IComposeProviders } from './composeProviders.interface';

export const ComposeProviders = memo((props: IComposeProviders) => {
  const { providers = [], children } = props;

  return (
    <>
      {providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
});

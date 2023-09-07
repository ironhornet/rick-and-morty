import { IComposeProviders } from './composeProviders.interface';

export const ComposeProviders = <P extends {}>(props: IComposeProviders<P>) => {
  const { providers, children } = props;

  return (
    <>
      {providers.reduceRight((acc, [Provider, providerProps]) => {
        return <Provider {...providerProps}>{acc}</Provider>;
      }, children)}
    </>
  );
};

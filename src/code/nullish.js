export const nullish = () => {
  const product = {
    name: 'Coke',
    price: 10,
    provider: {
      name: 'Wailkk',
      address: 'Fake Street',
      state: {
        id: 1,
        name: 'Florida',
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      orders: null,
      fPrice: (x) => 100,
    },
  };

  //Old way
  const providerCountry = product.provider
    ? product.provider.name
      ? product.provider.name
      : null
    : null;

  //Nullish Coalsencing Operator Way
  //If the value is null then this option it will not works.
  const _providerCountry = product.provider.name ?? undefined;

  //Not work if the value is null
  const providerOrders = product.provider.orders ?? 1;
  // Should be null.  [Error]

  // Nullish not defined.
  const providerNotDefined = product.provider.notDefined ?? null;

  //Trick: chaining Operator
  const providerAddress = product?.provider?.address;

  //It works with Dynamic properties.
  const propertyName = 'price';
  const productPrice = product?.[propertyName]?.explore;

  //Works with Functions too.
  const productProviderPrice = product?.provider?.fPrice?.('x');
  //Result: 100;

  const _productProviderPrice = product?.provider?.fPricex?.('x');
  //Result: undefined

  console.log('ProductProviderPrice = ', productProviderPrice);

  return {
    providerCountry: providerCountry,
    nullish: _providerCountry,
    providerAddress,
    providerOrders,
    providerNotDefined,
    _productProviderPrice,
    productPrice,
  };
};

export default nullish;

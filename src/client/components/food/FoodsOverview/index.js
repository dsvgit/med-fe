import React from 'react';

import BaseLayout from 'src/client/containers/layouts/BaseLayout';
import FoodsOverview from 'src/common/components/food/FoodsOverview';


export default props => {
  return (
    <BaseLayout>
      <FoodsOverview {...props} />
    </BaseLayout>
  );
}

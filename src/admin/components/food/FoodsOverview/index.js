import React from 'react';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';
import FoodsOverview from 'src/common/components/food/FoodsOverview';


export default props => {
  return (
    <BaseLayout>
      <FoodsOverview {...props} />
    </BaseLayout>
  );
}

import React from 'react';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';
import FoodsEditor from 'src/common/components/food/FoodsEditor';


export default props => {
  return (
    <BaseLayout>
      <FoodsEditor {...props} />
    </BaseLayout>
  );
}

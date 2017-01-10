import React, {
  PropTypes,
} from 'react';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';

const DashboardOverview = (props) => {
  return (
    <BaseLayout>
      <div>
        <span>Для начала работы выбирете нужный пункт меню в сайдбаре.</span>
      </div>
    </BaseLayout>
  );
};

export default DashboardOverview;

import React from 'react';

import BaseLayout from 'src/client/containers/layouts/BaseLayout';
import ResultsLinearStatistics from 'src/client/containers/dashboard/ResultsLinearStatistics';


const DashboardOverview = (props) => {
  return (
    <BaseLayout>
      <div>
        <span>Для начала работы выбирете нужный пункт меню в сайдбаре.</span>
        <ResultsLinearStatistics />
      </div>
    </BaseLayout>
  );
};

export default DashboardOverview;

import React, {
  PropTypes,
} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';

const ManageOverview = (props) => {
  let {
    importFoods
    } = props;

  return (
    <BaseLayout>
      <div>
        <span>Будте внимательны! После изменений некоторые данные могут быть потеряны.</span>
        <br />
        <br />
        <RaisedButton
          label="Импорт продуктов"
          primary={true}
          onClick={importFoods}
        />
      </div>
    </BaseLayout>
  );
};

export default ManageOverview;

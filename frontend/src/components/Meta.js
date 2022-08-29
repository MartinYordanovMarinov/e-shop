import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Добре дошли в ПЛАМ магазин',
  description: 'При нас можете да намерите необходимите ви продукти',
  keywords: 'електроника',
};

export default Meta;

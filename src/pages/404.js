import React from 'react';
import { history } from 'umi';
import { Result, Button } from 'antd';

const Result404 = () => (
  <div className="wrapper404">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => history.push('/recommend')}>Back Home</Button>}
    />
  </div>
);

/**
 * 把404.jsx 改成 [any].jsx, 保证在生成的路由在最后一项
 * 覆盖页面属性的 path 为 undefined, 达到生成的routes里没有path的目的
 */

// Result404.path = undefined;

export default Result404;

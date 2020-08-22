import * as Sentry from '@sentry/react';

import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

export default () => {
  LogRocket.init('6ayqi7/vocallytest', {
    release: 'RELEASE',
  });
  setupLogRocketReact(LogRocket);

  Sentry.init({ dsn: 'https://ffe439ac65b84889a37518037a23a7b1@o433557.ingest.sentry.io/5388917' });
};

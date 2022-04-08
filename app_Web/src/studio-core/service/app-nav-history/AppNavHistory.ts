import { SingletonMode } from '../../decorators/SingletonMode';
import { AppNavHistoryBase } from './AppNavHistoryBase';

/**
 * 应用导航记录
 *
 * @export
 * @class AppNavHistory
 * @extends {AppNavHistoryBase}
 */
@SingletonMode()
export class AppNavHistory extends AppNavHistoryBase {}

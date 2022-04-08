import { SingletonMode } from '../../decorators/SingletonMode';
import { AppServiceBase } from './AppServiceBase';

/**
 * 应用级服务
 *
 * @export
 * @class AppService
 */
@SingletonMode()
export class AppService extends AppServiceBase {}

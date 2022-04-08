import { SingletonMode } from '../../decorators/SingletonMode';
import { AppContextStoreBase } from './AppContextStoreBase';

/**
 * 全局上下文仓库
 *
 * @export
 * @class AppContextStore
 * @extends {AppContextStoreBase}
 */
@SingletonMode()
export class AppContextStore extends AppContextStoreBase {}

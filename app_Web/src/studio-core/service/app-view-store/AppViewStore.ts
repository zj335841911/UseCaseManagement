import { SingletonMode } from '@/studio-core/decorators/SingletonMode';
import { AppViewStoreBase } from './AppViewStoreBase';

/**
 * 应用视图仓库
 *
 * @export
 * @class AppViewStore
 * @extends {AppViewStoreBase}
 */
@SingletonMode()
export class AppViewStore extends AppViewStoreBase {}

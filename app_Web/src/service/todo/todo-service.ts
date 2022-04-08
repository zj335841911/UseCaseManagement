import { Http } from '@/utils';
import { Util } from '@/utils';
import TodoServiceBase from './todo-service-base';


/**
 * 待办服务对象
 *
 * @export
 * @class TodoService
 * @extends {TodoServiceBase}
 */
export default class TodoService extends TodoServiceBase {

    /**
     * Creates an instance of  TodoService.
     * 
     * @param {*} [opts={}]
     * @memberof  TodoService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}
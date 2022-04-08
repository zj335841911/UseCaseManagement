import { Http } from '@/utils';
import { Util } from '@/utils';
import FileServiceBase from './file-service-base';


/**
 * 附件服务对象
 *
 * @export
 * @class FileService
 * @extends {FileServiceBase}
 */
export default class FileService extends FileServiceBase {

    /**
     * Creates an instance of  FileService.
     * 
     * @param {*} [opts={}]
     * @memberof  FileService
     */
    constructor(opts: any = {}) {
        super(opts);
    }


}
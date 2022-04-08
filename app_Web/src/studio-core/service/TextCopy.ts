/**
 * 文本拷贝服务
 *
 * @export
 * @class TextCopy
 */
export class TextCopy {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @type {TextCopy}
     * @memberof TextCopy
     */
    private static readonly instance: TextCopy = new TextCopy();

    /**
     * 输出框
     *
     * @protected
     * @type {HTMLInputElement}
     * @memberof TextCopy
     */
    protected input!: HTMLInputElement;

    /**
     * Creates an instance of TextCopy.
     * @memberof TextCopy
     */
    constructor() {
        if (TextCopy.instance) {
            return TextCopy.instance;
        }
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof TextCopy
     */
    protected init(): void {
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.style.position = 'absolute';
        this.input.style.left = '-9999px';
        document.body.appendChild(this.input);
    }

    /**
     * 拷贝内容到粘贴板
     *
     * @param {string} text
     * @returns {boolean}
     * @memberof TextCopy
     */
    public copy(text: string): boolean {
        this.input.value = text;
        this.input.select();
        const judge = document.execCommand('copy');
        if (judge === true) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 漂浮文本
     *
     * @param {string} text
     * @memberof TextCopy
     */
    public floatText(e: MouseEvent, text: string): void {
        const div: HTMLDivElement = document.createElement('div');
        div.className = 'dynamic-model-copy-float-text';
        div.innerText = text;
        div.style.top = e.pageY + 'px';
        div.style.left = '-1000px';
        document.body.appendChild(div);

        setTimeout(() => {
            div.style.top = e.pageY - 100 + 'px';
            div.style.left = (e.pageX <= 200 ? e.pageX + 200 : e.pageX) - div.offsetWidth + 'px';
            div.style.opacity = '0';

            setTimeout(() => {
                document.body.removeChild(div);
            }, 3000);
        }, 1);
    }

    /**
     * 获取实例
     *
     * @static
     * @returns {TextCopy}
     * @memberof TextCopy
     */
    public static getInstance(): TextCopy {
        return TextCopy.instance;
    }
}

export const textCopy = TextCopy.getInstance();

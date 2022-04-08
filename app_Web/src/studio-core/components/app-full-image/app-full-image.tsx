import { Component, Vue, Prop } from 'vue-property-decorator';
import './app-full-image.less';

@Component({})
export default class AppFullImage extends Vue {

    /**
     * 图片路径
     *
     * @type {string}
     * @memberof AppFullImage
     */
    @Prop() public src!: string;

    /**
     *
     *
     * @type {*}
     * @memberof AppFullImage
     */
    @Prop() public alt!: any;

    /**
     * 显示模态
     *
     * @type {boolean}
     * @memberof AppFullImage
     */
    public showModal: boolean = false;

    /**
     * 绘制内容
     *
     * @returns
     * @memberof AppFullImage
     */
    public render() {
        return (<div>
            <img src={this.src} alt={this.alt} on-click={() => this.showModal = true} />
            <div class="img-modal" v-show={this.showModal}>
                <img on-click={() => this.showModal = false} src={this.src} alt={this.alt} class='thum-img'/>
            </div>
        </div>);
    }
}
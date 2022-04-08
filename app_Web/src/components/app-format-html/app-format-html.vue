<template>
    <div class="app-format-html" ref="appFormatHtml">
        <span v-html="value"></span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class AppFormatHtml extends Vue {
    
    /**
     * 渲染值
     *
     * @type {string}
     * @memberof AppFormatHtml
     */
    @Prop() public value!: string;

    /**
     * 界面行为标识
     *
     * @type {Array<any>}
     * @memberof AppFormatHtml
     */
    @Prop() public tags!: Array<any>;

    /**
     * 所有数据
     *
     * @type {*}
     * @memberof AppFormatHtml
     */
    @Prop() public data!: any;

    /**
     * 回调
     *
     * @type {*}
     * @memberof AppFormatHtml
     */
    @Prop() public callback!:any;

    /**
     * 渲染完成 
     *
     * @memberof AppFormatHtml
     */
    public mounted(){
        if(this.tags && this.tags.length >0){
            for(let i =0;i<this.tags.length;i++){
                let tag:string = this.tags[i];
                let targetElement:any = (document as any).getElementById(`${tag}&${this.data.srfkey}`);
                console.log(`${tag}&${this.data.srfkey}`);
                if(targetElement){
                    targetElement.addEventListener("click", ($event:any) =>{
                        if(this.callback && this.callback instanceof Function){
                            this.callback(this.data,tag,$event)
                        }
                    });
                }
            }
            
            
        }
    }


}
</script>

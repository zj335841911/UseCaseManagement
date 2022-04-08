<template>
  <el-table
    v-if="isDisplay === true"
    size="mini"
    style="width: 100%; margin-bottom: 20px"
    row-key="id"
    default-expand-all
    ref="multipleTable"
    :border="isDragendCol"
    :highlight-current-row="isSingleSelect"
    :row-class-name="getRowClassName.bind(_self)"
    :cell-class-name="getCellClassName.bind(_self)"
    :height="tableHeight"
    :data="renderItems"
    :tree-props="{ children: 'children' }"
    :show-header="!isHideHeader"
    @row-click="rowClick($event)"
    @select-all="selectAll($event)"
    @select="select($event)"
    @row-class-name="onRowClassName($event)"
    @row-dblclick="rowDBLClick($event)"
  >
    <!-- <template slot="empty">
      无数据
      <span class="quick-toolbar"> </span>
    </template> -->

    <el-table-column label="编号" type="index" align="center" width="50">
    </el-table-column>

    <template v-if="!isSingleSelect">
      <el-table-column
        align="center"
        type="selection"
        :width="checkboxColWidth"
      ></el-table-column>
    </template>

    <template v-if="getColumnState('desc')">
      <el-table-column
        show-overflow-tooltip
        :prop="'desc'"
        :label="
          $t('entities.ibzcasestep.main_rowedit_carryout_grid.columns.desc')
        "
        :width="150"
        :align="'left'"
      >
        <template slot="header">
          <span class="column-header">
            {{
              $t("entities.ibzcasestep.main_rowedit_carryout_grid.columns.desc")
            }}
          </span>
        </template>
        <template v-slot="{ row }">
          <span>{{ row.desc }}</span>
        </template>
      </el-table-column>
    </template>

    <template v-if="getColumnState('expect')">
      <el-table-column
        show-overflow-tooltip
        :prop="'expect'"
        :label="
          $t('entities.ibzcasestep.main_rowedit_carryout_grid.columns.expect')
        "
        :min-width="0"
        :align="'left'"
      >
        <template slot="header">
          <span class="column-header">
            {{
              $t(
                "entities.ibzcasestep.main_rowedit_carryout_grid.columns.expect"
              )
            }}
          </span>
        </template>
        <template v-slot="{ row }">
          <span>{{ row.expect }}</span>
        </template>
      </el-table-column>
    </template>

    <template v-if="getColumnState('steps')">
      <el-table-column
        show-overflow-tooltip
        :prop="'steps'"
        :label="
          $t('entities.ibzcasestep.main_rowedit_carryout_grid.columns.steps')
        "
        :width="150"
        :align="'left'"
        :sortable="'custom'"
      >
        <template slot="header">
          <span class="column-header">
            {{
              $t(
                "entities.ibzcasestep.main_rowedit_carryout_grid.columns.steps"
              )
            }}
          </span>
        </template>
        <template v-slot="{ row, column, $index }">
          <template v-if="actualIsOpenEdit">
            <app-form-item
              :error="gridItemsModel[$index][column.property].error"
            >
              <dropdown-list
                v-show="row.type != 'group'"
                v-model="row[column.property]"
                :disabled="row.srfuf === 1 ? (3 & 2) !== 2 : (3 & 1) !== 1"
                :data="row"
                :context="context"
                :viewparams="viewparams"
                :localContext="{}"
                :localParam="{}"
                tag="Testresult__result"
                codelistType="STATIC"
                placeholder="请选择..."
                style=""
                @change="
                  ($event) => {
                    gridEditItemChange(row, column.property, $event, $index);
                  }
                "
              >
              </dropdown-list>
            </app-form-item>
          </template>
          <template v-if="!actualIsOpenEdit">
            <codelist
              :value="row.steps"
              tag="Testresult__result"
              codelistType="STATIC"
            ></codelist>
          </template>
        </template>
      </el-table-column>
    </template>

    <template v-if="getColumnState('reals')">
      <el-table-column
        show-overflow-tooltip
        :prop="'reals'"
        :label="
          $t('entities.ibzcasestep.main_rowedit_carryout_grid.columns.reals')
        "
        :width="200"
        :align="'left'"
        :sortable="'custom'"
      >
        <template slot="header">
          <span class="column-header">
            {{
              $t(
                "entities.ibzcasestep.main_rowedit_carryout_grid.columns.reals"
              )
            }}
          </span>
        </template>
        <template v-slot="{ row, column, $index }">
          <template v-if="actualIsOpenEdit">
            <app-form-item
              :error="gridItemsModel[$index][column.property].error"
            >
              <input-box
                v-show="row.type != 'group'"
                :disabled="row.srfuf === 1 ? (3 & 2) !== 2 : (3 & 1) !== 1"
                v-model="row[column.property]"
                style=""
                type="text"
                @change="
                  ($event) => {
                    gridEditItemChange(row, column.property, $event, $index);
                  }
                "
              >
              </input-box>
            </app-form-item>
          </template>
          <template v-if="!actualIsOpenEdit">
            <app-span
              name="reals"
              editorType="TEXTBOX"
              :value="row.reals"
              dataType="TEXT"
              precision="0"
            ></app-span>
          </template>
        </template>
      </el-table-column>
    </template>

    <template v-if="adaptiveState">
      <el-table-column></el-table-column>
    </template>
  </el-table>
</template>
<script lang='tsx'>
import { Component } from "vue-property-decorator";
import { VueLifeCycleProcessing, Watch } from "@/studio-core";
import { Main_RowEdit_CarryOutGridBase } from "./main-row-edit-carry-out-grid-base";

/**
 * grid部件
 *
 * @export
 * @class Main_RowEdit_CarryOutGrid
 * @extends {Main_RowEdit_CarryOutGridBase}
 */
@Component({
  components: {},
})
@VueLifeCycleProcessing()
export default class Main_RowEdit_CarryOutGrid extends Main_RowEdit_CarryOutGridBase {
  /**
   * el-table渲染数据
   *
   * @type {Array<any>}
   * @memberof Main_RowEdit_CarryOutGrid
   */
  public renderItems: Array<any> = [];

  @Watch("items")
  public itemsWatch(newVal: any, oldVal: any) {
    if (newVal) {
      this.renderItems.length = 0;
      if (newVal.length === 0) {
        this.renderItems.push({
          case: "",
          desc: "",
          expect: "",
          files: null,
          filter: null,
          ibzcasestep: "",
          id: "",
          page: null,
          parent: "0",
          query: null,
          reals: null,
          runid: null,
          size: null,
          sort: null,
          srfdataaccaction: "",
          srffrontuf: null,
          srfkey: "",
          srfmajortext: "",
          srfparentdata: null,
          srfuf: "",
          steps: null,
          type: "step",
          version: null,
        });
        this.gridItemsModel.push(this.getGridRowModel());
      } else {
        // 初始化展示数组
        this.setRenderItems(newVal);
        // 处理子项
        this.handleChildren(newVal);
      }
    }
  }

  /**
   * 初始化渲染数据
   * @memberof Main_RowEdit_CarryOutGrid
   */
  public setRenderItems(items: any) {
    // 展示数组添加步骤项、分组项
    items.forEach((item: any) => {
      // 步骤项添加进展示数组
      if (item.type === "step") {
        this.renderItems.push(item);
      }

      // 分组项添加children字段再添加进展示数组
      if (item.type === "group") {
        this.renderItems.push(Object.assign({ ...item }, { children: [] }));
      }
    });
  }

  /**
   * 处理子项
   * @memberof Main_RowEdit_CarryOutGrid
   */
  public handleChildren(items: any) {
    items.forEach((item: any) => {
      this.renderItems.forEach((renderCurr: any) => {
        if (item.type === "item" && item.parent === renderCurr.id) {
          renderCurr.children.push(item);
        }
      });
    });
  }
}
</script>

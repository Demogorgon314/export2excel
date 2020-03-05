## JavaScript 实现导出 Excel 插件

## Excel 导出

Excel 的导入导出都是依赖于[js-xlsx](https://github.com/SheetJS/js-xlsx)来实现的。

在 `js-xlsx`的基础上又封装了[Export2Excel.js](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/vendor/Export2Excel.js)来方便导出数据。

### 使用
所有依赖已经打包到 `export2excel.js` 中
```html
<script src="dist/js/export2excel.js"></script>
```
### 参数

| 参数      | 说明                   | 类型    | 可选值                                                                              | 默认值     |
| --------- | ---------------------- | ------- | ----------------------------------------------------------------------------------- | ---------- |
| header    | 导出数据的表头         | Array   | /                                                                                   | []         |
| data      | 导出的具体数据         | Array   | /                                                                                   | []         |
| filename  | 导出文件名             | String  | /                                                                                   | excel-list |
| autoWidth | 单元格是否要自适应宽度 | Boolean | true / false                                                                        | true       |
| bookType  | 导出文件类型           | String  | xlsx, csv, txt, [more](https://github.com/SheetJS/js-xlsx#supported-output-formats) | xlsx       |

### 示例
1、json 导出到 Excel 
```js
Export2Excel().export_json_to_excel({
    header: tHeader, //表头 必填
    data: data,  //具体数据(注意: 必须为数组格式，否则导致死循环) 必填
    filename: 'export-excel', //非必填
    autoWidth: true,  //是否自适应宽度 非必填
    bookType: 'xlsx' //导出文件格式 非必填
});
```

2、table 导出到 Excel
```js
Export2Excel().export_table_to_excel('table-id')  // table-id 换成 table 的 id
```

import { ExcelComponent } from "../../ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../dom";
import { tableResize } from "./tableResize";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mouseup', 'mousemove']
    })
  }

  toHTML() {
    return createTable();
  }

  onClick(e) {
    console.log(e.target.dataset.resize)
    
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      tableResize(this.$root, e)
    }
  }

  onMousemove() {
    
  }

  onMouseup() {
   
  }
}

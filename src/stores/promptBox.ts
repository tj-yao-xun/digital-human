import {ElMessageBox} from 'element-plus'
import {h} from "vue";

class PromptBox {
  // 错误提示框
  errorPromptBox(title: string, message: string): void {
    ElMessageBox({
      title: title,
      message: h('span', {style: 'color:red'}, message)
    })
  }
}

export default new PromptBox()

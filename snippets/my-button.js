/*
 * @Author: Allen Yeh poe1599@gmail.com
 * @Date: 2024-11-11 00:05:03
 * @LastEditors: Allen Yeh poe1599@gmail.com
 * @LastEditTime: 2024-11-11 00:11:44
 * @FilePath: \web-component-lecture\snippets\my-button.ts
 * @Description: web component 簡易範例
 * 注意改動檔案時須同步更新到簡報內容
 */
class MyButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: var(--button-bg, #333);
          color: var(--button-color, #fff);
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background: var(--button-bg-hover, #666);
        }
      </style>
      <button part="btn"><slot></slot></button>
    `
  }
}

customElements.define('my-button', MyButton)

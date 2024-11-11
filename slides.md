---
theme: default
title: Web Components 簡介
info: 
description: 為設計師與前端工程師介紹 Web Components 的核心概念與應用
drawings:
  persist: false
mdc: true
overviewSnapshots: true
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code
defaults:
  preload: true
  image: /images/banner1.jpeg
transition: fade
background: /images/cover1.jpeg
---

# Web Components 簡介

了解 Web Components 如何改變前端組件的製作與使用方式

<style>
  h1 {
    margin-top: 15rem;
    color: rgba(256, 256, 256, 0.9);
    position: relative;
  }

  p {
    margin: 1rem 0 !important;
  }
</style>

---
layout: with-image
left: true
---

## 為什麼要了解 Web Components？

- **設計師的好處**
  - 樣式隔離：不受應用樣式影響，讓設計一致
  - 組件重用：跨不同專案與框架共享 UI 元件
  - 支持 CSS 自訂屬性，便於靈活設計

- **前端工程師的好處**
  - 封裝性：清晰的模組結構，方便維護
  - 標準化：可在任意框架中使用，提升開發效率
  - 簡化樣式管理，減少樣式衝突

---

## 什麼是 Web Components?

- **Web Components** 是一組瀏覽器內建的 API，允許創建可重用的自定義 HTML 元件。
- 由三大核心技術構成。

<!-- 
Web Components 是一組由瀏覽器原生支持的技術，讓開發者可以自行創建可重用的 HTML 元素。它們不依賴於框架，且可以在任何應用中使用（例如 Vue、React、Angular 或純 HTML 網頁）。
 -->

---
layout: with-image
---

## Web Components 的三大核心技術

1. **Custom Elements**
   - 創建自定義 HTML 元素，通過 `customElements.define()` 註冊
   - 支持定義可重用的組件，如 `<my-button>` 或 `<user-card>`

2. **Shadow DOM**
   - 隔離組件內部樣式與結構，避免外部樣式干擾
   - 使用 `this.attachShadow({ mode: 'open' })` 設置樣式隔離

3. **HTML Templates**
   - 透過 `<template>` 標籤定義預製的 HTML 樣板
   - 支援批次生成內容、延遲渲染

<!-- 
1. **Custom Elements**：可以定義新的 HTML 元素，並賦予其自定義的行為。使用 JavaScript 的 `class` 語法和 `customElements.define()` 方法來創建和註冊自定義元素。例如，定義 `<my-element>` 這樣的自定義標籤。

2. **Shadow DOM**：為 Web Components 提供了一個隔離的 DOM 範圍，使內部結構與樣式不會與外部發生衝突。這樣，開發者可以確保元件的樣式和功能不會受到頁面其他部分的影響，並提高元件的封裝性。

3. **HTML Templates**：使用 `<template>` 標籤定義一組靜態的 HTML 模板，這些模板可以在需要時動態複製到文檔中。`<template>` 元素的內容在初始化時不會渲染，但可以通過 JavaScript 來插入或使用。
 -->

---

## 為什麼會發展出 Web Components？

- 解決不同框架之間組件不可互通的問題
- 提供瀏覽器層級的標準化組件，促進跨框架重用
- 提供樣式隔離和封裝，減少樣式和功能的衝突
- 降低前端開發對特定框架的依賴

---

## Web Components 的優點

- **高可重用性**：Web Components 提供了一種標準化的方式來構建可重用的組件，減少重複代碼。
- **封裝性強**：使用 Shadow DOM 可以將組件的樣式和行為封裝起來，不會影響到其他部分。
- **跨框架兼容**：可以在不同的框架（如 React、Vue、Angular）中使用，增加了靈活性。
- **標準化**：基於瀏覽器標準，不需要依賴第三方庫。
- **高內聚，低耦合**：組件內部高度內聚，與外部低耦合，便於維護。

---

## Web Components 的缺點：

- **性能問題**：由於封裝特性，可能會導致性能問題或與其他庫的衝突。
- **學習曲線**：對於不熟悉 Web Components 的開發者來說，可能需要一些時間來學習和適應。
- **SEO 問題**：在某些情況下，使用 Web Components 可能會影響 SEO，特別是在缺少 JavaScript 或 Web API 的情況下。
- **Shadow DOM 限制**：雖然 Shadow DOM 提供了封裝性，但在需要從外部訪問內部 DOM 或樣式時，可能會遇到困難。
- ~~**瀏覽器兼容性**：某些舊版瀏覽器可能需要 polyfill 來支持 Web Components。~~

<!-- 
- **樣式覆寫與自訂困難**

  - **全局樣式影響減少**
  Shadow DOM 的樣式隔離讓全局樣式（如重置樣式、主題樣式）無法應用到組件內部，造成統一品牌或主題設計的困難。
  - **有限的自訂能力**
  外部無法輕易覆寫組件內部樣式，即便使用 CSS 自訂屬性和 `::part`，仍然無法完全控制 Shadow DOM 內部樣式。

- **跨框架或第三方工具整合難度**

  - **框架與工具整合挑戰**
  某些第三方工具（如 CSS-in-JS 或設計系統的樣式管理）無法影響 Shadow DOM 內樣式，造成設計系統集成困難。ex: UnoCss
  - **設計系統適應性較低**
  設計系統中的統一樣式無法直接套用到每個 Web Component，需要為隔離的 Shadow DOM 樣式做額外的適配處理。
  - **無法利用框架提供的狀態管理** 
  現代前端框架大多都提供框架內的狀態管理，能簡易快速的處理資訊與事件，web component 則需要自行實現這些功能。
 -->

---
zoom: 0.9
---

## Web Components UI Library vs. 特定框架下的 UI Library

| 特性                  | **Web Components UI Library**                          | **特定框架下的 UI Library**                |
|-----------------------|--------------------------------------------------------|-------------------------------------------|
| **跨框架使用**       | 可以在任意框架或無框架的情況下使用                       | 只能在特定框架中使用                       |
| **樣式隔離**         | 預設使用 Shadow DOM，具備樣式隔離                        | 依賴框架的樣式方案，無內建隔離             |
| **覆寫與自訂樣式**   | 樣式覆寫較複雜，需使用 `::part` 或 CSS 自訂屬性          | 通常可以直接覆寫樣式，支持全局樣式影響     |
| **開發和維護成本**   | 一次編寫，多處使用，重用性高                              | 需為每個框架分別編寫版本，維護成本高       |
| **生態系統整合**     | 部分第三方工具支援不足，如 CSS-in-JS 或框架特有工具       | 完全與框架整合，支持完整的工具鏈          |
| **設計系統支援**     | 全局樣式難以直接套用到隔離的 Shadow DOM，整合較複雜       | 設計系統和主題通常與框架直接整合           |
| **社群和資源**       | 社群較小，資源和工具相對較少                              | 框架內資源和社群豐富，資源較多             |

<!-- 
其他

| 特性                  | Web Components UI Library                              | 特定框架下的 UI Library                    |
|-----------------------|--------------------------------------------------------|-------------------------------------------|
| **學習曲線**         | 需學習 Shadow DOM、Custom Elements 等 API                | 依賴框架特性，學習成本較低                 |
| **效能**             | 隔離樣式和組件可能增加 DOM 負擔，需優化                  | 框架有統一的虛擬 DOM 管理，性能優化較簡單 |
| **動態樣式支持**     | 動態樣式管理較複雜，需手動監控和更新 Shadow DOM 樣式      | 通常可以利用框架的狀態管理來更新樣式       |
| **複用性與封裝性**   | 高度封裝，避免樣式和邏輯的意外衝突                        | 通常封裝性較弱，但更靈活，便於自訂         |
| **瀏覽器支援**       | 原生支援，但在舊瀏覽器可能需 Polyfill                     | 依賴框架支援，無需關注瀏覽器差異           |
| **更新頻率**         | 標準較穩定，更新速度慢                                   | 框架和 UI Library 更新頻繁                 |
 -->

---
layout: with-image
left: true
---

## Web Components 的適用情境

- 設計一致性需求高：在多個應用中共用設計風格
- 跨框架需求：需要支援多個技術棧的專案
- 樣式調整：支持自訂屬性控制，快速調整設計

---
layout: two-cols
---

## Web Components 範例

- 創建一個按鈕組件

- 使用按鈕組件

```html
<ex-button1>Click Me!</ex-button1>
```

<ex-button1>Click Me!</ex-button1>

::right::

```js {monaco-run}
class ExButton1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: var(--button-bg, #14b8a6);
          color: var(--button-color, #fff);
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background: var(--button-bg-hover, #0f766e);
        }
      </style>
      <button part="btn"><slot></slot></button>
    `;
  }
}

customElements.define('ex-button1', ExButton1);
```

---

## 外部樣式控制

- 方法一：CSS variables

```html
<style>
  .A-button {
    --button-bg: coral;
    --button-bg-hover: orange;
  }
</style>

<ex-button1 class="A-button">變色按鈕</ex-button1>
```

<style>
  .A-button {
    --button-bg: coral;
    --button-bg-hover: orange;
  } 
</style>

<ex-button1 class="A-button">變色按鈕</ex-button1>

---

## 外部樣式控制

- 方法二：使用 `::part` 選擇器

```html
<style>
  .B-button::part(btn) {
    padding: 8px 12px;
    border-radius: 0;
    outline: 4px solid lightgreen;
  }
</style>

<ex-button1 class="B-button">變型按鈕</ex-button1>
```

<style>
  .B-button::part(btn) {
    padding: 8px 12px;
    border-radius: 0;
    outline: 4px solid lightgreen;
  }
</style>

<ex-button1 class="B-button">變型按鈕</ex-button1>

---
layout: two-cols
---

```js {monaco-run}
class ExButton2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['background'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const background = this.getAttribute('background') || 'green';
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: ${background};
          color: white;
        }
      </style>
      <button><slot></slot></button>
    `;
  }
}

customElements.define('ex-button2', ExButton2);
```

::right::

## 外部樣式控制

- 方法三：使用 Attributes
直接使用屬性為組件提供樣式或狀態

```html
<ex-button2>按鈕 A</ex-button2>

<ex-button2 background="red">按鈕 B</ex-button2>

<ex-button2 background="#3b82f6">按鈕 C</ex-button2>
```

<ex-button2>按鈕 A</ex-button2>

<ex-button2 background="red">按鈕 B</ex-button2>

<ex-button2 background="#3b82f6">按鈕 C</ex-button2>

---
layout: two-cols
---

## 無效的外部樣式控制

- 有效範例

```html
<style>
  .blueBall::part(circle-outer) {
    background: #0e3ecf;
  }

  .redBall::part(circle-outer):hover {
    background: red;
  }
</style>

<ex-pool-ball>9</ex-pool-ball>
<ex-pool-ball class="blueBall">10</ex-pool-ball>
<ex-pool-ball class="redBall">11</ex-pool-ball>
```

<style>
  .blueBall::part(circle-outer) {
    background: #0e3ecf;
  }

  .redBall::part(circle-outer):hover {
    background: red;
  }
</style>

<ex-pool-ball>9</ex-pool-ball>
<ex-pool-ball class="blueBall">10</ex-pool-ball>
<ex-pool-ball class="redBall">11</ex-pool-ball>

::right::

```js {monaco-run}
class ExPoolBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .outerCircle {
          width: 48px;
          height: 48px;
          background: #ff9b00;
        }

        .innerCircle {
          width: 20px;
          height: 20px;
          background: white;
          font-size: 14px;
          color: black;
        }

        .outerCircle,
        .innerCircle {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          flex: 0 0 auto;
          border-radius: 50%;

        }
      </style>
      <span class="outerCircle" part="circle-outer">
        <span class="innerCircle"><slot></slot></span>
      </span>
    `;
  }
}

customElements.define('ex-pool-ball', ExPoolBall);
```

---
layout: two-cols
---

- 無效案例一：選擇 Shadow Dom 內部 class

```html
<style>
  .outerCircle {
    background: brown;
  }

  .blackBall .outerCircle {
    background: black;
  }
</style>

<ex-pool-ball>7</ex-pool-ball>
<ex-pool-ball class="blackBall">8</ex-pool-ball>
```

<style>
  .outerCircle {
    background: brown;
  }

  .blackBall .outerCircle {
    background: black;
  }
</style>

<ex-pool-ball>7</ex-pool-ball>
<ex-pool-ball class="blackBall">8</ex-pool-ball>

::right::

- 無效案例二：透過`::part`選擇器串聯其他選擇器

```html
<style>
  .redTextBall::part(circle-outer) .innerCircle {
    color: red;
  }
</style>
<ex-pool-ball class="redTextBall">R</ex-pool-ball>
```

<style>
  .redTextBall::part(circle-outer) .innerCircle {
    color: red;
  }
</style>
<ex-pool-ball class="redTextBall">R</ex-pool-ball>

---

## 如何快速開發 Web Components?

可使用第三方 library 來輔助開發
- Lit
- Stencil
- Hybrids
- Atomico
- FAST (Microsoft)
- Haunted
- Vue

[Compare Similar NPM Packages](https://npm-compare.com/@microsoft/fast-element,@stencil/core,atomico,haunted,hybrids,lit,vue/#timeRange=THREE_YEARS)

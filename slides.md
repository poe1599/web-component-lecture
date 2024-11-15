---
theme: default
title: Web Components 簡介
info: 
description: 為設計師與前端工程師介紹 Web Components 的核心概念與應用
author: poe1599@gmail.com
drawings:
  persist: false
mdc: true
lineNumbers: true
overviewSnapshots: false
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

<!-- 
## 為什麼要了解 Web Components？

- **設計師的好處**
  - 樣式隔離：不受應用樣式影響，讓設計一致    
    #這意味著設計師可以確保他們的設計在不同的應用中保持一致，而不會被其他樣式干擾。
  - 組件重用：跨不同專案與框架共享 UI 元件    
    #設計師可以創建一次組件，然後在多個項目中重複使用，節省時間和精力。
  - 支持 CSS 自訂屬性，便於靈活設計   
    #這使得設計師可以更靈活地調整樣式，而不需要修改組件的內部代碼。

- **前端工程師的好處**
  - 封裝性：清晰的模組結構，方便維護    
    #這有助於工程師更容易地理解和維護代碼，因為每個組件都是獨立且自包含的。
  - 標準化：可在任意框架中使用，提升開發效率    
    #Web Components 遵循標準，可以在不同的框架和庫中使用，這提高了開發的靈活性和效率。
  - 簡化樣式管理，減少樣式衝突    
    #由於樣式是封裝在組件內部的，這減少了全局樣式衝突的可能性，使得樣式管理更加簡單。
 -->

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

---
zoom: 0.8
---

## Web Components 開發使用上的痛點

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

<!-- 
如果已封裝完成的 Web Components 被引入至一個已完成設計開發的專案，則可能遭遇到的問題。
 -->

---
zoom: 0.8
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
leftClass: col-span-6
rightClass: col-span-6
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

<!-- 
- 簡報內示範使用 innerHTML 處理 html 結構
- 以下連結示範使用 `<template>` 處理 html 結構    
  [MDN 使用 template 創建 Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)  
  由於使用 `<template>` 不能取用直接取用 class 內的變數或 function，僅能作為靜態模板，故較不會採用。
 -->

---
layout: with-image
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
layout: with-image
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
leftClass: col-span-6
rightClass: col-span-6
---

```js {monaco-run}
class ExButton2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['data-background'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const background = this.getAttribute('data-background') || 'green';
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

<ex-button2 data-background="red">按鈕 B</ex-button2>

<ex-button2 data-background="#3b82f6">按鈕 C</ex-button2>
```

<ex-button2>按鈕 A</ex-button2>

<ex-button2 data-background="red">按鈕 B</ex-button2>

<ex-button2 data-background="#3b82f6">按鈕 C</ex-button2>

---
layout: two-cols
leftClass: col-span-6
rightClass: col-span-6
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

<!-- 
本頁先示範可行的外部樣式控制，採用簡單的 html 結構與樣式來示範。
這是一個撞球的 web component，由一個大圓 outerCircle 內含小圓 innerCircle 組成，
並只有在大圓設置 `part="circle-outer`。
 -->

---
layout: with-image
---

## 無效的外部樣式控制

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

---
layout: with-image
---

## 無效的外部樣式控制

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
layout: with-image
left: true
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

---

## 團隊目前專案使用的樣式管理方案

---
layout: two-cols
leftClass: col-span-6
rightClass: col-span-6
---

### SCSS

- SCSS 是 CSS 的預處理器，透過變數、嵌套、mixin 等功能來提升樣式的模組化和重用性。

  - PrimeVue
    - 組件透過 SCSS 變數實現 design token。(v3)
    - 部分 scss 變數會再轉成 css 變數暴露給外部。

<button class="p-button">Submit</button>

<style>
  .p-button {
    color: #ffffff;
    background: #06b6d4;
    border: 1px solid #06b6d4;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
    outline-color: transparent;
  }

  .p-button:hover {
    background: #0891b2;
    border: 1px solid #0891b2;
  }
</style>

::right::

````md magic-move {lines: true}
```html
// html
<button class="B-button">
  Submit
</button>
```

```scss
// scss 變數
$primaryColor: #06b6d4;
$primaryDarkColor: #0891b2;
...

$buttonBg: $primaryColor;
$buttonHoverBg: $primaryDarkColor;
...

// 定義按鈕樣式
.B-button {
  background: $buttonBg;
  ...

  &:hover {
    background: $buttonHoverBg;
  }
}

// 暴露 css 變數給外部使用
:root {
  --primary-color: #{$primaryColor};
  ...
}
```

```css
/* 編譯為 css 以後 */
.B-button {
  background: #06b6d4;
  ...
}

.B-button:hover {
  background: #0891b2;
  ...
}

:root {
  --primary-color: #06b6d4;
  ...
}
```
````

<!-- PrimeVue 按鈕範例使用 Severity 為預設的 Button -->

---

### UnoCSS

- UnoCSS 是 Utility-first 原子化 CSS 框架，透過配置生成最小化的樣式文件。只生成實際使用的樣式，減少不必要的 CSS。
- 專案內採用 theme 與 shortcut 來管理樣式。
  - theme 對應到 design token
  - shortcut 則是一個或多個樣式的設定 class

---

- **Theme：**
  - UnoCSS 允許開發者自定義主題變量（例如色彩、字體大小、間距等），讓樣式變數集中管理。theme 可以設定全局樣式變量，使開發者能輕鬆調整整體風格，並支持多主題設計。
  - 應用情境：設計多主題應用（如淺色和深色模式），或在專案中使用統一的顏色和字體設計系統。

- **Shortcut：**
  - UnoCSS 支持將多個工具類別組合成一個簡短的 class 名稱，以提升代碼的可讀性和復用性。這讓開發者可以自定義自己的 utility class，並大幅簡化複雜樣式的管理。
  - 應用情境：適合重複使用的樣式組合，如按鈕樣式、卡片樣式等，使得常用樣式更易於維護。

---
layout: with-image
left: true
---

華美投信/華昌投信

- **global folder:**
  - **theme.ts:** 用來設置不同層級的 token。
  - **shortcut.ts:** 用來設置文字、按鈕尺寸等組合。
  - **原子組件**
- **project folder:**
  - **global folder:**
    - **theme.ts:** 用來覆蓋 global token。
    - **shortcut.ts:** 用來覆蓋 global 組合。
  - **theme.ts:** 用來增設專案自己的 token。
  - **shortcut.ts:** 用來增設專案自己的組合。

---
layout: two-cols
leftClass: col-span-5
rightClass: col-span-7
---

#### UnoCSS Theme

新專案建置自身 project 的 theme.ts 時:
- 繼承 global theme.ts 設定
- 僅需調整不同配置的 token 參數
- 如有必要可以擴增中間層的 token
- 不增減組件架構 token (原則上)

<button class="basicButton g-body1">
  Submit
</button>

<style>
  .basicButton {
    /* data-styleType=normal-primary */
    --un-border-opacity: 1;
    border-color: rgb(197 22 22 / var(--un-border-opacity));
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));
    background: linear-gradient(90deg, #C51616 0, #C51616 100%);
    /* data-size=a */
    min-height: 32px;
    min-width: 64px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 11px;
    padding-right: 11px;
    text-align: center;
    /* data-animate=true */
    transition-duration: 200ms;
    transform: scale(1);
    /* basicButton */
    border-width: 1px;
    border-radius: 4px;
    border-style: solid;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin: 0;
  }

  .basicButton:hover {
    --un-border-opacity: 1;
    border-color: rgb(197 22 22 / var(--un-border-opacity));
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));
    background: linear-gradient(90deg, #E61919, #A01211);
  }

  .g-body1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
</style>


::right::

````md magic-move {lines: true}
```html
// html
<button class="basicButton g-body1">
  Submit
</button>
```

```ts
// theme.ts
// 原子 color token
const colors = {
  primary: {
    ...
    '40': '#E61919',
    '50': '#C51616',
    '60': '#A01211',
    ...
  },
  ...
}
```

```ts
// theme.ts
// 中間層 color token
const tokensColors = {
  surfaceColor: {
    primary: {
      enable: colors.primary['50'],
      ...
    },
    ...
  },
  ...
}

// 中間層 color token
const linearColors = {
  surfaceColor: {
    linear01: `linear-gradient(90deg, 
    ${colors.primary['40']},
    ${colors.primary['60']})`,
  },
  ...
}
```

```ts
// theme.ts
// 組件 color token
// 最終套用到組件上 (一個蘿蔔一個坑)
const componentsColors = {
  button: {
    surfaceColor: {
      normal: {
        primary: {
          enable: tokensColors.surfaceColor.primary.enable,
          hover: linearColors.surfaceColor.linear01,
          ...
        },
        ...
      },
      ...
    },
    ...
  },
  ...
}
```

```scss
// 在 scss 內使用 UnoCSS 提供的語法
// 定義組件按鈕樣式
.basicButton {
  background: linear-gradient(
    90deg,
    theme('colors.button.surfaceColor.normal.primary.enable') 0,
    theme('colors.button.surfaceColor.normal.primary.enable') 100%
  );
  ...

  // 按鈕手機版以上才有 hover 背景
  @screen sm {
    &:hover {
      background: theme('colors.button.surfaceColor.normal.primary.hover');
    }
  }
}
```

```css
/* 編譯為 css 以後 */
.basicButton {
  background: linear-gradient(90deg, #C51616 0, #C51616 100%);
  ...
}

.basicButton:hover {
  background: linear-gradient(90deg, #E61919, #A01211);
  ...
}
```
````

<!-- 
- 中間層的 token 可以根據情況擴充
- 如有特別調整，組件 token 也可以改成引用原子 token
- 原則上不增減組件 token，如有增減就代表原子組件要升版
- UnoCSS 範例使用華昌專案 type 為 normal-primary 的 BasicButton。
 -->

---
layout: two-cols
leftClass: col-span-5
rightClass: col-span-7
---

#### UnoCSS Shortcut

新專案建置自身 project 的 shortcut.ts 時:
- 繼承 global shortcut.ts 設定
- 僅需調整不同配置的 shortcut 內容
- 如有必要可以擴增(視情境升版)

*****

<div>
  <div class="g-title2">title2</div>
  <div class="g-body1">body1</div>
</div>

<style>
  /* 編譯為 css 以後 */
  .g-body1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px
  }

  /* sm: 768px 以上 */
  @media (min-width: 768px) {
    .g-body1 {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  /* md: 1280px 以上 */
  @media (min-width: 1280px) {
    .g-body1 {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  /* 編譯為 css 以後 */
  .g-title2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px
  }

  /* sm: 768px 以上 */
  @media (min-width: 768px) {
    .g-title2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px
    }
  }

  /* md: 1280px 以上 */
  @media (min-width: 1280px) {
    .g-title2 {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px
    }
  }
</style>

::right::

````md magic-move {lines: true}
```ts{*|8-10}
// shortcut.ts
export default {
  ...
  title2: `font-(size-20px 700) line-height-28px 
           sm:(font-(size-24px 700) line-height-32px) 
           md:(font-(size-30px 700) line-height-36px)`,
  ...
  body1: `font-(size-16px 400) line-height-24px 
          sm:(font-(size-16px 400) line-height-24px) 
          md:(font-(size-16px 400) line-height-24px)`
  ...
}
```

```css
/* 編譯為 css 以後 */
.g-body1 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px
}

/* sm: 768px 以上 */
@media (min-width: 768px) {
  .g-body1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
}

/* md: 1280px 以上 */
@media (min-width: 1280px) {
  .g-body1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
}
```

```ts{*|4-6}
// shortcut.ts
export default {
  ...
  title2: `font-(size-20px 700) line-height-28px 
           sm:(font-(size-24px 700) line-height-32px) 
           md:(font-(size-30px 700) line-height-36px)`,
  ...
  body1: `font-(size-16px 400) line-height-24px 
          sm:(font-(size-16px 400) line-height-24px) 
          md:(font-(size-16px 400) line-height-24px)`
  ...
}
```

```css
/* 編譯為 css 以後 */
.g-title2 {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px
}

/* sm: 768px 以上 */
@media (min-width: 768px) {
  .g-title2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px
  }
}

/* md: 1280px 以上 */
@media (min-width: 1280px) {
  .g-title2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px
  }
}
```
````

---
layout: two-cols
leftClass: col-span-5
rightClass: col-span-7
---

### PrimeVue + UnoCSS

新底層
- PrimeVue 組件樣式由 PrimeVue 自身透過 SCSS 管理。
- 封裝過的原子組件樣式由 UnoCSS 搭配 PrimeVue 管理。

*****
<br/>
<div class="T-block">T-block</div>

<style>
  /* 為了處理顯示，這裡與實際情況不同 */
  .T-block {
    /*  */
    --primary-color: #6366F1;
    --primary-active-color: #4338CA;
    --primary-color-text: #ffffff;
    --primary-light-color: #C7D2FE;


    /*  */
    color: var(--primary-color-text);
    background: var(--primary-color);
    padding: 16px;
  }
</style>

::right::

````md magic-move {lines: true}
```scss
// PrimeVue SCSS
// theme.scss
$primaryColor: #6366F1;
$primaryLightColor: #C7D2FE;
$primaryDarkColor: #4F46E5;
$primaryDarkerColor: #4338CA;
$primaryTextColor: #ffffff;

// variable.scss
:root {
  ...
  --primary-color: #{$primaryColor};
  --primary-active-color: #{$primaryDarkerColor};
  --primary-color-text: #{$primaryTextColor};
  --primary-light-color: #{$primaryLightColor};
  ...
}
```

```ts
// UnoCSS theme.ts
const primeVueColors = {
  ...
  primary: {
    ...
    color: 'var(--primary-color)',
    active: 'var(--primary-active-color)',
    text: 'var(--primary-color-text)',
    light: 'var(--primary-light-color)',
  },
  ...
}
```

```scss
// 專案的組件或領域的 SCSS
.T-block {
  @apply text-primary-text bg-primary-color p-xl;
}
```

```css
/* UnoCSS 編譯成 CSS */
.T-block {
  color: var(--primary-color-text);
  background: var(--primary-color);
  padding: 16px;
}

/* PrimeVue 編譯成 CSS */
:root {
  --primary-color: #6366F1;
  --primary-active-color: #4338CA;
  --primary-color-text: #ffffff;
  --primary-light-color: #C7D2FE;
}
```

```html
// html
<div class="T-block">
  T-block
</div>
```

````
---
title: 'CommonJS vs ES6 Modules trong JavaScript'
description: 'CommonJS và ES6 Modules: cú pháp, cách hoạt động, hiệu năng và các trường hợp sử dụng phù hợp'
pubDate: 2024-03-15
author: 'Trung'
tags: ['javascript', 'commonjs', 'es6', 'nodejs']
---

## So sánh giữa **CommonJS** và **ES6 Modules**

Khi so sánh **CommonJS** và **ES6 modules**, có thể thấy rõ sự khác biệt về cú pháp, cách thức hoạt động, và môi trường sử dụng. Dưới đây là bảng so sánh giữa hai hệ thống module này:

## 1. **Cú pháp và cách sử dụng**

| **Yếu tố**                      | **CommonJS**                                            | **ES6 Modules**                                                    |
| ------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| **Cú pháp nhập module**         | `const module = require('./module');`                   | `import module from './module';`                                   |
| **Cú pháp xuất module**         | `module.exports = value;` hoặc `exports.value = value;` | `export default value;` hoặc `export { value };`                   |
| **Nhập toàn bộ module**         | `const module = require('./module');`                   | `import * as module from './module';`                              |
| **Nhập nhiều đối tượng**        | Không có cú pháp chính thức, phải `require` nhiều lần   | `import { foo, bar } from './module';`                             |
| **Hỗ trợ đồng bộ/ bất đồng bộ** | Đồng bộ (Synchronous)                                   | Bất đồng bộ (asynchronous, đặc biệt khi sử dụng trong trình duyệt) |

## 2. **Hỗ trợ môi trường**

| **Yếu tố**                    | **CommonJS**                                                                                                           | **ES6 Modules**                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Môi trường hỗ trợ**         | Chủ yếu trong Node.js (trước v12), nhưng có thể sử dụng trong trình duyệt thông qua bundlers (Webpack, Browserify,...) | Trình duyệt hiện đại và Node.js từ phiên bản 12 trở lên với `type="module"` trong HTML hoặc `mjs` extension |
| **Sử dụng trong trình duyệt** | Không hỗ trợ trực tiếp, phải thông qua bundlers                                                                        | Hỗ trợ trực tiếp trong các trình duyệt hiện đại                                                             |

## 3. **Quản lý module và nạp module**

| **Yếu tố**                 | **CommonJS**                                                           | **ES6 Modules**                                                                                    |
| -------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Cách nạp module**        | Nạp module đồng bộ tại thời điểm thực thi (runtime)                    | Nạp module tĩnh tại thời điểm biên dịch (compile-time)                                             |
| **Nạp module động**        | Có thể `require` các module một cách động trong mã (dựa vào điều kiện) | Không thể nạp module một cách động nếu không sử dụng các giải pháp như `import()` (dynamic import) |
| **Tính năng tree shaking** | Không hỗ trợ tree shaking                                              | Hỗ trợ tree shaking khi sử dụng bundlers như Webpack                                               |
| **Tải module**             | Đồng bộ (synchronous)                                                  | Bất đồng bộ (asynchronous) trong trình duyệt, đồng bộ trong Node.js                                |

## 4. **Tính năng và lợi ích**

| **Yếu tố**              | **CommonJS**                                                             | **ES6 Modules**                                                                            |
| ----------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Tính đồng bộ**        | Module được tải đồng bộ, mã sẽ dừng lại cho đến khi module được tải xong | Module tĩnh, giúp tối ưu và nạp trước khi thực thi (giúp cải thiện hiệu suất khi bundling) |
| **Khả năng tối ưu hóa** | Không hỗ trợ tree shaking, mã không sử dụng không được loại bỏ           | Hỗ trợ tree shaking, giúp loại bỏ mã không sử dụng khi build                               |
| **Cộng đồng hỗ trợ**    | Phổ biến trong Node.js, rất thích hợp cho các ứng dụng server-side       | Được chuẩn hóa trong ECMAScript, hỗ trợ cả trình duyệt và Node.js                          |
| **Nạp module tĩnh**     | Không hỗ trợ nạp module tĩnh                                             | Hỗ trợ nạp module tĩnh, giúp dễ dàng tối ưu hóa và phân tích mã                            |

### 5. **Điểm khác biệt chính**

| **Yếu tố**                             | **CommonJS**                                                                                                                  | **ES6 Modules**                                                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Cách nạp module**                    | Module được nạp ngay lập tức khi `require` được gọi. Nó hoạt động đồng bộ, chặn mã thực thi cho đến khi module được tải xong. | Nạp module theo cách tĩnh, điều này giúp trình biên dịch hoặc bundler có thể tối ưu hóa mã (ví dụ: tree shaking). |
| **Khả năng tối ưu hóa**                | Không hỗ trợ tree shaking, do đó có thể làm tăng kích thước của mã khi build.                                                 | Hỗ trợ tree shaking, giúp giảm kích thước mã và loại bỏ mã không sử dụng.                                         |
| **Khả năng sử dụng trong trình duyệt** | Không hỗ trợ trực tiếp trong trình duyệt mà cần phải sử dụng công cụ như Webpack hoặc Browserify.                             | Được hỗ trợ trực tiếp trong trình duyệt, chỉ cần `type="module"` trong thẻ `<script>`.                            |
| **Dễ sử dụng và mở rộng**              | Thường dễ sử dụng trong Node.js, nhưng không hỗ trợ nhiều tính năng hiện đại như `async` loading hoặc tree shaking.           | Là lựa chọn hiện đại, có tính tương thích cao hơn, và dễ dàng mở rộng cho các dự án client-side.                  |

## 6. **Khi nào dùng CommonJS và khi nào dùng ES6 Modules?**

- **Sử dụng CommonJS** khi:

  - Bạn phát triển ứng dụng **Node.js** và không cần phải hỗ trợ trình duyệt.
  - Dự án của bạn có tính đồng bộ và bạn muốn nạp module đồng bộ tại thời điểm thực thi.
  - Bạn đang làm việc với các thư viện hoặc mã cũ sử dụng CommonJS.

- **Sử dụng ES6 Modules** khi:
  - Bạn muốn phát triển ứng dụng hỗ trợ cả **trình duyệt và Node.js**.
  - Bạn cần tối ưu hóa mã (tree shaking, giảm kích thước bundle).
  - Bạn muốn sử dụng tính năng **import/export tĩnh**, có thể dễ dàng tối ưu hóa và phân tích mã trong các công cụ hiện đại như Webpack, Rollup, hoặc Parcel.

Tóm lại, nếu bạn đang làm việc trong môi trường Node.js truyền thống và không cần tối ưu hóa mã cho trình duyệt, **CommonJS** là sự lựa chọn hợp lý. Nếu bạn phát triển ứng dụng hiện đại với yêu cầu tối ưu hóa và hỗ trợ trình duyệt, **ES6 Modules** là lựa chọn tốt hơn.

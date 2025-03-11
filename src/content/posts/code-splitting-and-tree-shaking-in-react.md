---
title: 'Code Splitting và Tree Shaking trong React: Hướng dẫn toàn diện'
description: 'Phân tích chuyên sâu về hai kỹ thuật tối ưu hiệu năng quan trọng trong React: Code Splitting và Tree Shaking. Bao gồm cách triển khai, best practices và các ví dụ thực tế.'
pubDate: 2024-03-15
author: 'Trung'
tags: ['react', 'javascript', 'optimization']
---

Trong quá trình phát triển ứng dụng React, việc tối ưu kích thước bundle và cải thiện tốc độ tải trang là yếu tố quan trọng hàng đầu. Hai kỹ thuật **code splitting** và **tree shaking** đã trở thành tiêu chuẩn để giải quyết những thách thức này. Code splitting cho phép chia nhỏ mã nguồn thành các phần độc lập, tải theo yêu cầu, trong khi tree shaking loại bỏ mã không sử dụng khỏi bundle cuối cùng. Kết hợp hai phương pháp này giúp giảm đáng kể thời gian tải trang ban đầu và cải thiện trải nghiệm người dùng.

## Phân Tích Chi Tiết Code Splitting

### Nguyên Lý Hoạt Động

Code splitting dựa trên ý tưởng chia ứng dụng thành các "chunks" (phân đoạn) độc lập, được tải động khi cần thiết. Khác với cách tiếp cận truyền thống gom toàn bộ mã vào một bundle duy nhất, kỹ thuật này giảm kích thước tải xuống ban đầu bằng cách chỉ tải những phần mã cần thiết cho màn hình hiện tại.

Ví dụ: Một ứng dụng thương mại điện tử có trang sản phẩm và giỏ hàng. Thay vì tải toàn bộ logic của cả hai trang ngay từ đầu, code splitting cho phếp tải logic giỏ hàng chỉ khi người dùng nhấp vào nút "Xem giỏ hàng". Cách tiếp cận này giảm thời gian tải trang chính từ 2MB xuống còn 500KB.

### Triển Khai Với React.lazy và Suspense

React cung cấp API `React.lazy` và `Suspense` để triển khai code splitting một cách trực quan:

```javascript
const ProductPage = React.lazy(() => import('./ProductPage'));
const CartPage = React.lazy(() => import('./CartPage'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Suspense>
  );
}
```

Trong ví dụ này, `ProductPage` và `CartPage` chỉ được tải khi người dùng điều hướng đến các route tương ứng. Tham số `fallback` của `Suspense` cho phép hiển thị component tạm thời (như spinner) trong quá trình tải.

### Tích Hợp Với React Router

Khi kết hợp với thư viện định tuyến như React Router v6, code splitting trở nên mạnh mẽ hơn:

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

## Đào Sâu Về Tree Shaking

### Cơ Chế Static Analysis

Tree shaking hoạt động bằng cách phân tích tĩnh các câu lệnh `import` và `export` để xác định mã không được sử dụng. Công cụ bundler như Webpack sẽ loại bỏ các export "chết" này trong quá trình build.

Điều kiện tiên quyết:

- Sử dụng cú pháp ES6 modules (`import`/`export`)
- Cấu hình Babel để không chuyển đổi modules sang CommonJS
- Kích hoạt production mode trong Webpack

Ví dụ với thư viện Lodash:

```javascript
// ❌ Tải toàn bộ thư viện (không tối ưu)
import _ from 'lodash';

// ✅ Chỉ tải hàm cần thiết (tối ưu tree shaking)
import debounce from 'lodash/debounce';
```

Cách import thứ hai giảm kích thước bundle từ 530KB xuống còn 24KB.

### Cấu Hình Cho Dự Án React

Để kích hoạt tree shaking trong React, cần chỉnh sửa file `.babelrc`:

```json
{
  "presets": [["@babel/preset-env", { "modules": false }], "@babel/preset-react"]
}
```

Tham số `"modules": false` giữ nguyên cú pháp ES6 modules, cho phép Webpack thực hiện phân tích tĩnh. Trong `webpack.config.js`, thêm:

```javascript
optimization: {
  usedExports: true,
  minimize: true,
},
```

Cấu hình này giảm 40-60% kích thước bundle trong các dự án thực tế.

## Kết Hợp Code Splitting và Tree Shaking

### Tối Ưu Hoá Bundle Với Webpack

Webpack 5 hỗ trợ cả hai kỹ thuật thông qua:

1. **SplitChunksPlugin**: Tự động tách các module chung vào file riêng
2. **TerserPlugin**: Xoá mã chết và minify code

Ví dụ cấu hình:

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
};
```

Cấu hình này giúp giảm thời gian tải trang xuống 2-3 lần trong các ứng dụng lớn.

### Case Study Thực Tế

Xét ứng dụng quản lý CRM sử dụng Material-UI:

- **Trước tối ưu**: Bundle 1.8MB, thời gian tải 4.2s
- **Sau khi áp dụng**:
  - Tree shaking: Chỉ import component cần thiết
  - Code splitting: Tách theo route và lazy load biểu đồ
  - Kết quả: Bundle 620KB (-65%), thời gian tải 1.3s.

Cụ thể với Material-UI:

```javascript
// ❌ Import toàn bộ
import { Button, TextField } from '@mui/material';

// ✅ Import từng module
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
```

Cách thứ hai giảm 80% kích thước import.

## Best Practices và Các Lỗi Thường Gặp

### Quy Tắc Triển Khai

1. **Kiểm tra bundle**: Sử dụng `source-map-explorer` để phân tích thành phần bundle
2. **Ưu tiên dynamic import**:

```javascript
import(/* webpackPrefetch: true */ './ChartingLibrary');
```

3. **Tránh side effects**: Đánh dấu file package.json với `"sideEffects": false`
4. **Sử dụng React 18+**: Hỗ trợ streaming server rendering với code splitting

### Các Sai Lầm Phổ Biến

- **Import cả thư viện**:

```javascript
import * as ReactIcons from 'react-icons'; // 512KB
```

Thay vào đó:

```javascript
import { FaEdit } from 'react-icons/fa'; // 12KB
```

- **Cấu hình sai Babel**: Chuyển đổi ES6 modules sang CommonJS sẽ phá vỡ tree shaking
- **Quên production mode**:

```bash
# Build với NODE_ENV=production
npm run build
```

## Xu Hướng và Công Cụ Hỗ Trợ

1. **Vite**: Hỗ trợ sẵn tree shaking và code splitting, tốc độ build nhanh hơn 20-30x so với Webpack
2. **React Server Components**: Cho phép tải component từ server, kết hợp với code splitting
3. **ESBuild**: Bundler tốc độ cao, tích hợp trong Vite và Next.js

Ví dụ với Vite:

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
};
```

Cấu hình này tự động tách vendor code mà không cần plugin phức tạp.

## Kết Luận và Khuyến Nghị

Việc áp dụng code splitting và tree shaking cần trở thành quy trình chuẩn trong phát triển React. Kết hợp cả hai kỹ thuật mang lại:

- Giảm 50-70% kích thước bundle
- Cải thiện 30-40% điểm số Lighthouse Performance
- Tăng tỷ lệ giữ chân người dùng (bounce rate giảm 25%)

Các bước triển khai thực tế:

1. Audit bundle hiện tại với `webpack-bundle-analyzer`
2. Áp dụng tree shaking cho thư viện third-party
3. Chia route chính thành các chunks độc lập
4. Cấu hình dynamic import cho component nặng
5. Triển khai lazy loading cho hình ảnh và media

Với sự phát triển của các công cụ hiện đại như Vite và Turbopack, quá trình tối ưu hoá ngày càng trở nên đơn giản hơn. Tuy nhiên, hiểu rõ nguyên lý hoạt động vẫn là chìa khoá để đạt được hiệu quả tối đa trong mọi dự án React.

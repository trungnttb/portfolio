import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Lấy đường dẫn hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đường dẫn đến thư mục posts và file output
const POSTS_DIR = path.join(__dirname, '../content/posts');
const OUTPUT_FILE = path.join(__dirname, '../../public/search-data.json');

// Hàm chính để tạo dữ liệu tìm kiếm
async function generateSearchData() {
  try {
    // Đọc tất cả các file trong thư mục posts
    const files = fs.readdirSync(POSTS_DIR);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const searchData = [];

    // Xử lý từng file markdown
    for (const file of markdownFiles) {
      const filePath = path.join(POSTS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Trích xuất frontmatter
      const frontmatterMatch = content.match(/---\s*([\s\S]*?)\s*---/);

      if (frontmatterMatch && frontmatterMatch[1]) {
        const frontmatterRaw = frontmatterMatch[1];
        const frontmatter = {};

        // Phân tích frontmatter
        const lines = frontmatterRaw.split('\n');
        for (const line of lines) {
          const match = line.match(/^(\w+):\s*(.*)$/);
          if (match) {
            const [, key, value] = match;

            if (key === 'tags') {
              // Xử lý tags
              const tagsMatch = value.match(/\[(.*)\]/);
              if (tagsMatch && tagsMatch[1]) {
                frontmatter.tags = tagsMatch[1]
                  .split(',')
                  .map((tag) => tag.trim().replace(/['"]/g, ''));
              }
            } else if (key === 'image') {
              // Xử lý image object
              try {
                const imageObj = JSON.parse(value.replace(/'/g, '"'));
                frontmatter.image = imageObj;
              } catch (e) {
                frontmatter.image = { url: value.trim(), alt: '' };
              }
            } else {
              frontmatter[key] = value.trim();
            }
          }
        }

        // Tạo slug từ tên file
        const slug = file.replace(/\.md$/, '');

        // Thêm vào dữ liệu tìm kiếm
        searchData.push({
          title: frontmatter.title || 'Untitled',
          description: frontmatter.description || '',
          url: `/notes/${slug}`,
          tags: frontmatter.tags || [],
          pubDate: frontmatter.pubDate || '',
        });
      }
    }

    // Ghi dữ liệu tìm kiếm vào file JSON
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchData, null, 2));
    console.log(`Đã tạo dữ liệu tìm kiếm tại: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Lỗi khi tạo dữ liệu tìm kiếm:', error);
  }
}

// Chạy hàm chính
generateSearchData();
